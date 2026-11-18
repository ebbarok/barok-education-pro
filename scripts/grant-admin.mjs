import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// Run only from a trusted environment signed in as the Firebase project owner.
// Usage: node scripts/grant-admin.mjs FIREBASE_AUTH_UID
const uid = process.argv[2];

if (!uid || uid.length < 10) {
  console.error("Usage: node scripts/grant-admin.mjs FIREBASE_AUTH_UID");
  process.exit(1);
}

initializeApp({
  credential: applicationDefault(),
  projectId: "barok-education-pro"
});

const auth = getAuth();
const user = await auth.getUser(uid);
const existingClaims = user.customClaims || {};

await auth.setCustomUserClaims(uid, {
  ...existingClaims,
  admin: true
});

console.log(`Admin access granted to UID: ${uid}`);
console.log("The user must sign out and sign in again (or refresh their ID token) before the Admin menu appears.");
