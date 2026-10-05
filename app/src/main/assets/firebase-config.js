/**
 * ==============================================================================
 * FIREBASE CONFIGURATION & INITIALIZATION
 * ==============================================================================
 * 
 * Instructions:
 * 1. Go to Firebase Console (https://console.firebase.google.com/)
 * 2. Create or open your project
 * 3. Add a Web App ("</>" icon)
 * 4. Copy the firebaseConfig object and paste it below.
 */

// ==========================================
// PASTE YOUR FIREBASE CONFIG HERE
// ==========================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// ==========================================

// Check if user has saved custom config in localStorage (configured via Admin Settings)
const savedConfigStr = localStorage.getItem("custom_firebase_config");
let activeConfig = firebaseConfig;

if (savedConfigStr) {
  try {
    const parsed = JSON.parse(savedConfigStr);
    if (parsed && parsed.apiKey && parsed.apiKey !== "YOUR_API_KEY_HERE") {
      activeConfig = parsed;
    }
  } catch (e) {
    console.warn("Failed to parse saved Firebase config:", e);
  }
}

// Helper to determine if real Firebase credentials are provided
function isFirebaseConfigured() {
  return activeConfig && 
         activeConfig.apiKey && 
         activeConfig.apiKey !== "YOUR_API_KEY_HERE" && 
         !activeConfig.apiKey.includes("YOUR_");
}

let fbApp = null;
let fbAuth = null;
let fbDb = null;
let fbStorage = null;

if (isFirebaseConfigured() && typeof firebase !== "undefined") {
  try {
    fbApp = firebase.initializeApp(activeConfig);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
    fbStorage = firebase.storage();
    console.log("✅ Firebase initialized successfully with project:", activeConfig.projectId);
  } catch (error) {
    console.error("❌ Firebase initialization error:", error);
  }
} else {
  console.log("ℹ️ Running in Local / Demo Mode with pre-seeded Bangla Status & Quotes. Real Firebase will activate when credentials are provided in firebase-config.js or Admin Settings.");
}

window.appFirebase = {
  config: activeConfig,
  isConfigured: isFirebaseConfigured,
  getApp: () => fbApp,
  getAuth: () => fbAuth,
  getDb: () => fbDb,
  getStorage: () => fbStorage,
  saveCustomConfig: (newConfig) => {
    localStorage.setItem("custom_firebase_config", JSON.stringify(newConfig));
    location.reload();
  },
  resetConfig: () => {
    localStorage.removeItem("custom_firebase_config");
    location.reload();
  }
};
