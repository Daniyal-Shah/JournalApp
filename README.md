## JournalApp – Mental Health Journaling (Front-end)

This project is a simple **React Native** mobile app for mental health journaling.  
Users can:

- **Submit text journal entries**
- **View previous entries on a dashboard** with date and time
- **See a list of non-interactive self‑care tasks** below their journals

All data is stored **in memory only** and is cleared when the app is closed or reloaded.

---

## 1. Project Structure (screens)

- **`HomeScreen`**: Welcome view with static practice cards and a **Reflect** button to open the journal submission screen, plus a shortcut to the dashboard and an entries count.
- **`JournalScreen`**: Multi-line text input with:
  - Character limit of **600 characters** (the counter shows characters remaining)
  - **Submit** button that saves the entry in memory and navigates to the dashboard
- **`DashboardScreen`**:
  - Lists all journal entries with **submission date and time**
  - Shows the **latest entry** in the top “What’s on your mind?” card
  - Displays a static list of gentle self-care tasks under the entries

Navigation between these screens is handled in-memory in `App.tsx` using simple React state.

---

## 2. Installation & Running Locally

### 2.1 Prerequisites

- Node.js `>= 20`
- Android Studio / Xcode set up for React Native (see the official [environment setup guide](https://reactnative.dev/docs/environment-setup))

### 2.2 Install JavaScript dependencies

From the project root:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

This will install all JavaScript dependencies needed for the app.

### 2.3 iOS – install CocoaPods (macOS only)

From the `ios` directory:

```sh
cd ios
bundle install      # first time only, installs CocoaPods via Bundler
bundle exec pod install
cd ..
```

### 2.4 Start Metro

In one terminal window:

```sh
npm start
# or
yarn start
```

### 2.5 Run the app on a device / simulator

In another terminal, from the project root:

```sh
# Android
npm run android
# or
yarn android

# iOS (macOS only)
npm run ios
# or
yarn ios
```

---

## 3. Building an APK (Android)

To produce an APK you can share for evaluation:

```sh
cd android
./gradlew assembleDebug
```

After the build completes, the debug APK will be located at:

- `android/app/build/outputs/apk/debug/app-debug.apk`

You can include this file along with the project source when zipping for submission.

For a signed release APK, configure signing in `android/app/build.gradle` and run:

```sh
./gradlew assembleRelease
```

---

## 4. Key Implementation Details

- **State storage**:
  - `App.tsx` keeps an in-memory array of `JournalEntry` objects.
  - Each entry includes an `id`, the `content`, and an ISO `createdAt` timestamp.
- **Character limit**:
  - The journal text is limited to **600 characters**.
  - The remaining characters are shown in the footer of `JournalScreen`.
- **Static tasks**:
  - A small list of self‑care tasks is shown below the journal entries on the dashboard.
  - These tasks are **display-only** and have no interactive functionality.

---

## 5. Notes for Reviewers

- There is **no backend or persistent storage**; refreshing or reinstalling clears all data.
- The UI is intentionally minimal but styled to resemble a calm, morning dashboard inspired by the provided mockups.
- If you encounter native build errors, ensure:
  - Android SDK / Xcode command line tools are installed and up to date.
  - CocoaPods have been installed and `pod install` has been run in the `ios` directory (for iOS builds).
