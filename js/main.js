// array of planets
const planets = [
    {
        name: 'Mercury',
        description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbital period (about 88 Earth days) is less than any other planet in the Solar System. Seen from Earth, it appears to move around its orbit in about 116 days. It has no known natural satellites. It is named after the Roman deity Mercury, the messenger to the gods.',
        image: 'img/mercury.jpg'
    },
    {
        name: 'Venus',
        description: 'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellite. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon',
        image: 'img/venus.jpg'
    },
    {
        name: 'Earth',
        description: "Earth (otherwise known as the world) is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life.",
        image: 'img/earth.jpg'
    },
    {
        name: 'Mars',
        description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the "Red Planet" because the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.',
        image: 'img/mars.jpg'
    },
    {
        name: 'Jupiter',
        description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter is a gas giant. Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a tenth of the number of molecules.',
        image: 'img/jupiter.jpg'
    },
    {
        name: 'Saturn',
        description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Although only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol represents the god's sickle.",
        image: 'img/saturn.jpg'
    },
    {
        name: 'Uranus',
        description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224.2 °C), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.",
        image: 'img/uranus.jpg'
    },
    {
        name: 'Neptune',
        description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units. It is named after the Roman god of the sea and has the astronomical symbol, a stylised version of the god Neptune's trident.",
        image: 'img/neptune.jpg'
    },
]

// the array of test questions
const questions = [
    {
        question: "How many planets are in our solar system?",
        answerChoices: [{answer: '8', correct: true}, {answer: '10', correct: false}, {answer: '9', correct: false}, {answer: '6', correct: false}],
        explanation: 'There are 8 planets in our solar system, they are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. The 9th planet (Pluto) is a "dwarth planet", it is not included into the list of "real planets".',
        explanationImage: 'img/planet-overview.jpg',
        userAnswered: ''
    },
    {
        question: "What is the largest planet in our Solar System?",
        answerChoices: [{answer: 'Jupiter', correct: true}, {answer: 'Earth', correct: false}, {answer: 'Mars', correct: false}, {answer: 'Saturn', correct: false}],
        explanation: 'The largest planet in our solar system by far is Jupiter, which beats out all the other planets in both mass and volume. Jupiter’s mass is more than 300 times that of Earth, and its diameter is about 11 times larger than Earth’s diameter. Jupiter is 2 ½ times more massive than the rest of the planets in the solar system combined.',
        explanationImage: 'img/solar-system-size-compare.jpg',
        userAnswered: ''
    },
    {
        question: "What is the smallest planet in our Solar System?",
        answerChoices: [{answer: 'Mercury', correct: true}, {answer: 'Earth', correct: false}, {answer: 'Mars', correct: false}, {answer: 'Venus', correct: false}],
        explanation: 'The smallest planet in regards to both mass and volume is Mercury—this tiny world is nearly 20 times less massive than Earth, and its diameter is about times 2 ½ smaller. In fact, Mercury is closer in size to our Moon than to Earth.',
        explanationImage: 'img/mercuryearth.png',
        userAnswered: ''
    },
    {
        question: "How far is the Earth from the sun",
        answerChoices: [{answer: '93 million miles', correct: true}, {answer: '1.2 trillion miles', correct: false}, {answer: '2.4 billion miles', correct: false}, {answer: '500,000 miles', correct: false}],
        explanation: 'The distance from earth to the sun is about 93 million miles. This distance is also known as 1 Astronomical Unit (AU)',
        explanationImage: 'img/distance-from-earth-to-sun.jpg',
        userAnswered: ''
    },
    {
        question: "How long is the Earth's in diameter?",
        answerChoices: [{answer: '7,900 miles', correct: true}, {answer: '6 million miles', correct: false}, {answer: '500,220 miles', correct: false}, {answer: '33,000 miles', correct: false}],
        explanation: 'The earth is about 7,900 miles in diameter',
        explanationImage: 'img/earth-diameter.jpg',
        userAnswered: ''
    },
    {
        question: "What is the closest planet to Earth",
        answerChoices: [{answer: 'Venus', correct: true}, {answer: 'Mars', correct: false}, {answer: 'Saturn', correct: false}, {answer: 'Moon', correct: false}],
        explanation: "Venus is closest to Earth (about 25.7 million miles). Earth's other neighbor Mars is about 48.6 million miles away. Moon is not a planet",
        explanationImage: 'img/earth-by-jocelin.jpg',
        userAnswered: ''
    },
    {
        question: "How long does it take light to travel from Sun to Earth?",
        answerChoices: [{answer: '8 minutes and 20 seconds', correct: true}, {answer: 'less then 1 second', correct: false}, {answer: '1 light year', correct: false}, {answer: '24 hours', correct: false}],
        explanation: 'Sunlight travels at the speed of light. Photons emitted from the surface of the Sun need to travel across the vacuum of space to reach our eyes. The short answer is that it takes sunlight an average of 8 minutes and 20 seconds to travel from the Sun to the Earth.',
        explanationImage: 'img/time-for-light-to-travel.jpg',
        userAnswered: ''
    },
    {
        question: "How old is our solar system?",
        answerChoices: [{answer: '4.6 billion years old', correct: true}, {answer: '2,016  years old', correct: false}, {answer: '8.8 billion years old', correct: false}, {answer: '16.2 billion years old', correct: false}],
        explanation: 'The Solar System was formed approximately 4.6 billion years ago and consists of the Sun, planets, dwarf planets and other astronomical objects bound in its orbit. The formation was cause by the collapse of a giant molecular cloud, the mass at the centre collecting to form the Sun and a flat disk of dust around it which the planets and other bodies would eventually be formed from.',
        explanationImage: 'img/sunbirth.jpg',
        userAnswered: ''
    }
]

