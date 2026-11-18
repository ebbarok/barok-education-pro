/**
 * BAROK EDUCATION PRO — Grade 12 starter lessons
 *
 * Original introductory study notes. They are not a substitute for the
 * current official Ethiopian syllabus/textbooks; review and expand them
 * against the school's approved materials before classroom use.
 *
 * Run only in a trusted environment with Firebase Admin ADC:
 *   npm install firebase-admin
 *   gcloud auth application-default login
 *   gcloud config set project barok-education-pro
 *   node scripts/seed-grade12-lessons.mjs
 *
 * Never put service-account keys or admin credentials in this repository.
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
    id: "g12_english_academic_writing",
    courseId: "grade12_english",
    subject: "English",
    title: "Academic Writing and Essay Structure",
    unit: "Writing",
    description: "Plan a focused essay with a clear argument and supporting evidence.",
    content: "Academic writing communicates ideas clearly and logically. A typical essay has an introduction, body paragraphs, and a conclusion. The introduction presents the topic and central claim. Each body paragraph develops one main point using explanation and relevant evidence. Linking expressions help readers follow the argument. The conclusion brings the main points together without simply repeating every sentence. Use reliable sources, acknowledge ideas that are not your own, and revise for clarity, grammar, and organization."
  },
  {
    id: "g12_english_argument",
    courseId: "grade12_english",
    subject: "English",
    title: "Building and Evaluating Arguments",
    unit: "Reading and Critical Thinking",
    description: "Identify claims, reasons, evidence, and counterarguments.",
    content: "An argument is a set of reasons offered to support a claim. A strong argument uses relevant evidence and explains how that evidence supports the claim. A counterargument presents a different view; responding to it fairly can make an argument more convincing. Check whether sources are trustworthy, whether examples are representative, and whether conclusions follow from the evidence. Avoid personal attacks and unsupported generalizations."
  },
  {
    id: "g12_math_calculus_intro",
    courseId: "grade12_mathematics",
    subject: "Mathematics",
    title: "Introduction to Limits",
    unit: "Calculus",
    description: "Understand the idea of a function approaching a value.",
    content: "A limit describes the value that a function approaches as its input approaches a particular number. We write lim(x→a) f(x) = L to mean that f(x) approaches L as x approaches a. The function does not necessarily need to be defined at x = a for the limit to exist. For simple polynomial functions, direct substitution often gives the limit. Limits provide the foundation for defining derivatives and integrals."
  },
  {
    id: "g12_math_derivatives",
    courseId: "grade12_mathematics",
    subject: "Mathematics",
    title: "Introduction to Derivatives",
    unit: "Calculus",
    description: "Interpret a derivative as an instantaneous rate of change.",
    content: "The derivative measures the instantaneous rate at which a function changes with respect to its input. Geometrically, it is the gradient of the tangent to the curve at a point. The derivative is defined using a limit of average rates of change. For a power function f(x) = x^n, the power rule gives f'(x) = n x^(n−1). For example, if f(x) = x³, then f'(x) = 3x². Derivatives are used in studying motion, growth, and optimization."
  },
  {
    id: "g12_it_databases",
    courseId: "grade12_information_technology",
    subject: "Information Technology",
    title: "Database Concepts",
    unit: "Data Management",
    description: "Explain tables, records, fields, and keys in a relational database.",
    content: "A database is an organized collection of data. In a relational database, data is commonly stored in tables. A field is a column describing an attribute, and a record is a row describing one entry. A primary key uniquely identifies each record in a table. A foreign key creates a relationship by referring to a key in another table. Good database design reduces unnecessary duplication and helps maintain accurate, consistent information. Access should be limited to authorized users."
  },
  {
    id: "g12_physics_electricity",
    courseId: "grade12_natural_physics",
    subject: "Physics",
    title: "Electric Circuits and Ohm's Law",
    unit: "Electricity",
    description: "Relate voltage, current, and resistance in a simple circuit.",
    content: "Electric current is the rate of flow of electric charge and is measured in amperes (A). Potential difference, or voltage, is measured in volts (V), and resistance is measured in ohms (Ω). For an ohmic conductor under constant physical conditions, Ohm's law is V = IR, where V is voltage, I is current, and R is resistance. A circuit must form a complete path for a steady current to flow. Practical electrical work should be performed only under qualified supervision and with appropriate safety procedures."
  },
  {
    id: "g12_chemistry_equilibrium",
    courseId: "grade12_natural_chemistry",
    subject: "Chemistry",
    title: "Chemical Equilibrium",
    unit: "Chemical Reactions",
    description: "Describe dynamic equilibrium in a reversible reaction.",
    content: "A reversible reaction can proceed in both forward and reverse directions. In a closed system at dynamic equilibrium, the forward and reverse reaction rates are equal. The concentrations of reactants and products remain constant over time, although the reactions continue. Changing conditions such as concentration, pressure for gaseous systems, or temperature can shift the equilibrium position. A catalyst changes how quickly equilibrium is reached but does not change the equilibrium position."
  },
  {
    id: "g12_biology_ecology",
    courseId: "grade12_natural_biology",
    subject: "Biology",
    title: "Ecosystems and Energy Flow",
    unit: "Ecology",
    description: "Explain producers, consumers, decomposers, and food chains.",
    content: "An ecosystem includes living organisms and the non-living environment with which they interact. Producers, such as green plants, convert light energy into chemical energy. Consumers obtain energy by feeding on other organisms. Decomposers break down dead organic material and return nutrients to the environment. A food chain shows one pathway of energy transfer, while a food web shows connected feeding relationships. Energy becomes less available at higher trophic levels because organisms use much of it for life processes."
  },
  {
    id: "g12_geography_climate",
    courseId: "grade12_social_geography",
    subject: "Geography",
    title: "Climate Change and Its Impacts",
    unit: "Environment",
    description: "Distinguish weather and climate and outline climate-change impacts.",
    content: "Weather describes short-term atmospheric conditions, while climate describes long-term patterns, usually assessed over many decades. Recent climate change is driven mainly by increased greenhouse gases from human activities, including burning fossil fuels and changes in land use. Impacts can include rising average temperatures, changing rainfall patterns, more frequent or intense heat extremes, and risks to ecosystems, water, agriculture, and communities. Adaptation reduces harm from impacts, while mitigation reduces the causes of climate change."
  },
  {
    id: "g12_history_historical_interpretation",
    courseId: "grade12_social_history",
    subject: "History",
    title: "Historical Interpretation and Evidence",
    unit: "Historical Analysis",
    description: "Compare interpretations and build evidence-based historical explanations.",
    content: "Historical interpretation explains the meaning and significance of past events. Historians may reach different conclusions because they ask different questions, use different evidence, or emphasize different perspectives. A careful historical explanation places events in context, distinguishes evidence from opinion, and considers the reliability and limitations of sources. Comparing primary and secondary sources helps develop a balanced account. Conclusions should be supported by evidence rather than assumptions."
  },
  {
    id: "g12_economics_macroeconomics",
    courseId: "grade12_social_economics",
    subject: "Economics",
    title: "Introduction to Macroeconomic Indicators",
    unit: "Macroeconomics",
    description: "Introduce GDP, inflation, and unemployment as economic indicators.",
    content: "Macroeconomics studies the economy as a whole. Gross domestic product (GDP) measures the value of final goods and services produced within a country over a period. Inflation is a sustained increase in the general price level, which reduces the purchasing power of money. The unemployment rate measures the share of the labour force that is unemployed and seeking work. Each indicator describes a different part of economic performance, so economists consider several indicators together."
  },
  {
    id: "g12_agriculture_crop_management",
    courseId: "grade12_natural_agriculture",
    subject: "Agriculture",
    title: "Sustainable Crop Production",
    unit: "Crop Production",
    description: "Review soil care, crop rotation, water management, and integrated pest management.",
    content: "Sustainable crop production aims to maintain productivity while conserving soil, water, and biodiversity. Practices may include crop rotation, adding suitable organic matter, protecting soil cover, and using water efficiently. Integrated pest management combines monitoring, prevention, biological approaches, and carefully selected controls when needed. The best approach depends on the crop, local climate, soil, pests, and available resources. Farmers should follow local agricultural guidance and product safety instructions."
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
        grade: 12,
        published: true,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      count++;
    }
    await batch.commit();
  }
  console.log(`Created or updated ${count} Grade 12 starter lessons.`);
}
main().catch(error => {
  console.error("Grade 12 lesson seeding failed:", error.message);
  process.exitCode = 1;
});
