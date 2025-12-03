import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { app } from "../firebase";

const auth = getAuth(app);
const db = getFirestore(app)

// signing a new user to studysphere
export async function register(email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user =  userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      username,
      email,
      profileImage: "",
      createdAt: serverTimestamp()
    })
    return user
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
}

// Sign in user
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Auth: login error", error);
    throw error;
  }
}
