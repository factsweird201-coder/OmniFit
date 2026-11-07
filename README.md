# Push-Up Ranks 💪

Camera push-up counter that ranks you up by lifetime push-ups, with boss fights and online 1v1 battles.

**Play:** https://factsweird201-coder.github.io/push-up-ranks/

- Put your phone or laptop on the floor about 2 m away, facing you or side-on.
- Your progress is saved in your browser.
- Video never leaves your device. Pose tracking runs locally with MediaPipe.

## 1v1 battles
Open the **1v1** tab, create a battle and send the 5-letter code or invite link to a friend.
You each do push-ups on your own camera, and every rep damages your opponent.
Players connect directly (WebRTC via PeerJS). Only rep counts and a stick-figure outline are shared.

## Mac app
`mac/build.sh` builds a native Mac app wrapper (`mac/build/Push-Up Ranks.app` and a shareable zip).
The app isn't notarized, so the first time you open it, go to System Settings → Privacy & Security → Open Anyway.