// add 1 question per each planet to the questions array
planets.forEach( ({name, description, image}) => {
    questions.push(
        {
            image,
            question: "What is the name of this planet?",
            answerChoices: [{answer: name, correct: true}],
            explanation: description,
            userAnswered: ''
        }
    );
});
// Set default homepage header
let mainHeader = '';
// Set default homepage subheader
let headerDescription = '';
// Set default homepage header 3
let headerSecondaryDescription = '';
function getHomePage() {
    // Set default homepage header
    let mainHeader = 'Astronomy Quiz';
    document.getElementById('mainHeader').textContent = mainHeader;
    // Set default homepage subheader
    let headerDescription = 'Test your astronomy knowledge';
    document.getElementById('headerDescription').textContent = headerDescription;
    // Set default homepage header 3
    let headerSecondaryDescription = 'Type in your name to get started';
    document.getElementById('headerSecondaryDescription').textContent = headerSecondaryDescription;
    // Display username form on the homepage
    const homePage = (`
        <form class="mainForm">
            <input id="username" placeholder="Name"/>
            <button type="button" onclick="startTest()">Start</button>
            <p id="homePageMessage"></p>
        </form>
    `);
    // when page loads display the username form in the main section of the page
    document.getElementById('mainSection').innerHTML = homePage;
}
getHomePage();
// this function will validate the user's name and start the test
function startTest() {
    // get the username value from input
    const username = document.getElementById('username').value.trim();
    if (username) {
        // if username passes validation, display success message
        displayMessage("homePageMessage", `Hello ${username}, we are loging you in`, "orange");
        // set globalName to the name of the user
        globalName = username;
        // and get the first test question
        getTestQuestion();
        // display score
        getScore(username, 'scoreKeeper', 0, 0, "#3A5671");
    } else {
        // if username doesn't pass validation display error message'
        displayMessage("homePageMessage", "Name is required", "#D94A2A", "900");
    }
}
// create a global var for current question
let globalQuestion = {};
// create a global var for the name of the user
let globalName;
function getTestQuestion() {
    // clear explanation image
    document.getElementById('explanationHelper').innerHTML = '';
    // clear question explanation section
    document.getElementById('explanation').innerHTML = '';
    // clear helper section
    document.getElementById('mainHelper').innerHTML = '';
    // remove next button
    document.getElementById('nextButtonList').innerHTML = '';
    // initiate array for questions that have not been answered yet
    const unansweredQuestions = [];
    // loop through all questions
    questions.forEach( (question) => {
        // if question has not been answered yet, add it to the unansweredQuestions array
        if (!question.userAnswered) {
            unansweredQuestions.push(question);
        }
    });
    // if user still has unansweredQuestions, pick a random question from the unansweredQuestions array
    const questionInHand = unansweredQuestions.length > 0 ? unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)] : '';
    // if user has a question to answer
    if (questionInHand) {
        // set global question to be question at hand so we can refer to eat later
        globalQuestion = questionInHand;
        //destructure questionInHand
        const { question, answerChoices, explanation, explanationImage, image } = questionInHand;
        // set the page subheading to be the question
        document.getElementById('headerDescription').innerHTML = question;
        // clear the heading 3
        document.getElementById('headerSecondaryDescription').innerHTML = '';
        // if question requires answer choices
        if (answerChoices.length > 1) {
            // create an empty ordered list
            document.getElementById('mainSection').innerHTML = `<ul id="answerChoiceList"></ul>`;
            //mix answer choices
            const shuffledAnswers = shuffle(answerChoices);
            // append mixed answer choices to the list
            appendListItems("answerChoiceList", shuffledAnswers)
        } else { // if question requires input field
            document.getElementById('mainSection').innerHTML = (`
                <div class="text-center">
                    <img class="questionImage" src="${image}" alt="${question}" />
                </div>
                <form class="mainForm">
                    <input id="userAnswer" placeholder="${question}"/>
                    <button type="button" class="ansButton" onclick="submitAnswer()">Submit</button>
                    <p id="homePageMessage"></p>
                </form>
            `)
        }
    // if all question have been answered, display the results
    } else {
        // set the page subheading to be the finished message
        displayMessage("headerDescription", `You've just finished all ${questions.length} questions`, "#9FA736", "300");
        // set heading 3 to ask the user to give rating to the test
        displayMessage("headerSecondaryDescription", 'Please rate this test', "#B1B986", "500");
        // create an empty ordered list
        document.getElementById('mainSection').innerHTML = `<ul id="rankingList"></ul>`;
        // display rate quiz section in the list that has just been created
        appendListItems('rankingList', [{answer: '1 star', correct: '1 star'}, {answer: '2 stars', correct: '2 stars'}, {answer: '3 stars', correct: '3 stars'}, {answer: '4 stars', correct: '4 stars'}, {answer: '5 stars', correct: '5 stars'}]);
        // display user score in explanation
        let numRight = 0;
        let totalAnswered = 0;
        // increment the num wrong and num right based on user answers
        questions.forEach( question => {
            if (question.userAnswered) totalAnswered += 1;
            if (question.userAnswered === "correct") numRight += 1;
        });
        const percentage = totalAnswered ? Math.round((numRight / totalAnswered) * 100) : 0 ;
        displayMessage("explanation", `${globalName} your test score is ${percentage}%`, "#B1B986", "900");
        // do not display score in the footer
        displayMessage("scoreKeeper", '', "#D94A2A", "900");
        // display quit button
        appendListItems("nextButtonList", [{answer: 'Quit', correct: 'quit'}])
    }
}
function submitAnswer(answer = null) {
    // if answer was not provided we'll get it from the text input field
    if (!answer) {
        // get user answer from input field
        const userAnswer = document.getElementById('userAnswer').value.trim();
        // if user answer passes validation (i.e. is not empty)
        if (userAnswer) {
            // run the check function to see if user provided the correct answer
            checkAnswer(userAnswer);
        } else {
            // if user answer doesn't pass validation, display error message
            displayMessage("mainHelper", "Please enter a valid answer", "#D94A2A", "900");
        }
    // If answer was provided, it means it was a multiple choice section
    } else {
        // run the check function to see if user provided the correct answer
        checkAnswer(answer);
    }
}
function checkAnswer(userAnswer) {
    // disable all answer buttons after the answer has been submitted
    // first use spread operator to turn HTMLCollection into an array
    let answerButtons = [...document.getElementsByClassName('ansButton')];

    answerButtons.forEach(button => {
        button.disabled = true;
        button.className += " disabledButton";
    });
    // attempt to locate the userAnswer in the answerChoices array
    const ans = globalQuestion.answerChoices.find(answerChoice => answerChoice.answer.toLowerCase() === userAnswer.toLowerCase());
    // if answer was in answerChoices array and answer was correct set it to 'correct' else incorrect
    const checkedAnswer = ans && ans.correct ? 'correct' : 'incorrect';
    // locate the question user is working on in the questions array
    let question = questions.find(q => q === globalQuestion);
    // change the global question userAnswered to what the user answer was ('correct' or 'incorrect')
    globalQuestion.userAnswered = checkedAnswer;
    // remove the question from the array and replace it with the question that has the user answer
    questions.splice(questions.indexOf(question), 1, globalQuestion);
    // display helper message
    if (checkedAnswer === 'correct') {
        // message if answered correctly
        displayMessage("mainHelper", "Correct! Good Job!", "#9FA736", "900");
    } else {
        const correctAnswer = question.answerChoices.find(answer => answer.correct === true);
        // message if answered wrong
        displayMessage("mainHelper", `Incorrect! The correct answer was ${correctAnswer.answer}`, "#D94A2A", "900");
    }
    if (question.explanationImage) {
        document.getElementById('explanationHelper').innerHTML = (`
            <div class="text-center">
                <img class="questionImage" src="${question.explanationImage}" alt="${question.explanationImage}" />
            </div>
        `)
    }
    // display the explanation
    displayMessage("explanation", question.explanation, "#B1B986", "200");
    // intiate variables for questions that have been answered right and wrong
    let numRight = 0;
    let totalAnswered = 0;
    // increment the num wrong and num right based on user answers
    questions.forEach( question => {
        if (question.userAnswered) totalAnswered += 1;
        if (question.userAnswered === "correct") numRight += 1;
    });
    // calculate score
    getScore(globalName, 'scoreKeeper', numRight, totalAnswered, "#3A5671");
    //append the next button
    appendListItems("nextButtonList", [{answer: 'next', correct: true}])
    // get next question
}
function getScore(user, scoreLocation, answeredCorrect, totalAnsweredQuestions, textColor) {
    /* getScore function is used to calculate the user's test score, it takes 4 arguments:
    user - string - username of the person who is taking the test
    scoreLocation - string - id of the element in which the score is to be displayed
    answeredCorrect - number - number of questions answered correctly by the user.
    totalAnsweredQuestions - number - number of total questions in the test */
    const percentage = totalAnsweredQuestions ? Math.round((answeredCorrect / totalAnsweredQuestions) * 100) : 0 ;
    const score = totalAnsweredQuestions ? `${user} so far you've answered correctly ${answeredCorrect} out of ${totalAnsweredQuestions} questions, which is ${percentage}%.<br/>${questions.length - totalAnsweredQuestions} unanswered questions remaining` : `${user} you did not answer any questions yet`;
    displayMessage(scoreLocation, score, textColor)
}
function displayMessage(messageLocation, messageContent, messageColor = null, messageWeight = null) {
    /* displayMessage function is used when a message needs to be displayed to the user, it takes 4 arguments:
    messageLocation - string - id of the element in which the message is to be displayed
    messageContent - string - the actual words of the message
    messageColor (optional) - string - red by default - the color of the message string.
    messageWeight (optional) - string - 400 by default - the font weight of the message */
    const message = messageContent.fontcolor(messageColor ? messageColor : "red");
    messageWeight ? document.getElementById(messageLocation).style.fontWeight = messageWeight : document.getElementById(messageLocation).style.fontWeight = "400";
    document.getElementById(messageLocation).innerHTML = message;
}
function appendListItems(location, array) {
    // this function will loop over an array and append list item for every element of array
    // we'll use it to append answer choices (buttons) to the list
    // loction where to append buttons
    // array - array of needed buttons
    const ul = document.getElementById(location);
    array.forEach( ({answer, correct}) => {
        const li = document.createElement("li");
        //li.appendChild(document.createTextNode(answer));
        const button = document.createElement("button");
        button.innerHTML = answer;
        li.appendChild(button);
        // if array length is 1, we know it is the next button
        if (array.length == 1 && array[0].correct !== 'quit') {
            // get next question when pressed
            button.addEventListener("click", function() {
                getTestQuestion();
            });
        // if only one button in array and it is the quit button
        } else if (array.length == 1 && array[0].correct === 'quit') {
            // add an id and a class to center the quit button
            button.setAttribute("id", "quitButton");
            document.getElementById('nextButtonList').className = "quitButtonClass";
            button.addEventListener("click", function() {
                // reset the planet objects so they do not have any user answers
                questions.forEach( question => question.userAnswered = "");
                // current question is now empty
                globalQuestion = {};
                // global var for the name of the user is now empty string
                globalName = '';
                // clear explanation
                document.getElementById('explanation').innerHTML = "";
                // clear nextButtonSection
                document.getElementById('nextButtonList').innerHTML = "";
                // get the homepage
                getHomePage();
            });
        } else if (array.length > 1 && typeof correct === 'string') {
            // if correct is of type string, we know this are ranking buttons
            button.addEventListener("click", function() {
                giveRating(correct);
            });
        } else {
            //
            button.setAttribute('class', 'ansButton');
            // if array contains answer choices, we will check the answer pressed
            button.addEventListener("click", function() {
                submitAnswer(answer);
            });
        }
        ul.appendChild(li);
    })
}
function giveRating(rating) {
    displayMessage("mainSection", `<h3 class="text-center">Thank You for ranking us ${rating}<h3/>`, "#B1B986", "500");
    displayMessage("headerSecondaryDescription", '', "#B1B986", "500");
}
// This function will shuffle an array (we'll use it to shuffle array of answer choices)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}