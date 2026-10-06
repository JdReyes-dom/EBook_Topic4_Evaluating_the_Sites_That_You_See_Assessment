/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 4: Evaluating the Sites That You See
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What was Kai using the information he found online for?',
    choices: {
      a: 'A school project',
      b: 'A social media post',
      c: 'A video game',
      d: 'A personal blog'
    },
    correct: 'a'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Which detail made Kai question whether the website was reliable?',
    choices: {
      a: 'The website had colorful pictures.',
      b: 'The website had large headings.',
      c: 'The website did not clearly show the author\'s name.',
      d: 'The website was easy to understand.'
    },
    correct: 'c'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You found a website with useful information for your school assignment, but it does not list an author or source. What should you do?',
    choices: {
      a: 'Use the information immediately because the website looks professional.',
      b: 'Check the website\'s details and compare with other sources with similar information.',
      c: 'Share the website with your classmates and ask if they think it is true.',
      d: 'Use the information as long as the pictures look accurate.'
    },
    correct: 'b'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'Your friend sends you an online article and asks you to share it. You notice that the article has no date and makes claims without showing evidence. What should you do?',
    choices: {
      a: 'Share it because your friend already checked it.',
      b: 'Share only the parts that sound believable.',
      c: 'Check the information using other trustworthy sources before sharing it.',
      d: 'Ignore all online information from websites without pictures.'
    },
    correct: 'c'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What did Kai do after noticing that something seemed strange about the website?',
    choices: {
      a: 'He immediately closed the website.',
      b: 'He copied the information before it disappeared.',
      c: 'He checked the website address, author, date, and sources.',
      d: 'He asked his classmates to decide whether the website was reliable.'
    },
    correct: 'c'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Kai search for the same information on other websites?',
    choices: {
      a: 'To find a website with more colorful pictures.',
      b: 'To compare the information and check whether the details were supported.',
      c: 'To find the website with the shortest explanation.',
      d: 'To avoid using any information from his first search.'
    },
    correct: 'b'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What helped Kai feel more confident about the information he used for his project?',
    choices: {
      a: 'The first website looked professional.',
      b: 'The information was written using large headings.',
      c: 'He checked the facts and compared them with reliable sources.',
      d: 'He found several pictures related to the topic.'
    },
    correct: 'c'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why is a professional-looking website not enough to prove that its information is reliable?',
    choices: {
      a: 'Professional websites usually contain too much information.',
      b: 'A website can look trustworthy while still containing claims that lack evidence or reliable sources.',
      c: 'Colorful websites are designed mainly for entertainment.',
      d: 'Websites with pictures cannot be used for school projects.'
    },
    correct: 'b'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Kai finds two websites with different information about the same topic. One provides an author, publication date, references, and supporting evidence, while the other does not. Which source should Kai be more likely to trust, and why?',
    choices: {
      a: 'The second website, because it has simpler information.',
      b: 'The first website, because it provides details that can help verify its information.',
      c: 'The second website, because it does not include complicated references.',
      d: 'Both websites equally, because information online is always reliable.'
    },
    correct: 'b'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Which approach best demonstrates what Kai learned from his experience?',
    choices: {
      a: 'Trust websites that look professional and use information that is easy to understand.',
      b: 'Use the first search result because search engines have already checked the information.',
      c: 'Check the URL, author, date, and sources, then compare the information with reliable sources before believing or sharing it.',
      d: 'Avoid using online information completely because it cannot always be trusted.'
    },
    correct: 'c'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;
