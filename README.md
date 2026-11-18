# BAROK EDUCATION PRO

**Learn Today, Lead Tomorrow — Quality Education for Grades 9–12.**

## Website
https://barok-education-pro.web.app

## Features in the current website
- Responsive home page and navigation
- Firebase Email/Password registration, login and password reset
- Student profile and dashboard
- Published courses, lessons and exam listings
- Student-specific results display
- Privacy Policy and Terms of Use pages

## Project setup
Requirements: Node.js 20 or newer, Git, Firebase CLI, and authorized access to the Firebase project.

```sh
npm install
```

## Firebase setup
1. Confirm the Firebase web app configuration in `index.html`.
2. Enable Email/Password in Firebase Authentication.
3. Create Cloud Firestore.
4. Review `firestore.rules` before publishing rules.
5. Add course, lesson and exam documents with `published: true` to make them visible.
6. Keep all Firebase Admin SDK credentials and service-account keys out of this repository and browser code.

## Trusted content seeding
The scripts in `scripts/` use the Firebase Admin SDK and must run only in a trusted environment authenticated as an authorized project administrator.

```sh
npm run seed:courses
npm run seed:grade9
npm run seed:grade10
npm run seed:grade11
npm run seed:grade12
```

Review and verify all starter lesson content against the current official curriculum before publishing it.

## Admin access
Admin access requires a trusted backend or authorized owner environment to assign the Firebase custom claim `admin: true`. Follow [ADMIN_SETUP.md](ADMIN_SETUP.md). Never share passwords, OTPs or private keys.

## Deploy
Select the correct Firebase project and review Firestore rules, then run:

```sh
npm run deploy
```

## Public launch
Read [PUBLIC_LAUNCH_CHECKLIST.md](PUBLIC_LAUNCH_CHECKLIST.md) before inviting students. The exam page currently lists published exams only; secure timed exam delivery and grading are not implemented. The admin page currently provides a read-only overview; full content management requires a trusted backend.
