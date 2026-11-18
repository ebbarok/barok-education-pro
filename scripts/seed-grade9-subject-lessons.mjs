/**
 * BAROK EDUCATION PRO — Grade 9 starter lessons for English, Physics,
 * Chemistry, Biology and ICT.
 *
 * Run only in a trusted environment with Firebase Admin ADC configured.
 * These are original introductory notes, not verified textbook reproductions.
 * Check unit order and terminology against the current school syllabus.
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
    id: "g9_english_communication",
    title: "Communication and Its Elements",
    grade: 9,
    courseId: "grade9_english",
    unit: "Communication",
    description: "The process, purpose and basic elements of communication.",
    content: "Communication is the process of sharing information, ideas or feelings. Its main elements are the sender, message, channel, receiver and feedback. The sender forms an idea and sends a message through a channel such as speech, writing or a digital platform. The receiver interprets the message and may give feedback. Clear language, careful listening and an appropriate channel help communication succeed."
  },
  {
    id: "g9_english_parts_of_speech",
    title: "Parts of Speech",
    grade: 9,
    courseId: "grade9_english",
    unit: "Grammar",
    description: "Recognizing nouns, pronouns, verbs, adjectives and adverbs.",
    content: "Parts of speech describe the jobs words do in sentences. A noun names a person, place, thing or idea: student, Hawassa, book, honesty. A pronoun replaces a noun: he, she, they. A verb expresses an action or state: read, write, is. An adjective describes a noun: useful book. An adverb can describe a verb, adjective or another adverb: She reads carefully. Identify each word by how it is used in its sentence."
  },
  {
    id: "g9_physics_measurement",
    title: "Physical Quantities and Measurement",
    grade: 9,
    courseId: "grade9_physics",
    unit: "Introduction to Physics",
    description: "Physical quantities, SI units and measuring instruments.",
    content: "A physical quantity is a property that can be measured and expressed using a number and a unit. Examples include length, mass, time and temperature. Common SI units are metre (m), kilogram (kg), second (s) and kelvin (K). A ruler measures length, a balance measures mass, and a stopwatch measures time. Record measurements with the correct unit and use an instrument suitable for the quantity."
  },
  {
    id: "g9_physics_motion",
    title: "Distance, Displacement, Speed and Velocity",
    grade: 9,
    courseId: "grade9_physics",
    unit: "Motion",
    description: "Comparing distance and displacement and calculating average speed.",
    content: "Distance is the total length of the path travelled and is a scalar quantity. Displacement is the change in position in a specified direction and is a vector quantity. Average speed = total distance ÷ total time. Average velocity = displacement ÷ time taken. For example, travelling 100 metres in 20 seconds gives an average speed of 5 m/s. Always include units in calculations."
  },
  {
    id: "g9_chemistry_matter",
    title: "Matter and Its States",
    grade: 9,
    courseId: "grade9_chemistry",
    unit: "Matter",
    description: "The particle model and the common states of matter.",
    content: "Matter is anything that has mass and occupies space. In the particle model, matter is made of tiny particles. In a solid, particles are close together and mainly vibrate in fixed positions. In a liquid, particles remain close but can move past one another. In a gas, particles are far apart and move freely. Heating or cooling can cause changes of state such as melting, freezing, evaporation and condensation."
  },
  {
    id: "g9_chemistry_elements_compounds",
    title: "Elements, Compounds and Mixtures",
    grade: 9,
    courseId: "grade9_chemistry",
    unit: "Classification of Matter",
    description: "How elements, compounds and mixtures differ.",
    content: "An element is a pure substance made of one type of atom, such as iron or oxygen. A compound contains two or more elements chemically combined in a fixed proportion, such as water (H2O). A mixture contains substances physically combined in variable proportions. Mixtures can often be separated by physical methods such as filtration, evaporation or distillation. The substances in a mixture retain their own properties."
  },
  {
    id: "g9_biology_life",
    title: "Characteristics of Living Things",
    grade: 9,
    courseId: "grade9_biology",
    unit: "Introduction to Biology",
    description: "Common characteristics used to identify living organisms.",
    content: "Living organisms show several characteristics. They obtain and use energy (nutrition and respiration), respond to their surroundings, grow and develop, reproduce, remove waste products (excretion), and are made of cells. Movement may be obvious, as in animals, or less obvious, as in plants. No single characteristic should be used alone; scientists consider the overall pattern of life processes."
  },
  {
    id: "g9_biology_cells",
    title: "The Cell: Basic Unit of Life",
    grade: 9,
    courseId: "grade9_biology",
    unit: "Cell Biology",
    description: "Cell theory and basic structures of plant and animal cells.",
    content: "The cell is the basic structural and functional unit of living organisms. Cell theory states that living things are made of cells, the cell is the basic unit of life, and new cells arise from existing cells. The cell membrane controls movement of substances into and out of the cell. Cytoplasm is where many cell activities occur, and the nucleus contains genetic material. Plant cells usually have a cell wall, chloroplasts and a large central vacuole."
  },
  {
    id: "g9_ict_computer_system",
    title: "Introduction to Computer Systems",
    grade: 9,
    courseId: "grade9_ict",
    unit: "Computer Fundamentals",
    description: "Hardware, software, input, processing, output and storage.",
    content: "A computer system accepts data, processes it according to instructions, produces information and can store results. Hardware means the physical parts of a computer, such as the keyboard, monitor, processor and storage drive. Software means the programs and instructions that tell hardware what to do. Input devices enter data, the CPU processes it, output devices present results, and storage devices keep data for later use."
  },
  {
    id: "g9_ict_files_internet",
    title: "Files, Folders and Safe Internet Use",
    grade: 9,
    courseId: "grade9_ict",
    unit: "Digital Skills",
    description: "Organizing digital files and using the internet responsibly.",
    content: "A file stores information such as a document, image or presentation. A folder helps organize files. Use clear file names and save work in a suitable folder. The internet connects computer networks and provides services such as websites and email. Use strong, unique passwords, keep personal information private, check information with reliable sources, and avoid opening unexpected links or attachments. Ask a trusted adult or teacher for help when something online seems unsafe."
  }
];

async function main() {
  const batch = db.batch();
  for (const lesson of lessons) {
    const { id, ...data } = lesson;
    batch.set(db.collection("lessons").doc(id), {
      ...data,
      published: true,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  }
  await batch.commit();
  console.log(`Successfully created/updated ${lessons.length} Grade 9 starter lessons.`);
}
main().catch(error => {
  console.error("Lesson seeding failed:", error.message);
  process.exitCode = 1;
});
