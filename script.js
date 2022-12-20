const quizData = [
  {
    question: 'Which of the following cities is the capital of Japan?',
    a: 'Beijing',
    b: 'Lishui',
    c: 'Jinyun',
    d: 'Tokyo',
    correct: 'd'
  },
  {
    question: `Who is the current leader of North Korea?`,
    a: 'Kim Il-sung',
    b: 'Kim Jong-il',
    c: 'Kim Jong-un',
    d: 'Elon Musk',
    correct: 'c'
  },
  {
    question: `Among the following four celebrities, who became famous for starring in Japanese porn?`,
    a: 'Yui Hatano',
    b: 'Cai Xukun',
    c: 'Donald Trump',
    d: 'Joe Biden',
    correct: 'a'
  },
  {
    question: 'Jinyun is a town in south China in case you have no idea what it is. Now, tell me who is the most handsome man from that town?',
    a: 'Ma Yichao',
    b: 'Hu Haoqing',
    c: 'Zhu Zaiwai',
    d: 'Author of this quiz',
    correct: 'd'
  },
  {
    question: 'Which of the following is the currency of Japan?',
    a: 'Yuan',
    b: 'Yen',
    c: 'dollar',
    d: 'euro',
    correct: 'b'
  },
  {
    question: `Among the following options, which one is not Cai Xukun's bragged strength of his?`,
    a: 'Rap',
    b: 'Basketball',
    c: 'Dance',
    d: 'Cooking',
    correct: 'd'
  },
  {
    question: 'What is the most poplular programming language?',
    a: 'Python',
    b: 'JavaScript',
    c: 'C#',
    d: 'Java',
    correct: 'b'
  }
];


const questionElement = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitButton = document.getElementById('submit');
const answersElements = document.querySelectorAll('.answer');
let answer = undefined;
let currentQuestionNumber = 0;
let score = 0;


loadQuiz();


function loadQuiz() {
  deSelect(answersElements);

  let currentQuestion = quizData[currentQuestionNumber].question;
  questionElement.innerText = currentQuestion;
  a_text.innerText = quizData[currentQuestionNumber].a;
  b_text.innerText = quizData[currentQuestionNumber].b;
  c_text.innerText = quizData[currentQuestionNumber].c;
  d_text.innerText = quizData[currentQuestionNumber].d;
}


function getSelected(answersElements) {
  for (let answerEl of answersElements) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  }
  return answer;
}

function deSelect(answersElements) {
  for (let answerEl of answersElements) {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  }
}

function loadFinalPage() {
  document.body.innerHTML = `You have finished the quiz, your score is ${score}. You must have the highest IQ in your village`
}



submitButton.addEventListener('click', () => {
  answer = getSelected(answersElements);
  if (answer === quizData[currentQuestionNumber].correct) {
    score++;
  }

  currentQuestionNumber++;

  if (currentQuestionNumber < quizData.length) {
    loadQuiz();
  } else {
    loadFinalPage();
  }
}
);