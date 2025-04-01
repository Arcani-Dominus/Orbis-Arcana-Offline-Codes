// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// ✅ Firebase configuration (Use your existing credentials)
const firebaseConfig = {
  apiKey: "AIzaSyC1T0aeLmHt3cEppYkSFJijsgAbKWdq3ks",
  authDomain: "orbis-arcana-offline.firebaseapp.com",
  projectId: "orbis-arcana-offline",
  storageBucket: "orbis-arcana-offline.firebasestorage.app",
  messagingSenderId: "125346575338",
  appId: "1:125346575338:web:b1b82b69e71f35b146b893"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ Initialize Firestore

// ✅ Export Firestore database
export { db };


