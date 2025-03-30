const questions = [
    {
        question: "What does IP stand for in networking?",
        options: [
            "Internet Protocol",
            "Internal Process",
            "Interconnected Program",
            "Internet Provider"
        ],
        answer: "Internet Protocol"
    },
    {
        question: "Which layer of the OSI model is responsible for routing?",
        options: ["Network", "Transport", "Data Link", "Session"],
        answer: "Network"
    },
    {
        question: "Which protocol is used to transfer files over the internet securely?",
        options: ["SFTP", "HTTP", "FTP", "SMTP"],
        answer: "SFTP"
    },
    {
        question: "What is the default port number for HTTP?",
        options: ["80", "443", "21", "25"],
        answer: "80"
    },
    {
        question: "Which device is used to connect different networks together?",
        options: ["Router", "Switch", "Hub", "Repeater"],
        answer: "Router"
    },
    {
        question: "Which of the following is a private IP address?",
        options: ["192.168.1.1", "8.8.8.8", "172.217.10.14", "208.67.222.222"],
        answer: "192.168.1.1"
    },
    {
        question: "Which protocol is used to assign IP addresses dynamically?",
        options: ["DHCP", "DNS", "IPSec", "SNMP"],
        answer: "DHCP"
    },
    {
        question: "What does DNS stand for?",
        options: [
            "Domain Name System",
            "Data Network Service",
            "Dynamic Network Setup",
            "Digital Name Structure"
        ],
        answer: "Domain Name System"
    },
    {
        question: "Which layer of the OSI model does the TCP protocol operate on?",
        options: ["Transport", "Network", "Session", "Application"],
        answer: "Transport"
    },
    {
        question: "Which network topology connects each device to a central hub?",
        options: ["Star", "Bus", "Ring", "Mesh"],
        answer: "Star"
    },
    {
        question: "What is the main function of a firewall in networking?",
        options: [
            "To filter and monitor network traffic",
            "To speed up internet connections",
            "To convert IP addresses",
            "To assign IP addresses"
        ],
        answer: "To filter and monitor network traffic"
    },
    {
        question: "Which protocol is used for sending emails?",
        options: ["SMTP", "POP3", "IMAP", "FTP"],
        answer: "SMTP"
    },
    {
        question: "Which IP version uses 128-bit addresses?",
        options: ["IPv6", "IPv4", "IPX", "ICMP"],
        answer: "IPv6"
    },
    {
        question: "What type of attack floods a network with excessive traffic?",
        options: ["DDoS", "Phishing", "MITM", "SQL Injection"],
        answer: "DDoS"
    },
    {
        question: "Which protocol is used to encrypt web traffic for secure communication?",
        options: ["HTTPS", "HTTP", "FTP", "SSH"],
        answer: "HTTPS"
    }
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