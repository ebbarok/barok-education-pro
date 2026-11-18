/**
 * BAROK EDUCATION PRO — starter Grade 9 Mathematics lessons
 * Run only from a trusted environment after setting up Firebase Admin ADC.
 * These are original starter notes, not a claim of exact alignment to the
 * latest national textbook. Review against the school's current syllabus.
 */
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: applicationDefault(),
  projectId: "barok-education-pro"
});
const db = getFirestore();

const lessons = [
  {
    id: "g9_math_numbers_intro",
    title: "Introduction to Number Systems",
    grade: 9,
    courseId: "grade9_math",
    unit: "Number Systems",
    description: "Natural, whole, integer, rational and irrational numbers.",
    content: "A number system groups numbers according to their properties. Natural numbers are 1, 2, 3, ... . Whole numbers include 0. Integers include negative whole numbers, zero and positive whole numbers. Rational numbers can be written as a/b where a and b are integers and b is not zero. Irrational numbers cannot be written as a ratio of two integers; examples include √2 and π. The real numbers consist of rational and irrational numbers.",
    published: true
  },
  {
    id: "g9_math_number_line",
    title: "The Real Number Line",
    grade: 9,
    courseId: "grade9_math",
    unit: "Number Systems",
    description: "Ordering and locating real numbers on a number line.",
    content: "A number line represents real numbers in order. Numbers increase as we move to the right and decrease as we move to the left. For any two real numbers a and b, if a is to the left of b, then a < b. The distance between a and b is |a − b|. Example: the distance between −3 and 2 is |−3 − 2| = 5.",
    published: true
  },
  {
    id: "g9_math_absolute_value",
    title: "Absolute Value",
    grade: 9,
    courseId: "grade9_math",
    unit: "Number Systems",
    description: "Understanding absolute value as distance from zero.",
    content: "The absolute value of a real number is its distance from zero on the number line, so it is never negative. Examples: |5| = 5, |−5| = 5 and |0| = 0. Remember that |a| = a when a ≥ 0, and |a| = −a when a < 0.",
    published: true
  },
  {
    id: "g9_math_fractions_decimals",
    title: "Fractions and Decimal Forms",
    grade: 9,
    courseId: "grade9_math",
    unit: "Number Systems",
    description: "Converting between fractions, terminating decimals and recurring decimals.",
    content: "A fraction represents a quotient of two integers with a non-zero denominator. To convert a fraction to a decimal, divide the numerator by the denominator. For example, 3/4 = 0.75. A terminating decimal ends, while a recurring decimal has a repeating digit or block, such as 1/3 = 0.333... . A rational number has a decimal expansion that terminates or eventually repeats.",
    published: true
  },
  {
    id: "g9_math_exponents_roots",
    title: "Exponents and Square Roots",
    grade: 9,
    courseId: "grade9_math",
    unit: "Number Systems",
    description: "Basic exponent laws and principal square roots.",
    content: "For a non-zero number a and positive integers m and n, a^m × a^n = a^(m+n), and a^m ÷ a^n = a^(m−n) when m ≥ n. Also, (a^m)^n = a^(mn). The principal square root √a is the non-negative number whose square is a, for a ≥ 0. For example, √49 = 7 because 7² = 49.",
    published: true
  }
];

async function main() {
  const batch = db.batch();
  for (const lesson of lessons) {
    const { id, ...data } = lesson;
    batch.set(db.collection("lessons").doc(id), {
      ...data,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  }
  await batch.commit();
  console.log(`Successfully created/updated ${lessons.length} starter lessons.`);
}
main().catch(error => {
  console.error("Lesson seeding failed:", error.message);
  process.exitCode = 1;
});
