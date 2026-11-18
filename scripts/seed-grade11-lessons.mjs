/**
 * BAROK EDUCATION PRO — Grade 11 starter lessons
 *
 * Original introductory study notes for the listed Grade 11 common,
 * Natural Science, and Social Science subjects. These are not a substitute
 * for the current official syllabus or textbook; review before classroom use.
 *
 * Run only in a trusted environment with Firebase Admin ADC:
 *   npm install firebase-admin
 *   gcloud auth application-default login
 *   gcloud config set project barok-education-pro
 *   node scripts/seed-grade11-lessons.mjs
 *
 * Never put service-account keys or admin credentials in the website.
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
    id: "g11_english_communication",
    courseId: "grade11_english",
    subject: "English",
    title: "Effective Communication",
    unit: "Communication",
    description: "Explore the elements and purposes of effective communication.",
    content: "Communication is the process of sharing information, ideas, and feelings. Its basic elements include a sender, a message, a channel, a receiver, and feedback. Communication may be verbal, written, or non-verbal. Effective communication requires a clear message, appropriate language, active listening, and respect for the audience. Barriers such as noise, unclear wording, and assumptions can cause misunderstanding. To improve communication, organize ideas, listen carefully, ask for clarification, and give useful feedback."
  },
  {
    id: "g11_english_critical_reading",
    courseId: "grade11_english",
    subject: "English",
    title: "Critical Reading Skills",
    unit: "Reading",
    description: "Distinguish a writer's main idea, evidence, and point of view.",
    content: "Critical reading means examining a text thoughtfully rather than accepting every statement immediately. Identify the main idea and the supporting details. Separate facts, which can be checked, from opinions, which express a viewpoint. Consider the writer's purpose, intended audience, and possible bias. Ask whether the evidence is relevant and sufficient. Summarize the argument in your own words and compare it with reliable information."
  },
  {
    id: "g11_math_functions",
    courseId: "grade11_mathematics",
    subject: "Mathematics",
    title: "Introduction to Functions",
    unit: "Functions",
    description: "Understand functions, domain, range, and function notation.",
    content: "A function is a relation that assigns exactly one output to each input in its domain. We often write y = f(x), where x is the input and f(x) is the output. The domain is the set of allowed inputs, while the range is the set of outputs produced. For example, if f(x) = 2x + 3, then f(2) = 7. A relation is not a function if one input is assigned two different outputs. Tables, mappings, graphs, and formulas can all represent functions."
  },
  {
    id: "g11_math_quadratics",
    courseId: "grade11_mathematics",
    subject: "Mathematics",
    title: "Quadratic Expressions",
    unit: "Algebra",
    description: "Recognize quadratic expressions and their basic properties.",
    content: "A quadratic expression in one variable has the form ax² + bx + c, where a, b, and c are constants and a is not zero. Its graph, when represented by y = ax² + bx + c, is a parabola. If a is positive, the parabola opens upward; if a is negative, it opens downward. The solutions of ax² + bx + c = 0 are the roots or zeros of the quadratic. They can be investigated by factorization, completing the square, or the quadratic formula when appropriate."
  },
  {
    id: "g11_it_data_information",
    courseId: "grade11_information_technology",
    subject: "Information Technology",
    title: "Data and Information",
    unit: "Information Systems",
    description: "Explain the difference between data and meaningful information.",
    content: "Data are raw facts such as numbers, words, or measurements. Information is data that has been processed and organized so that it is meaningful to a user. A common information-processing cycle includes input, processing, output, and storage. For example, individual student marks are data; a clearly arranged class-results report is information. Good information should be accurate, relevant, timely, and understandable. Protect personal data and only access information you are authorized to use."
  },
  {
    id: "g11_physics_waves",
    courseId: "grade11_natural_physics",
    subject: "Physics",
    title: "Introduction to Waves",
    unit: "Waves",
    description: "Define wave motion and identify basic wave quantities.",
    content: "A wave is a disturbance that transfers energy from one place to another without an overall transfer of matter. Important quantities include amplitude, wavelength, frequency, and period. Wavelength is the distance between two successive points in phase. Frequency is the number of complete cycles per second and is measured in hertz (Hz). Period is the time for one cycle, so T = 1/f. For a wave travelling at speed v, the relationship is v = fλ."
  },
  {
    id: "g11_chemistry_moles",
    courseId: "grade11_natural_chemistry",
    subject: "Chemistry",
    title: "The Mole Concept",
    unit: "Chemical Quantities",
    description: "Connect amount of substance with particles and molar mass.",
    content: "The mole is the SI unit for amount of substance. One mole contains approximately 6.022 × 10²³ specified particles; this is the Avogadro constant. Molar mass is the mass of one mole of a substance, usually expressed in grams per mole (g/mol). The amount in moles can be calculated using n = m/M, where m is mass and M is molar mass. Always use consistent units and identify the substance before choosing its molar mass."
  },
  {
    id: "g11_biology_genetics",
    courseId: "grade11_natural_biology",
    subject: "Biology",
    title: "Introduction to Genetics",
    unit: "Heredity",
    description: "Introduce genes, chromosomes, alleles, and inheritance.",
    content: "Genetics is the study of heredity and variation. DNA carries hereditary information. A gene is a section of DNA associated with a functional product or trait. Genes are located on chromosomes. Different forms of the same gene are called alleles. An organism inherits genetic information from its parents. In simple Mendelian examples, dominant and recessive alleles can help explain patterns of inheritance, although many real traits are influenced by several genes and the environment."
  },
  {
    id: "g11_geography_population",
    courseId: "grade11_social_geography",
    subject: "Geography",
    title: "Population Distribution and Density",
    unit: "Population Geography",
    description: "Explain population distribution and calculate population density.",
    content: "Population distribution describes how people are spread across an area. Population density is the number of people per unit of area. It is commonly calculated as population density = total population ÷ land area. Physical factors such as climate, water, and relief can influence settlement, as can employment, transport, services, and history. A high average density does not mean that people are evenly distributed throughout a region. Maps and census data help geographers study these patterns."
  },
  {
    id: "g11_history_sources",
    courseId: "grade11_social_history",
    subject: "History",
    title: "Using Historical Sources",
    unit: "Historical Methods",
    description: "Understand primary and secondary sources and evaluate evidence.",
    content: "Historical sources provide evidence about the past. Primary sources were produced during the period being studied, such as letters, official records, photographs, or objects. Secondary sources are later interpretations, such as many textbooks and historical studies. Historians consider who created a source, when and why it was created, its intended audience, and what it can or cannot tell us. Comparing different sources helps identify agreement, disagreement, perspective, and gaps in the evidence."
  },
  {
    id: "g11_economics_scarcity",
    courseId: "grade11_social_economics",
    subject: "Economics",
    title: "Scarcity and Choice",
    unit: "Basic Economic Concepts",
    description: "Explain scarcity, choice, and opportunity cost.",
    content: "Scarcity exists because resources are limited while human wants are many. Since people cannot satisfy every want, they must make choices. Opportunity cost is the value of the next-best alternative given up when a choice is made. For example, using an afternoon to study may mean giving up the opportunity to do another activity during that time. Understanding opportunity cost helps individuals, businesses, and governments compare alternatives and use resources thoughtfully."
  },
  {
    id: "g11_agriculture_soil",
    courseId: "grade11_natural_agriculture",
    subject: "Agriculture",
    title: "Soil and Sustainable Land Use",
    unit: "Soil Resources",
    description: "Describe soil functions and basic soil-conservation principles.",
    content: "Soil supports plant growth, stores and filters water, and provides habitat for many organisms. It contains mineral particles, organic matter, water, air, and living organisms. Soil quality can be affected by erosion, loss of organic matter, and unsuitable land use. Conservation approaches include maintaining plant cover, contour farming on suitable slopes, mulching, and planting trees where appropriate. The best method depends on local soil, climate, slope, and farming conditions."
  }
];

async function main() {
  let count = 0;
  for (let i = 0; i < lessons.length; i += 400) {
    const batch = db.batch();
    for (const lesson of lessons.slice(i, i + 400)) {
      const { id, ...data } = lesson;
      batch.set(db.collection("lessons").doc(id), {
        ...data,
        grade: 11,
        published: true,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      count++;
    }
    await batch.commit();
  }
  console.log(`Created or updated ${count} Grade 11 starter lessons.`);
}
main().catch(error => {
  console.error("Grade 11 lesson seeding failed:", error.message);
  process.exitCode = 1;
});
