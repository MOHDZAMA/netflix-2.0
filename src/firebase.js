import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrEw5IqYUfa0TxDH4xs0unU6xN-KKMLbs",
  authDomain: "netflix-2-1.firebaseapp.com",
  projectId: "netflix-2-1",
  storageBucket: "netflix-2-1.appspot.com",
  messagingSenderId: "205756052808",
  appId: "1:205756052808:web:77bcbe2e0f486b1fb6ef7d",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
