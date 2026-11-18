# BAROK EDUCATION PRO

Learn Today, Lead Tomorrow — Quality Education for Grades 9–12.

## Current features
- Responsive home page
- Firebase Email/Password registration and login
- Student profile and dashboard
- Published courses, lessons, and exam listings
- Student-specific results display

## Firebase setup
1. Confirm the Firebase web app configuration in `index.html`.
2. Enable Email/Password in Firebase Authentication.
3. Create Cloud Firestore.
4. Review `firestore.rules` before publishing rules.
5. Add course/lesson/exam documents with `published: true` to make them visible.

## Deploy
Install Firebase CLI in a trusted development environment, sign in to the correct Firebase account, then run:
```sh
firebase deploy --only hosting
```

## Security notes
- Do not place Firebase Admin SDK credentials or service-account private keys in this repository or browser code.
- Admin access requires a trusted backend to assign the Firebase custom claim `admin: true`.
- The exam section currently lists published exams only; secure exam delivery and grading are not implemented yet.
