import AppKit

// Draws the app icon and writes a PNG of the given size: make_icon <size> <out.png>
let args = CommandLine.arguments
let size = CGFloat(Double(args[1])!)
let out = args[2]

let img = NSImage(size: NSSize(width: size, height: size))
img.lockFocus()
let inset = size * 0.09
let rect = NSRect(x: inset, y: inset, width: size - inset * 2, height: size - inset * 2)
let path = NSBezierPath(roundedRect: rect, xRadius: rect.width * 0.225, yRadius: rect.width * 0.225)
NSGradient(colors: [NSColor(red: 0.10, green: 0.12, blue: 0.17, alpha: 1),
                    NSColor(red: 0.03, green: 0.04, blue: 0.06, alpha: 1)])!.draw(in: path, angle: -90)

// gold ring
let ringR = rect.insetBy(dx: rect.width * 0.14, dy: rect.width * 0.14)
let ring = NSBezierPath(ovalIn: ringR)
NSGradient(colors: [NSColor(red: 1.0, green: 0.89, blue: 0.48, alpha: 1),
                    NSColor(red: 0.96, green: 0.70, blue: 0.0, alpha: 1)])!.draw(in: ring, angle: -60)

// flexed arm emoji
let emoji = "💪" as NSString
let fontSize = ringR.width * 0.58
let attrs: [NSAttributedString.Key: Any] = [.font: NSFont.systemFont(ofSize: fontSize)]
let es = emoji.size(withAttributes: attrs)
emoji.draw(at: NSPoint(x: ringR.midX - es.width / 2, y: ringR.midY - es.height / 2), withAttributes: attrs)
img.unlockFocus()

let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(size), pixelsHigh: Int(size),
                           bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
                           colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
rep.size = img.size
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
img.draw(in: NSRect(x: 0, y: 0, width: size, height: size))
NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
