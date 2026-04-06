  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCjvbZ3ltO0vRWt4dpUYCcPCNfqyrl8DeA",
    authDomain: "auth-project-f9ed7.firebaseapp.com",
    projectId: "auth-project-f9ed7",
    storageBucket: "auth-project-f9ed7.firebasestorage.app",
    messagingSenderId: "159121069654",
    appId: "1:159121069654:web:9c4cf9517b0e123ff20df7"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);