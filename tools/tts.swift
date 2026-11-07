// usage: tts <voiceId> <rate 0-1> <pitch 0.5-2> <out.caf> <text>
import AVFoundation
let a = CommandLine.arguments
let synth = AVSpeechSynthesizer()
let u = AVSpeechUtterance(string: a[5])
u.voice = AVSpeechSynthesisVoice(identifier: a[1]); u.rate = Float(a[2])!; u.pitchMultiplier = Float(a[3])!
var file: AVAudioFile?
var frames = 0
synth.write(u) { buf in
  guard let pcm = buf as? AVAudioPCMBuffer else { return }
  if pcm.frameLength == 0 { print("done frames:", frames); exit(frames > 0 ? 0 : 2) }
  if file == nil { file = try! AVAudioFile(forWriting: URL(fileURLWithPath: a[4]), settings: pcm.format.settings, commonFormat: pcm.format.commonFormat, interleaved: pcm.format.isInterleaved) }
  try! file!.write(from: pcm); frames += Int(pcm.frameLength)
}
DispatchQueue.main.asyncAfter(deadline: .now() + 30) { print("timeout frames:", frames); exit(frames > 0 ? 0 : 3) }
RunLoop.main.run()
