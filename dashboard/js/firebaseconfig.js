// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore ,collection, addDoc, getDocs ,Timestamp ,updateDoc, deleteDoc,getDoc ,doc  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getAuth ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

  const firebaseConfig = {
      apiKey: "AIzaSyDXYuGsHV-u8HzDbBCrLDJAhTAYdSDjI8Q",
      authDomain: "attendence-bc81d.firebaseapp.com",
      projectId: "attendence-bc81d",
      storageBucket: "attendence-bc81d.firebasestorage.app",
      messagingSenderId: "804910602579",
      appId: "1:804910602579:web:eb61bbb3a2c6b1ef1229a6",
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services you need
 const db = getFirestore(app);
 const auth = getAuth(app);
export{ signInWithEmailAndPassword , db , auth,collection, addDoc, getDocs ,Timestamp ,updateDoc, deleteDoc,getDoc,doc}
