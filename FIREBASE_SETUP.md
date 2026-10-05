# 🔥 Firebase Setup Guide - Bangla Status & Quotes App (বাণী ও স্ট্যাটাস)

This guide walks you through setting up Firebase Authentication, Firestore Database, Firebase Storage, and Security Rules.

---

## 1. Create a Firebase Project
1. Open [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** (বা "প্রজেক্ট তৈরি করুন").
3. Name your project (e.g. `BanglaQuotes`).
4. Disable or enable Google Analytics (optional), then click **Create project**.
5. Once ready, click the **Web icon (`</>`)** to register a web app.
6. Give it an App nickname (e.g. `BanglaQuotesWeb`), click **Register app**.
7. You will see a `firebaseConfig` snippet. Copy the keys!

---

## 2. Paste Your Firebase Config
Open `app/src/main/assets/firebase-config.js` (and `web/firebase-config.js` if running in web browser).
Find the section clearly marked:

```javascript
// ==========================================
// PASTE YOUR FIREBASE CONFIG HERE
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "banglaquotes.firebaseapp.com",
  projectId: "banglaquotes",
  storageBucket: "banglaquotes.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef..."
};
```
*(Tip: You can also paste this JSON directly in the in-app **Admin Panel > ফায়ারবেস সেটআপ** tab without editing files!)*

---

## 3. Enable Authentication
1. In Firebase Console, go to **Build > Authentication** in the left menu.
2. Click **Get started**.
3. Under the **Sign-in method** tab:
   - **Anonymous**: Click and toggle **Enable**, then **Save**. (Allows regular users to read, like, and save posts without creating an account).
   - **Email/Password**: Click, toggle **Enable**, then **Save**. (Used for your Admin account).
4. Go to the **Users** tab:
   - Click **Add user**.
   - Enter your Admin email (e.g. `30atikul@gmail.com` or `admin@banglaquotes.com`) and a strong password.
   - Click **Add user**.
   - Copy the generated **User UID** for the next step!

---

## 4. Setup Firestore Database
1. Go to **Build > Firestore Database**.
2. Click **Create database**.
3. Choose your nearest location (e.g. `asia-south1` or default).
4. Select **Start in production mode** (or test mode), click **Enable**.

### Firestore Collections Structure:
- `posts`:
  ```json
  {
    "title": "স্মৃতির মানুষ",
    "content": "কিছু মানুষ জীবনে আসে,\nথাকার জন্য নয়,\nস্মৃতি হয়ে থাকার জন্য।",
    "categoryId": "sad",
    "categoryName": "কষ্ট",
    "imageUrl": "https://...",
    "status": "published",
    "createdAt": timestamp,
    "updatedAt": timestamp,
    "likesCount": 142
  }
  ```
- `categories`:
  ```json
  {
    "id": "love",
    "name": "ভালোবাসা",
    "icon": "❤️",
    "color": "#F43F5E",
    "bg": "#FFE4E6"
  }
  ```
- `userLikes`:
  ```json
  {
    "userId": "anon_uid_123",
    "postId": "post_1",
    "createdAt": timestamp
  }
  ```
- `userSavedPosts`:
  ```json
  {
    "userId": "anon_uid_123",
    "postId": "post_1",
    "savedAt": timestamp
  }
  ```

---

## 5. Add Firestore Security Rules
Go to **Firestore Database > Rules** tab. Paste the contents of `firestore.rules`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Check if user is the authorized Admin:
    // Replace "YOUR_ADMIN_UID" with your copied Admin UID from Step 3:
    function isAdmin() {
      return request.auth != null && (
        request.auth.uid == "YOUR_ADMIN_UID" ||
        request.auth.token.email == "30atikul@gmail.com"
      );
    }

    match /posts/{postId} {
      allow read: if resource.data.status == 'published' || isAdmin();
      allow create, update, delete: if isAdmin();
    }

    match /categories/{catId} {
      allow read: true;
      allow write: if isAdmin();
    }

    match /userLikes/{likeId} {
      allow read, delete: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }

    match /userSavedPosts/{saveId} {
      allow read, delete: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }

    match /settings/{settingId} {
      allow read, write: if isAdmin();
    }
  }
}
```
Click **Publish**.

---

## 6. Enable Firebase Storage (for Post Images)
1. Go to **Build > Storage**.
2. Click **Get started**, choose your storage bucket location.
3. In the **Rules** tab, set:
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /post_images/{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```
4. Click **Publish**.

---

## 7. How to Run the Application
1. **On Android**: Run in Android Studio or view in the streaming emulator! The app builds automatically into an APK.
2. **On Desktop Browser**: Open `web/index.html` or `app/src/main/assets/index.html` directly in Google Chrome, Edge, Safari, or Firefox, or run `npx serve web` / `python3 -m http.server 8080`.
3. **Admin Access**: Tap the ⚙️ icon in the top header or bottom navigation bar, log in with your Admin credentials, and create beautiful quotes!
