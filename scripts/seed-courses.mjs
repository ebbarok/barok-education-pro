/**
 * BAROK EDUCATION PRO — safe course catalogue seeder
 * Run from a trusted Cloud Shell session with Google Cloud credentials:
 *   npm install firebase-admin
 *   gcloud auth application-default login
 *   gcloud config set project barok-education-pro
 *   node scripts/seed-courses.mjs
 *
 * Uses Application Default Credentials. Never put service-account keys in this repo.
 * Creates/updates course catalogue documents only; it does not create lesson content.
 */
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: applicationDefault(),
  projectId: "barok-education-pro"
});
const db = getFirestore();

const subjects9and10 = [
  ["mathematics", "Mathematics"],
  ["physics", "Physics"],
  ["chemistry", "Chemistry"],
  ["biology", "Biology"],
  ["english", "English"],
  ["information_technology", "Information Technology"],
  ["geography", "Geography"],
  ["history", "History"],
  ["economics", "Economics"],
  ["citizenship_education", "Citizenship Education"],
  ["health_physical_education", "Health and Physical Education"]
];

const upperCommon = [
  ["english", "English"],
  ["mathematics", "Mathematics"],
  ["information_technology", "Information Technology"]
];
const natural = [
  ["physics", "Physics"],
  ["chemistry", "Chemistry"],
  ["biology", "Biology"],
  ["agriculture", "Agriculture"]
];
const social = [
  ["geography", "Geography"],
  ["history", "History"],
  ["economics", "Economics"]
];

const courses = [];
for (const grade of [9, 10]) {
  for (const [slug, title] of subjects9and10) {
    courses.push({
      id: `grade${grade}_${slug}`,
      title,
      grade,
      stream: "general",
      description: `Grade ${grade} ${title}`
    });
  }
}
for (const grade of [11, 12]) {
  for (const [slug, title] of upperCommon) {
    courses.push({
      id: `grade${grade}_${slug}`,
      title,
      grade,
      stream: "common",
      description: `Grade ${grade} ${title} — common subject`
    });
  }
  for (const [slug, title] of natural) {
    courses.push({
      id: `grade${grade}_natural_${slug}`,
      title,
      grade,
      stream: "natural_science",
      description: `Grade ${grade} ${title} — Natural Science`
    });
  }
  for (const [slug, title] of social) {
    courses.push({
      id: `grade${grade}_social_${slug}`,
      title,
      grade,
      stream: "social_science",
      description: `Grade ${grade} ${title} — Social Science`
    });
  }
}

async function main() {
  let batch = db.batch();
  let count = 0;
  let batchCount = 0;
  for (const course of courses) {
    const { id, ...data } = course;
    batch.set(db.collection("courses").doc(id), {
      ...data,
      published: true,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    count++;
    batchCount++;
    if (batchCount === 400) {
      await batch.commit();
      batch = db.batch();
      batchCount = 0;
    }
  }
  if (batchCount) await batch.commit();
  console.log(`Successfully created/updated ${count} course catalogue documents.`);
  console.log("Next: add verified unit/lesson notes before describing the site as fully populated.");
}
main().catch(error => {
  console.error("Course seeding failed:", error.message);
  process.exitCode = 1;
});
