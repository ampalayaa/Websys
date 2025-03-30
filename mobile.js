const questions = [
    {
        question: "Which programming language is primarily used for Android app development?",
        options: ["Java", "Swift", "Kotlin", "Dart"],
        answer: "Kotlin"
    },
    {
        question: "Which language is used for developing iOS applications?",
        options: ["Swift", "Java", "Kotlin", "C#"],
        answer: "Swift"
    },
    {
        question: "Which mobile app development framework is developed by Google?",
        options: ["Flutter", "React Native", "Xamarin", "Ionic"],
        answer: "Flutter"
    },
    {
        question: "What is the main programming language used in Flutter?",
        options: ["Dart", "JavaScript", "Swift", "Python"],
        answer: "Dart"
    },
    {
        question: "Which of the following is a cross-platform mobile development framework?",
        options: ["React Native", "Swift", "Java", "Objective-C"],
        answer: "React Native"
    },
    {
        question: "What is the purpose of Android Studio?",
        options: [
            "An IDE for Android development",
            "A database management tool",
            "A cloud service for mobile apps",
            "A UI design tool for iOS"
        ],
        answer: "An IDE for Android development"
    },
    {
        question: "Which markup language is used to design Android UI layouts?",
        options: ["XML", "HTML", "JSON", "CSS"],
        answer: "XML"
    },
    {
        question: "Which tool is used to debug Android applications?",
        options: ["ADB", "Xcode", "Android Monitor", "Firebase"],
        answer: "ADB"
    },
    {
        question: "Which mobile database is commonly used for offline data storage?",
        options: ["SQLite", "Firebase", "MongoDB", "PostgreSQL"],
        answer: "SQLite"
    },
    {
        question: "Which platform allows cloud-based mobile app development?",
        options: ["Firebase", "MongoDB", "Oracle", "DynamoDB"],
        answer: "Firebase"
    },
    {
        question: "What is the function of Apple’s Xcode?",
        options: [
            "It is an IDE for iOS app development",
            "It is a testing framework",
            "It is a database management tool",
            "It is a cloud service"
        ],
        answer: "It is an IDE for iOS app development"
    },
    {
        question: "What is the primary purpose of an APK file?",
        options: [
            "To install an Android application",
            "To install an iOS application",
            "To store app logs",
            "To manage database files"
        ],
        answer: "To install an Android application"
    },
    {
        question: "Which of the following is used for backend services in mobile apps?",
        options: ["Node.js", "Swift", "XAML", "Kotlin"],
        answer: "Node.js"
    },
    {
        question: "What is the name of Apple's official app distribution platform?",
        options: ["App Store", "Google Play", "Microsoft Store", "Amazon Appstore"],
        answer: "App Store"
    },
    {
        question: "Which type of mobile app is built using web technologies but runs like a native app?",
        options: ["Hybrid App", "Native App", "Progressive Web App", "Desktop App"],
        answer: "Hybrid App"
    }
];



let currentQuestionIndex = 0;
let score = 0;
const timeLimit = 15; // seconds
let timeLeft = timeLimit;
let timer;
let highScore = localStorage.getItem('highScore') ? JSON.parse(localStorage.getItem('highScore')) : { score: 0, time: '' };


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

function displayHighScore() {
    const highscoreEl = document.getElementById('highscore');
    if (highScore.score > 0) {
        highscoreEl.textContent = `Score: ${highScore.score} (Achieved on: ${highScore.time})`;
    } else {
        highscoreEl.textContent = 'No highscore yet';
    }
}
function updateHighScore() {
    const currentTime = new Date().toLocaleString(); // Get the current date and time
    if (score > highScore.score) {
        highScore = { score: score, time: currentTime };
        localStorage.setItem('highScore', JSON.stringify(highScore));
        displayHighScore(); // Update the displayed high score
    }
}

function endQuiz() {
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    finalScoreEl.textContent = `Your final score is ${score} out of ${questions.length}.`;

    updateHighScore(); // Update high score if necessary

    localStorage.setItem('quizScore', score);
}

// Initialize the quiz and display the highest score
startQuiz();
displayHighScore();