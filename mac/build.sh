#!/bin/zsh
# Builds "Push-Up Ranks.app" from main.swift + ../index.html
set -e
cd "$(dirname "$0")"
APP="build/Push-Up Ranks.app"
rm -rf build && mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"

# universal binary so it runs on Apple Silicon and Intel Macs
swiftc -O -swift-version 5 main.swift -o build/PushUpRanks-arm64 -framework AppKit -framework WebKit -target arm64-apple-macos13
swiftc -O -swift-version 5 main.swift -o build/PushUpRanks-x86_64 -framework AppKit -framework WebKit -target x86_64-apple-macos13
lipo -create build/PushUpRanks-arm64 build/PushUpRanks-x86_64 -output "$APP/Contents/MacOS/PushUpRanks"

# bundle art.js into the page (the app loads index.html as a single document)
python3 - "$APP/Contents/Resources/index.html" <<'PY'
import sys
html = open("../index.html").read()
art = open("../art.js").read()
tag = '<script src="art.js"></script>'
assert tag in html, "art.js tag missing"
import re
html = re.sub(r"<!--web-only-->.*?<!--/web-only-->", "", html, flags=re.S)   # website-only tags would make the app fetch from a fake domain
open(sys.argv[1], "w").write(html.replace(tag, "<script>\n" + art + "\n</script>"))
PY

# icon
swiftc -swift-version 5 make_icon.swift -o build/make_icon
mkdir -p build/AppIcon.iconset
for s in 16 32 128 256 512; do
  ./build/make_icon $s build/AppIcon.iconset/icon_${s}x${s}.png
  ./build/make_icon $((s*2)) build/AppIcon.iconset/icon_${s}x${s}@2x.png
done
iconutil -c icns build/AppIcon.iconset -o "$APP/Contents/Resources/AppIcon.icns"

cat > "$APP/Contents/Info.plist" <<'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>CFBundleName</key><string>Push-Up Ranks</string>
  <key>CFBundleDisplayName</key><string>Push-Up Ranks</string>
  <key>CFBundleIdentifier</key><string>com.owen.pushupranks</string>
  <key>CFBundleExecutable</key><string>PushUpRanks</string>
  <key>CFBundleIconFile</key><string>AppIcon</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>CFBundleShortVersionString</key><string>1.0</string>
  <key>CFBundleVersion</key><string>1</string>
  <key>LSMinimumSystemVersion</key><string>13.0</string>
  <key>LSApplicationCategoryType</key><string>public.app-category.healthcare-fitness</string>
  <key>NSHighResolutionCapable</key><true/>
  <key>NSCameraUsageDescription</key><string>Push-Up Ranks uses your camera to count your push-ups. Video stays on your Mac.</string>
</dict></plist>
PLIST

codesign --force --deep --sign - "$APP"
# zip to send to friends
ditto -c -k --keepParent "$APP" "build/Push-Up-Ranks-Mac.zip"
echo "Built: $PWD/$APP"
echo "Share: $PWD/build/Push-Up-Ranks-Mac.zip"
