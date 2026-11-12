import AppKit
import WebKit

// By default a click on an inactive window only activates it and never reaches the page,
// which makes buttons feel broken. Accept that first click so every button responds immediately.
final class AppWebView: WKWebView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool { true }
}

final class AppDelegate: NSObject, NSApplicationDelegate, WKUIDelegate, WKNavigationDelegate {
    var window: NSWindow!
    var webView: WKWebView!

    func applicationDidFinishLaunching(_ notification: Notification) {
        let config = WKWebViewConfiguration()
        config.websiteDataStore = .default()          // keeps rank progress between launches
        config.mediaTypesRequiringUserActionForPlayback = []
        config.preferences.setValue(true, forKey: "developerExtrasEnabled")

        webView = AppWebView(frame: .zero, configuration: config)
        webView.uiDelegate = self
        webView.navigationDelegate = self
        webView.setValue(false, forKey: "drawsBackground")

        window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 1280, height: 860),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered, defer: false)
        window.title = "OmniFit"
        window.appearance = NSAppearance(named: .darkAqua)
        window.backgroundColor = NSColor(red: 0.043, green: 0.051, blue: 0.071, alpha: 1)
        window.minSize = NSSize(width: 820, height: 640)
        window.contentView = webView
        window.setFrameAutosaveName("PushUpRanksMain")
        if !window.setFrameUsingName("PushUpRanksMain") { window.center() }
        window.makeKeyAndOrderFront(nil)

        // Load the bundled page under an https origin so the camera API (secure context) works
        // and localStorage persists under a stable origin.
        if let url = Bundle.main.url(forResource: "index", withExtension: "html"),
           let html = try? String(contentsOf: url, encoding: .utf8) {
            webView.loadHTMLString(html, baseURL: URL(string: "https://pushup-ranks.app/"))
        }
        NSApp.activate(ignoringOtherApps: true)
    }

    // keep the display awake while the app is open — you're on the floor, not touching the Mac
    var awake: NSObjectProtocol?
    func applicationDidBecomeActive(_ notification: Notification) {
        if awake == nil { awake = ProcessInfo.processInfo.beginActivity(options: [.idleDisplaySleepDisabled, .userInitiated], reason: "Counting push-ups") }
    }
    func applicationDidResignActive(_ notification: Notification) {
        if let a = awake { ProcessInfo.processInfo.endActivity(a); awake = nil }
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }

    // Grant camera to our own page (macOS still shows its system camera prompt the first time).
    func webView(_ webView: WKWebView, requestMediaCapturePermissionFor origin: WKSecurityOrigin,
                 initiatedByFrame frame: WKFrameInfo, type: WKMediaCaptureType,
                 decisionHandler: @escaping (WKPermissionDecision) -> Void) {
        decisionHandler(.grant)
    }

    // Support confirm() / alert() from the page (used by "Reset progress").
    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {
        let a = NSAlert(); a.messageText = message
        a.addButton(withTitle: "OK"); a.addButton(withTitle: "Cancel")
        completionHandler(a.runModal() == .alertFirstButtonReturn)
    }
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let a = NSAlert(); a.messageText = message; a.runModal(); completionHandler()
    }

    // Pages that open a popup with window.open (PayPal checkout) get a real small window that shares this
    // web view's session, so the popup can talk back to the page when the payment is done.
    var popups: [PopupWindow] = []
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
                 for action: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        let p = PopupWindow(configuration: configuration, parent: window) { [weak self] done in
            self?.popups.removeAll { $0 === done }
        }
        popups.append(p)
        return p.webView
    }

    // Open any external links in the real browser instead of inside the app.
    func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if action.navigationType == .linkActivated, let u = action.request.url {
            NSWorkspace.shared.open(u); decisionHandler(.cancel)
        } else { decisionHandler(.allow) }
    }
}

final class PopupWindow: NSObject, WKUIDelegate, WKNavigationDelegate, NSWindowDelegate {
    let webView: WKWebView
    let win: NSWindow
    let onClose: (PopupWindow) -> Void
    init(configuration: WKWebViewConfiguration, parent: NSWindow?, onClose: @escaping (PopupWindow) -> Void) {
        webView = AppWebView(frame: .zero, configuration: configuration)
        win = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 480, height: 720),
                       styleMask: [.titled, .closable, .resizable], backing: .buffered, defer: false)
        self.onClose = onClose
        super.init()
        webView.uiDelegate = self
        webView.navigationDelegate = self
        win.contentView = webView
        win.isReleasedWhenClosed = false
        win.delegate = self
        if let f = parent?.frame { win.setFrameOrigin(NSPoint(x: f.midX - 240, y: f.midY - 360)) } else { win.center() }
        win.makeKeyAndOrderFront(nil)
    }
    func webViewDidClose(_ webView: WKWebView) { win.close() }
    func windowWillClose(_ notification: Notification) { onClose(self) }
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) { win.title = webView.title ?? "" }
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let a = NSAlert(); a.messageText = message; a.runModal(); completionHandler()
    }
}

// Minimal menu so Cmd+Q, Cmd+W, Cmd+R, full screen work.
func buildMenu() {
    let main = NSMenu()
    let appItem = NSMenuItem(); main.addItem(appItem)
    let appMenu = NSMenu()
    appMenu.addItem(withTitle: "About OmniFit", action: #selector(NSApplication.orderFrontStandardAboutPanel(_:)), keyEquivalent: "")
    appMenu.addItem(.separator())
    appMenu.addItem(withTitle: "Hide OmniFit", action: #selector(NSApplication.hide(_:)), keyEquivalent: "h")
    appMenu.addItem(withTitle: "Quit OmniFit", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
    appItem.submenu = appMenu

    let viewItem = NSMenuItem(); main.addItem(viewItem)
    let viewMenu = NSMenu(title: "View")
    viewMenu.addItem(withTitle: "Reload", action: #selector(WKWebView.reload(_:)), keyEquivalent: "r")
    let fs = viewMenu.addItem(withTitle: "Enter Full Screen", action: #selector(NSWindow.toggleFullScreen(_:)), keyEquivalent: "f")
    fs.keyEquivalentModifierMask = [.command, .control]
    viewItem.submenu = viewMenu

    let winItem = NSMenuItem(); main.addItem(winItem)
    let winMenu = NSMenu(title: "Window")
    winMenu.addItem(withTitle: "Close", action: #selector(NSWindow.performClose(_:)), keyEquivalent: "w")
    winMenu.addItem(withTitle: "Minimize", action: #selector(NSWindow.miniaturize(_:)), keyEquivalent: "m")
    winItem.submenu = winMenu
    NSApp.mainMenu = main
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)
buildMenu()
app.run()
