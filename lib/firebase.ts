import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdYDH23InHQJ2iYWs4rxOFJqyx_Da1c0E",
  authDomain: "trading-academy-611f5.firebaseapp.com",
  projectId: "trading-academy-611f5",
  storageBucket: "trading-academy-611f5.firebasestorage.app",
  messagingSenderId: "124846961162",
  appId: "1:124846961162:web:6a8561c3872f057002e5f3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
