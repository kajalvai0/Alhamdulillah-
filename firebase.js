// আপনার Firebase প্রজেক্টের কনফিগারেশন এখানে যোগ করুন
// এই কনফিগারেশনটি আপনার Firebase Console থেকে পাবেন
const firebaseConfig = {
  apiKey: "AIzaSyAnbWSHykpCs9dus5iRsR1dLpbnlkrGQUs",
  authDomain: "alhamdulillah-f3edb.firebaseapp.com",
  projectId: "alhamdulillah-f3edb",
  storageBucket: "alhamdulillah-f3edb.firebasestorage.app",
  messagingSenderId: "547175363683",
  appId: "1:547175363683:web:35e8f7de519d28635b3456"
};

// Firebase শুরু করুন
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();