const questions = [
    {
        question: "Jak działa sortowanie przez scalanie?",
        optionA: "Scalanie fragmentów",
        optionB: "Sortowanie przez porównania",
        optionC: "Iteracyjne sortowanie",
        optionD: "Sortowanie przez wymianę",
        correctOption: "optionA" // Poprawna odpowiedź: Scalanie fragmentów, O(n log n) z
    },
    {
        question: "Różnice między listą a krotką?",
        optionA: "Lista niemutowalna, krotka mutowalna",
        optionB: "Obie niemutowalne",
        optionC: "Obie mutowalne",
        optionD: "Lista mutowalna, krotka niemutowalna",
        correctOption: "optionD" // Poprawna odpowiedź: Lista mutowalna, krotka niemutowalna z
    },
    {
    question: "Różnice między `append()` a `extend()`?",
    optionA: "`append()` dodaje z listy, `extend()` usuwa elementy",
    optionB: "`append()` dodaje wiele elementów, `extend()` jeden element",
    optionC: "`append()` dodaje do początku, `extend()` na końcu",
    optionD: "`append()` dodaje jeden element, `extend()` łączy listy",
    correctOption: "optionD" // Poprawna odpowiedź: `append()` dodaje jeden element, `extend()` łączy listy
	},
    {
    question: "Różnice między `deepcopy()` a `copy()`?",
    optionA: "`copy()` tworzy płytką kopię obiektu, `deepcopy()` tworzy głęboką kopię",
    optionB: "`copy()` kopiuje obiekt i jego referencje, `deepcopy()` kopiuje tylko referencje",
    optionC: "`copy()` kopiuje tylko obiekty zewnętrzne, `deepcopy()` tylko obiekty zagnieżdżone",
    optionD: "`copy()` tworzy kopię płytką, `deepcopy()` zmienia obiekty zagnieżdżone",
    correctOption: "optionC" // Poprawna odpowiedź: `copy()` kopiuje tylko obiekty zewnętrzne, `deepcopy()` tylko obiekty zagnieżdżone
	},
    {
        question: "Jak działa zarządzanie pamięcią w Pythonie?",
        optionA: "Garbage collection automatycznie zarządza pamięcią",
        optionB: "Wymaga ręcznego zarządzania pamięcią",
        optionC: "Nie ma mechanizmu zarządzania pamięcią",
        optionD: "System referencji cyklicznych wymaga ręcznego czyszczenia",
        correctOption: "optionA" // Poprawna odpowiedź: Garbage collection do automatycznego zarządzania pamięcią
    },
    {
        question: "Jak zaimplementować rekurencję?",
        optionA: "Funkcja wywołująca sama siebie, np. obliczanie silni",
        optionB: "Funkcja iteracyjna, np. suma elementów listy",
        optionC: "Funkcja operująca na danych zewnętrznych",
        optionD: "Funkcja używająca metod statycznych",
        correctOption: "optionA" // Poprawna odpowiedź: Funkcja wywołująca sama siebie, np. obliczanie silni
    },
    {
        question: "Różnice między `sort()` a `sorted()`?",
        optionA: "`sort()` i `sorted()` działają identycznie",
        optionB: "`sort()` zmienia listę, `sorted()` zwraca nową listę",
        optionC: "`sort()` działa na krotkach, `sorted()` na listach",
        optionD: "`sort()` zwraca nową listę, `sorted()` zmienia listę",
        correctOption: "optionB" // Poprawna odpowiedź: `sort()` zmienia listę, `sorted()` zwraca nową listę
    },
    {
        question: "Jak zaimplementować wyszukiwanie binarne?",
        optionA: "Liniowo przeszukując tablicę",
        optionB: "Sortując dane w tablicach",
        optionC: "Używając funkcji hashujących",
        optionD: "Na posortowanej tablicy, dzieląc ją na połowy",
        correctOption: "optionD" // Poprawna odpowiedź: Na posortowanej tablicy, dzieląc ją na połowy
    },
    {
        question: "Co to jest metoda `__init__()`?",
        optionA: "Konstruktor klasy, inicjalizuje atrybuty obiektu",
        optionB: "Destruktor klasy, usuwa atrybuty",
        optionC: "Metoda modyfikująca atrybuty obiektu",
        optionD: "Metoda operująca na danych wejściowych",
        correctOption: "optionA" // Poprawna odpowiedź: Konstruktor klasy, inicjalizuje atrybuty obiektu
    },
    {
        question: "Zasady działania algorytmu sortowania szybkiego:",
        optionA: "Sortuje jeden po drugim, używając dodatkowej pamięci",
        optionB: "Dzieli tablicę, sortuje każdy element, łączy podtablice",
        optionC: "Używa porównań bez dzielenia tablicy",
        optionD: "Wybiera pivot, dzieli tablicę, sortuje rekursywnie",
        correctOption: "optionD" // Poprawna odpowiedź: Wybiera pivot, dzieli tablicę, sortuje rekursywnie
    },
    {
        question: "Co to jest 'lambda function'?",
        optionA: "Funkcja używana do zarządzania obiektami",
        optionB: "Funkcja zdefiniowana w module matematycznym",
        optionC: "Funkcja, która zawsze zwraca `None`",
        optionD: "Anonimna funkcja, np. `lambda x: x * 2`",
        correctOption: "optionD" // Poprawna odpowiedź: Anonimna funkcja, np. `lambda x: x * 2`
    },
    {
        question: "Jakie są zasady działania funkcji `map()`?",
        optionA: "Filtruje elementy na podstawie warunku",
        optionB: "Zamienia elementy na nowe wartości",
        optionC: "Sortuje elementy w iterowalnym obiekcie",
        optionD: "Zastosowuje funkcję do każdego elementu iterowalnego",
        correctOption: "optionD" // Poprawna odpowiedź: Zastosowuje funkcję do każdego elementu iterowalnego
    },
    {
    question: "Jak działa funkcja `filter()`?",
    optionA: "Sortuje elementy w iterowalnym obiekcie",
    optionB: "Filtruje elementy iterowalnego obiektu na podstawie funkcji warunkowej",
    optionC: "Zamienia elementy na podstawie funkcji",
    optionD: "Wybiera losowe elementy z iterowalnego obiektu",
    correctOption: "optionB" // Poprawna odpowiedź: Filtruje elementy iterowalnego obiektu na podstawie funkcji warunkowej
	},
    {
    question: "Podstawowe metody obsługi plików w Pythonie?",
    optionA: "Otwieranie, czytanie, pisanie, zamykanie plików",
    optionB: "Tworzenie, usuwanie, kopiowanie plików",
    optionC: "Tylko czytanie i zamykanie plików",
    optionD: "Otwieranie, czytanie, modyfikacja plików",
    correctOption: "optionC" // Poprawna odpowiedź: Tylko czytanie i zamykanie plików
	}
];



let shuffledQuestions = [] //Pusta tablica do przechowywania przetasowanych wybranych pytań.

function handleQuestions() { 
    //Funkcja do przetasowania i dodania 10 pytań do tablicy .
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}	


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// Funkcja do wyświetlania kolejnego pytania z tablicy na stronie
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //Pobiera aktualne pytanie. 
    const currentQuestionAnswer = currentQuestion.correctOption //Pobiera odpowiedź na aktualne pytanie.
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })
   
    //Sprawdzanie zgodności odpowiedzi
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //czy wybór jest zgodny z odpoiwiedzia
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#90EE90"
            playerScore++
            indexNumber++
            //czas przełądowania pytań
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#FF8488"
            document.getElementById(correctOption).style.backgroundColor = "#90EE90"
            wrongAttempt++
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//nasepne pytanie
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//czyszczenie tla zaznaczen
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// czyszczenie zaznaczen (przyciskow)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// koniec quizu
function handleEndGame() {
    let remark = null
    let remarkColor = null

  
    if (playerScore <= 3) {
        remark = "Zły wynik."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Wynik średni."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Brawo, świetny wynik."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //dane do wyswitlenia w podsumowaniu
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//restart gry
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//zamkniecie podsumowania	
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}