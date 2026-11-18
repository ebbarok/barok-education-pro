# BAROK EDUCATION PRO — Public Launch Checklist

The website foundation is in the repository, but a successful Hosting deployment alone does **not** mean every feature is production-ready.

## Already present in the repository
- Responsive Grade 9–12 website
- Firebase email/password registration and login
- Student profile and dashboard
- Published course, lesson, and exam listings
- Student-specific results display
- Firestore rules that restrict student records and administrator writes
- Trusted-environment admin-claim script
- Password reset flow
- Privacy and terms information pages

## Required before public launch
- [ ] Confirm the project owner/operator name and a working support/privacy contact channel.
- [ ] Review the Privacy Policy and Terms of Use with the responsible school/operator.
- [ ] Confirm parent/guardian and school consent requirements for students under 18.
- [ ] Test registration, login, password reset, logout and account recovery.
- [ ] Test every page on Android, iOS and desktop.
- [ ] Review Firestore Security Rules in the Firebase Emulator or a test project.
- [ ] Confirm only a trusted administrator can create or change courses, lessons, exams and results.
- [ ] Grant the admin custom claim only from a trusted, authorized environment. Never put service-account keys in browser code or GitHub.
- [ ] Populate Firestore using the trusted seed scripts and review every lesson against the current official curriculum before publishing it.
- [ ] Back up Firestore and establish a data-retention/deletion process.
- [ ] Decide whether Google sign-in is offered; if so, test its consent screen and authorized domains.
- [ ] Configure budget alerts and monitor Firebase/Google Cloud usage.
- [ ] Deploy Hosting and Firestore rules, then verify the live site.

## Features not yet production-complete
- The exam page currently lists published exams; it does not yet deliver secure timed exams, server-side grading or submission protection.
- The admin page currently shows a read-only overview; full content management needs a trusted backend and verified administrator access.
- The lesson seed files contain starter notes. They are not certified replacements for official textbooks or curriculum materials.

## Trusted setup
Install dependencies with `npm install`. Authenticate with Google Cloud Application Default Credentials as an authorized project owner before running any seed or admin script. Review each script before execution.

## Deployment
Run `npm run deploy` from the project directory after verifying the Firebase project selection and reviewing the rules. Do not deploy from an account that is not authorized to administer the project.
