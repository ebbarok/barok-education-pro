# Secure administrator setup

The Admin Dashboard checks the Firebase Authentication custom claim `admin: true`. Do not create an admin flag in a public student profile document and do not put service-account keys or Admin SDK credentials in browser code.

## One-time trusted setup

1. Confirm the intended administrator has already registered and can sign in.
2. In Firebase Authentication, open that user's account and copy the **User UID**. Do not share passwords, verification codes, API secrets, or service-account files.
3. Run the following only in a trusted terminal authenticated as a project owner or another authorized service identity:

```bash
npm install firebase-admin
gcloud auth application-default login
gcloud config set project barok-education-pro
node scripts/grant-admin.mjs THE_USERS_FIREBASE_UID
```

Replace `THE_USERS_FIREBASE_UID` with the UID copied from Firebase Authentication. Do not use an email address in place of the UID.

The script preserves existing custom claims and adds `admin: true`. It does not expose credentials to the website. After success, the administrator should sign out and sign in again to refresh the ID token.

## Important security notes

- Never commit service-account JSON files, private keys, passwords, or access tokens.
- Keep Firestore Security Rules enabled. Admin writes are allowed only when the verified token contains `admin: true`.
- Only grant this claim to a trusted project administrator.
- If the wrong account receives access, remove the `admin` custom claim using a trusted Admin SDK environment. Do not edit the student's public profile to manage privileges.
- The current Admin Dashboard is read-only. Content creation/editing and secure exam workflows are separate tasks and should be implemented with server-side authorization.
