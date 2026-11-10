# OmniFit 💪

All-in-one fitness app: camera rep counting for push-ups, squats and sit-ups, story campaigns, boss fights, Endurance races, stretching, a personal trainer, meal plans, and an optional account that syncs your progress across devices.

(Formerly Push-Up Ranks.)

**Play:** https://factsweird201-coder.github.io/push-up-ranks/

- Put your phone or laptop on the floor about 2 m away, facing you or side-on.
- On a phone, use Share → **Add to Home Screen** to get it as an app.
- Your progress is saved in your browser.
- Pose tracking runs locally with MediaPipe. In training your video never leaves your device.

## Accounts & sync
Signing in is optional. The 👤 button in the header shows up once `CLOUD` in `index.html` has a Firebase `apiKey` and `projectId`.
- Email + password sign-in (Firebase Auth), with the progress stored as one document per user in Firestore (`users/{uid}`). It uses plain REST calls, with no SDK.
- Signing in **merges** this device's progress with the account's copy, so nothing gets lost: highest totals and best stars, fastest times, and every logged entry. Before merging, the device's copy is saved to `localStorage["pushupRanks.v1.preSync"]`.
- After that, changes upload a few seconds after they happen and download when the app opens. It never reloads mid-workout.
- Signing out keeps the progress on the device. "Delete my account" removes the cloud copy and the login. The device's progress stays.
- The security rules are in `firestore.rules`: each user can only read and write their own document.

## Return stats
Each install gets a random ID, with no name, email or device info. Once a day the app records an "opened" mark, and the first time you train that day a "worked out" mark, in `pings/{id}_{day}_{o|w}`. Anyone can add a well-formed mark. Nobody can read, change or delete one except the owner account. **https://factsweird201-coder.github.io/push-up-ranks/stats.html** shows installs, daily use, and how many people come back the next day, in their first week, after a week and after a month. When you're signed in as the owner, the account window links to it.

## Mac app
`mac/build.sh` builds a native Mac app wrapper (`mac/build/Push-Up Ranks.app` and a shareable zip).
The app isn't notarized, so the first time you open it, go to System Settings → Privacy & Security → Open Anyway.
