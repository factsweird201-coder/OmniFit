import AppKit

// Draws the 1200x630 link-preview image: make_og <out.png>
let W: CGFloat = 1200, H: CGFloat = 630
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(W), pixelsHigh: Int(H), bitsPerSample: 8, samplesPerPixel: 4,
                           hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
let full = NSRect(x: 0, y: 0, width: W, height: H)
NSGradient(colors: [NSColor(red: 0.07, green: 0.08, blue: 0.12, alpha: 1), NSColor(red: 0.02, green: 0.03, blue: 0.05, alpha: 1)])!.draw(in: full, angle: -90)
// glows
for (c, x, y, r) in [(NSColor(red: 1, green: 0.76, blue: 0.1, alpha: 0.22), 250.0, 330.0, 360.0),
                     (NSColor(red: 0.29, green: 0.66, blue: 1, alpha: 0.18), 1050.0, 560.0, 380.0),
                     (NSColor(red: 1, green: 0.3, blue: 0.37, alpha: 0.16), 1000.0, 60.0, 340.0)] {
    let cg = NSGraphicsContext.current!.cgContext
    let grad = CGGradient(colorsSpace: CGColorSpaceCreateDeviceRGB(), colors: [c.cgColor, c.withAlphaComponent(0).cgColor] as CFArray, locations: [0, 1])!
    cg.drawRadialGradient(grad, startCenter: CGPoint(x: x, y: y), startRadius: 0, endCenter: CGPoint(x: x, y: y), endRadius: r, options: [])
}
// gold coin with flexed arm
let coin = NSRect(x: 120, y: 175, width: 280, height: 280)
NSGradient(colors: [NSColor(red: 1, green: 0.89, blue: 0.48, alpha: 1), NSColor(red: 0.96, green: 0.70, blue: 0, alpha: 1)])!.draw(in: NSBezierPath(ovalIn: coin), angle: -60)
let emoji = "💪" as NSString
let ea: [NSAttributedString.Key: Any] = [.font: NSFont.systemFont(ofSize: 160)]
let es = emoji.size(withAttributes: ea)
emoji.draw(at: NSPoint(x: coin.midX - es.width / 2, y: coin.midY - es.height / 2), withAttributes: ea)
// text
func text(_ s: String, _ size: CGFloat, _ weight: NSFont.Weight, _ color: NSColor, _ x: CGFloat, _ y: CGFloat) {
    (s as NSString).draw(at: NSPoint(x: x, y: y), withAttributes: [.font: NSFont.systemFont(ofSize: size, weight: weight), .foregroundColor: color, .kern: 2])
}
let gold = NSColor(red: 1, green: 0.76, blue: 0.1, alpha: 1)
text("OMNI", 92, .heavy, .white, 460, 345)
text("FIT", 92, .heavy, gold, 460, 245)
text("All-in-one fitness · camera rep counting", 34, .semibold, NSColor(white: 0.85, alpha: 1), 464, 180)
text("Campaigns · Hyrox · Stretching · Meals", 34, .semibold, NSColor(white: 0.85, alpha: 1), 464, 132)
NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: CommandLine.arguments[1]))
