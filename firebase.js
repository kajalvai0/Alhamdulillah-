// আপনার Firebase প্রজেক্টের কনফিগারেশন এখানে যোগ করুন
// এই কনফিগারেশনটি আপনার Firebase Console থেকে পাবেন
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase শুরু করুন
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
