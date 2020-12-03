const quiz = [
  {
    question: "鬼滅の刃は全部で何巻？",
    answers: [
      "20巻",
      "21巻",
      "22巻",
      "23巻"
    ],
    correct: "23巻"
  },
  {
    question: "アップル社が販売しているPCの名前は？",
    answers: [
      "マクド",
      "ケンタッキー",
      "サイゼリア",
      "マック"
    ],
    correct: "マック"
  },
  {
    question: "Illustrator、Photoshopなどのソフトを販売している会社は？",
    answers: [
      "Sinobe",
      "Adobe",
      "Yorokobe",
      "Manobe"
    ],
    correct: "Adobe"
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズを設置
const setupQuiz = () => {

  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else {
    window.alert('不正解');
  }
  quizIndex++;
  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は ' + score + ' / ' + quizLength + ' です！');
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e)=>{
    clickHandler(e);
  });
  handleIndex++;
}
