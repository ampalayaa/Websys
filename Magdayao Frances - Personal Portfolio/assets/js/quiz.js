const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HyperText Machine Language",
            "HyperText Marking Language",
            "HyperText Markup Leveler"
        ],
        answer: "HyperText Markup Language"
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "None of the above"],
        answer: "1995"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Rails"],
        answer: "React"
    },
    {
        question: "Who is the creator of JavaScript?",
        options: ["Brendan Eich", "Linus Torvalds", "James Gosling", "Guido van Rossum"],
        answer: "Brendan Eich"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "--"],
        answer: "//"
    },
    {
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        options: [
            "print('Hello World')",
            "console.log('Hello World')",
            "echo 'Hello World'",
            "document.write('Hello World')"
        ],
        answer: "console.log('Hello World')"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "IBM"],
        answer: "Netscape"
    },
    {
        question: "What is the file extension for JavaScript files?",
        options: [".java", ".js", ".javascript", ".script"],
        answer: ".js"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which method is used to parse a JSON string to an object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toObject()"],
        answer: "JSON.parse()"
    },
    {
        question: "What is the output of 'typeof null' in JavaScript?",
        options: ["null", "undefined", "object", "number"],
        answer: "object"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.serialize()"],
        answer: "JSON.stringify()"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["interface", "throws", "program", "short"],
        answer: "program"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
const timeLimit = 15; // seconds
let timeLeft = timeLimit;
let timer;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const timerEl = document.getElementById('timer');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const finalScoreEl = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('d-none');
    quizContainer.classList.remove('d-none');
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    timeLeft = timeLimit;
    updateTimerDisplay();
    timer = setInterval(updateTimer, 1000);

    feedbackEl.textContent = '';
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-primary', 'mt-2', 'fade-in');
        button.textContent = option;
        button.onclick = () => selectAnswer(option, button);
        optionsEl.appendChild(button);
    });
}

function updateTimer() {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(null, null);
    }
}

function updateTimerDisplay() {
    timerEl.textContent = `Time left: ${timeLeft}s`;
}

function selectAnswer(selectedOption, buttonElement) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        if (buttonElement) buttonElement.classList.add('correct');
        feedbackEl.textContent = 'Correct!';
        feedbackEl.classList.remove('text-danger');
        feedbackEl.classList.add('text-success');
        score++;
    } else {
        if (buttonElement) buttonElement.classList.add('incorrect');
        feedbackEl.textContent = `Wrong! The correct answer was: ${currentQuestion.answer}`;
        feedbackEl.classList.remove('text-success');
        feedbackEl.classList.add('text-danger');
    }
    // Automatically move to the next question after a delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 2000); // 2-second delay for feedback
}

function endQuiz() {
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    finalScoreEl.textContent = `Your final score is ${score} out of ${questions.length}.`;
    localStorage.setItem('quizScore', score);
}

restartBtn.onclick = startQuiz;

// Initialize the quiz
startQuiz();

function endQuiz() {
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    finalScoreEl.textContent = `Your final score is ${score} out of ${questions.length}.`;
    localStorage.setItem('quizScore', score);

    // Redirect to dashboard.html after a 3-second delay
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 500); 
}