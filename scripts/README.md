# BAROK EDUCATION PRO — Firebase content setup

These scripts prepare starter course and lesson documents for the project `barok-education-pro`.

## Important

- The scripts are stored in GitHub; saving them does **not** run them or upload content to Firestore.
- Run them only in a trusted Google Cloud Shell session authenticated as an authorized project maintainer.
- Never upload service-account JSON files, private keys, passwords, or admin tokens to GitHub or the website.
- The lesson notes are original introductory material. Check them against the current approved syllabus and textbooks before classroom use.

## Run from the repository root

```bash
npm init -y
npm install firebase-admin
gcloud auth application-default login
gcloud config set project barok-education-pro
node scripts/seed-courses.mjs
node scripts/seed-starter-lessons.mjs
node scripts/seed-grade9-subject-lessons.mjs
node scripts/seed-grade10-lessons.mjs
node scripts/seed-grade11-lessons.mjs
node scripts/seed-grade12-lessons.mjs
```

Each command should finish successfully before running the next. The scripts use Application Default Credentials and write only to the `courses` and `lessons` collections. They do not create an admin user or change Firestore Security Rules.

## Verify in Firebase Console

1. Open the `barok-education-pro` project.
2. Open Firestore Database → Data.
3. Check the `courses` and `lessons` collections.
4. Confirm that the documents have `published: true`.
5. Open the website and visit Courses and Lessons & Notes.

If a command reports `PERMISSION_DENIED`, stop and ask the project owner to review the IAM permissions. Do not make Firestore public to bypass the error.
