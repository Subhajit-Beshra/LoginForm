import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const btn = document.getElementById("Sbmt");

btn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in email and password.");
    return;
  }

  try {
    // Step 1 — Create a new account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Step 2 — Send verification email
    await sendEmailVerification(user);
    alert("Account created! A verification email has been sent to " + email + ". Please verify before logging in.");

  } catch (signupError) {

    // If account already exists, try logging in instead
    if (signupError.code === "auth/email-already-in-use") {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Step 3 — Check if email is verified
        if (!user.emailVerified) {
          alert("Email not verified yet! Check your inbox and click the link.");
          await sendEmailVerification(user); // resend just in case
          return;
        }

        // Step 4 — Fully logged in ✅
        alert("Welcome back! " + user.email);

      } catch (loginError) {
        alert("Login failed: " + loginError.message);
      }

    } else {
      alert("Error: " + signupError.message);
    }
  }
});