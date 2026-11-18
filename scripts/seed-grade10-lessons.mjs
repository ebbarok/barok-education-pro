/**
 * BAROK EDUCATION PRO — Grade 10 starter lessons
 *
 * Run only in a trusted environment with Firebase Admin SDK credentials:
 *   npm install firebase-admin
 *   GOOGLE_CLOUD_PROJECT=barok-education-pro node scripts/seed-grade10-lessons.mjs
 *
 * This writes original starter learning notes to Firestore. It does not run
 * automatically on GitHub and must never be exposed as a browser-side script.
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

initializeApp({
  credential: applicationDefault(),
  projectId: "barok-education-pro",
});

const db = getFirestore();

const lessons = [
  {
    id: "g10_math_sets",
    grade: 10,
    subject: "Mathematics",
    title: "Introduction to Sets",
    unit: "Sets",
    description: "Understand sets, elements, and ways of describing a set.",
    content: `A set is a well-defined collection of distinct objects. The objects are called elements or members. We usually name sets with capital letters, such as A and B.

Example: A = {1, 2, 3, 4}. The statement 2 ∈ A means 2 is an element of A. The statement 7 ∉ A means 7 is not an element of A.

A set can be described by listing its elements or by stating a rule that its elements satisfy. The empty set, written ∅ or {}, has no elements.

Remember: elements in a set are not repeated, and their order does not matter.`,
  },
  {
    id: "g10_math_number_sets",
    grade: 10,
    subject: "Mathematics",
    title: "Types of Number Sets",
    unit: "Number Systems",
    description: "Review natural, whole, integer, rational, and irrational numbers.",
    content: `Natural numbers are counting numbers: 1, 2, 3, ... . Whole numbers include zero: 0, 1, 2, 3, ... . Integers include negative whole numbers, zero, and positive whole numbers.

A rational number can be written as a/b, where a and b are integers and b is not zero. Examples include 1/2, -3, and 0.75. An irrational number cannot be written as a ratio of two integers; examples include √2 and π.

Every integer is rational because it can be written over 1. Not every rational number is an integer.`,
  },
  {
    id: "g10_english_grammar",
    grade: 10,
    subject: "English",
    title: "Parts of Speech",
    unit: "Grammar",
    description: "Identify the main parts of speech and their roles in sentences.",
    content: `Words have different jobs in a sentence. A noun names a person, place, thing, or idea. A pronoun replaces a noun. A verb expresses an action or state. An adjective describes a noun, while an adverb modifies a verb, adjective, or another adverb.

A preposition shows a relationship, often of place or time. A conjunction connects words or clauses. An interjection expresses a sudden feeling.

Example: “The careful student answered quickly.” Student is a noun, careful is an adjective, answered is a verb, and quickly is an adverb.

Practice: Identify the parts of speech in “Our teacher explained the lesson clearly.”`,
  },
  {
    id: "g10_english_paragraph",
    grade: 10,
    subject: "English",
    title: "Writing a Clear Paragraph",
    unit: "Writing",
    description: "Learn topic sentences, supporting details, and concluding sentences.",
    content: `A paragraph is a group of related sentences about one main idea. A clear paragraph usually has a topic sentence, supporting sentences, and a concluding sentence.

The topic sentence introduces the main idea. Supporting sentences explain it with reasons, facts, or examples. The concluding sentence brings the paragraph to a natural close.

Good paragraphs stay focused, use logical order, and include linking words such as first, however, because, and therefore.

Writing tip: plan one main idea before writing, then check that every sentence supports it.`,
  },
  {
    id: "g10_physics_motion",
    grade: 10,
    subject: "Physics",
    title: "Describing Motion",
    unit: "Motion",
    description: "Distinguish distance, displacement, speed, and velocity.",
    content: `Motion is a change in an object's position over time. Distance is the total length of the path travelled and is a scalar quantity. Displacement is the change from the starting position to the ending position in a specified direction.

Average speed = total distance ÷ total time. Average velocity = displacement ÷ time. Speed has magnitude only, while velocity includes direction.

For example, a person who walks 5 m east and then 5 m west travels 10 m, but their final displacement is zero if they return to the starting point.

Always include suitable units, such as metres (m), seconds (s), and metres per second (m/s).`,
  },
  {
    id: "g10_physics_force",
    grade: 10,
    subject: "Physics",
    title: "Force and Newton's Laws",
    unit: "Force",
    description: "Explore force and the basic ideas behind Newton's laws of motion.",
    content: `A force is a push or pull that can change an object's motion or shape. The SI unit of force is the newton (N).

Newton's first law says that an object remains at rest or continues moving at constant velocity unless acted on by a net external force. Newton's second law relates net force, mass, and acceleration: F = ma. Newton's third law says that interacting objects exert equal and opposite forces on each other.

For F = ma, use mass in kilograms and acceleration in metres per second squared to obtain force in newtons.

Forces always act through interactions between objects.`,
  },
  {
    id: "g10_chemistry_atoms",
    grade: 10,
    subject: "Chemistry",
    title: "Atomic Structure",
    unit: "Atoms",
    description: "Describe protons, neutrons, electrons, and atomic number.",
    content: `An atom contains a small, dense nucleus surrounded by electrons. The nucleus contains positively charged protons and neutral neutrons. Electrons have a negative charge and occupy regions around the nucleus.

The atomic number is the number of protons in an atom. In a neutral atom, the number of electrons equals the number of protons. The mass number is the total number of protons and neutrons.

Atoms of the same element have the same number of protons. Isotopes are atoms of the same element with different numbers of neutrons.

Example: a neutral carbon-12 atom has 6 protons, 6 neutrons, and 6 electrons.`,
  },
  {
    id: "g10_chemistry_bonding",
    grade: 10,
    subject: "Chemistry",
    title: "Chemical Bonding",
    unit: "Chemical Bonds",
    description: "Compare ionic and covalent bonding at an introductory level.",
    content: `Atoms form chemical bonds to reach more stable arrangements of electrons. In ionic bonding, electrons are transferred from one atom to another, producing oppositely charged ions that attract each other. Sodium chloride is a common example.

In covalent bonding, atoms share pairs of electrons. Water and carbon dioxide contain covalent bonds.

Ionic compounds often form crystal lattices. Many simple covalent substances exist as separate molecules.

A chemical formula shows which elements are present and the relative number of their atoms or ions.`,
  },
  {
    id: "g10_biology_cells",
    grade: 10,
    subject: "Biology",
    title: "Cell Structure and Function",
    unit: "Cells",
    description: "Review key cell structures and their functions.",
    content: `The cell is the basic structural and functional unit of living organisms. The cell membrane controls what enters and leaves the cell. Cytoplasm is where many cell activities take place. The nucleus contains genetic material and helps control cell activities.

Plant cells usually have a cellulose cell wall, chloroplasts for photosynthesis, and a large permanent vacuole. Animal cells do not have a cellulose cell wall or chloroplasts.

Mitochondria release usable energy through cellular respiration. Ribosomes are involved in protein synthesis.

Cell structures work together, allowing the cell to stay alive and perform its functions.`,
  },
  {
    id: "g10_biology_photosynthesis",
    grade: 10,
    subject: "Biology",
    title: "Photosynthesis",
    unit: "Plant Nutrition",
    description: "Explain how green plants make glucose using light energy.",
    content: `Photosynthesis is the process by which green plants use light energy to make glucose from carbon dioxide and water. It takes place mainly in chloroplasts, which contain the green pigment chlorophyll.

Word equation: carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll).

Light provides the energy for the process. Carbon dioxide enters leaves mainly through tiny openings called stomata, while water is absorbed by roots and transported through the plant.

Photosynthesis stores energy in glucose and releases oxygen into the environment. It supports food chains and helps maintain the balance of gases in the atmosphere.`,
  },
  {
    id: "g10_ict_computer_networks",
    grade: 10,
    subject: "ICT",
    title: "Introduction to Computer Networks",
    unit: "Networks",
    description: "Understand what a computer network is and why networks are used.",
    content: `A computer network is a group of connected devices that communicate and share resources. Networks can support file sharing, communication, shared printers, and access to online services.

A local area network (LAN) covers a limited area, such as a home, school, or office. A wide area network (WAN) connects devices over large geographical areas. The Internet is the largest widely used network of interconnected networks.

Network devices include switches, routers, and wireless access points. Use strong passwords, keep devices updated, and avoid sharing private information with unknown people.`,
  },
  {
    id: "g10_ict_digital_safety",
    grade: 10,
    subject: "ICT",
    title: "Digital Safety and Responsible Use",
    unit: "Digital Citizenship",
    description: "Learn safe and responsible habits when using digital services.",
    content: `Digital safety means protecting devices, accounts, and personal information when using technology. Use long, unique passwords and enable two-step verification when available. Never share passwords or one-time verification codes.

Be careful with unexpected links, attachments, and messages asking for personal details. Check the source before downloading files or entering information. Keep software and security updates current.

Responsible digital citizenship also means respecting other people, checking information before sharing it, and following copyright rules when using online materials.`,
  },
];

async function main() {
  const collection = db.collection("lessons");
  let written = 0;

  for (let i = 0; i < lessons.length; i += 400) {
    const batch = db.batch();
    for (const lesson of lessons.slice(i, i + 400)) {
      const { id, ...data } = lesson;
      batch.set(collection.doc(id), {
        ...data,
        published: true,
        updatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
      written++;
    }
    await batch.commit();
  }

  console.log(`Published ${written} Grade 10 starter lessons.`);
}

main().catch((error) => {
  console.error("Failed to seed Grade 10 lessons:", error);
  process.exitCode = 1;
});
