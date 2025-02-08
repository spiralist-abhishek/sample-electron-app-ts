import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import {
	collection,
	doc,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY ?? "",
	authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? "",
	projectId: process.env.FIREBASE_PROJECT_ID ?? "",
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? "",
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? "",
	appId: process.env.FIREBASE_APP_ID ?? "",
	measurementId: process.env.FIREBASE_MEASUREMENT_ID ?? "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);


const appDocRef = doc(db, "app", "chatNotesApp");
export const notesDocRef = (uid: string) =>
	query(collection(appDocRef, "notes"), where("owner", "==", uid));
export const itemsDocRef = (uid: string) =>
	query(collection(appDocRef, "items"), where("owner", "==", uid));
