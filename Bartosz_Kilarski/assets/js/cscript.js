const questions = [
    {
    "question": "Czym jest C++?",
    "optionA": "Językiem skryptowym",
    "optionB": "Językiem programowania niskiego poziomu",
    "optionC": "Językiem programowania specjalizującym się w bazach danych",
    "optionD": "Językiem programowania ogólnego przeznaczenia wspierającym programowanie obiektowe",
    "correctOption": "optionD"
	},
	{

        "question": "Który z poniższych typów danych w C++ służy do przechowywania liczb zmiennoprzecinkowych?",
    "optionA": "int",
    "optionB": "float",
    "optionC": "char",
    "optionD": "string",
    "correctOption": "optionB"
	},

    {
    "question": "Która struktura danych w C++ umożliwia przechowywanie par klucz-wartość?",
    "optionA": "Wektor",
    "optionB": "Mapa",
    "optionC": "Lista",
    "optionD": "Tablica",
    "correctOption": "optionB"
	},

    {
    "question": "Która struktura danych w C++ przechowuje unikalne elementy bez duplikatów?",
    "optionA": "Tablice",
    "optionB": "Zbiory",
    "optionC": "Listy",
    "optionD": "Napisy",
    "correctOption": "optionB"
	},

    {
    "question": "Która instrukcja w C++ przerywa działanie pętli?",
    "optionA": "continue",
    "optionB": "return",
    "optionC": "break",
    "optionD": "exit",
    "correctOption": "optionC"
	},

    {
    "question": "Która z poniższych pętli w C++ iteruje do momentu, aż spełniony zostanie określony warunek logiczny?",
    "optionA": "for",
    "optionB": "while",
    "optionC": "do-while",
    "optionD": "foreach",
    "correctOption": "optionB"
	},

    {
    question: "Co to jest przeciążanie funkcji w C++?",
    optionA: "Definiowanie funkcji o różnych nazwach",
    optionB: "Definiowanie funkcji o tej samej nazwie z różnymi parametrami",
    optionC: "Definiowanie funkcji z różnymi typami danych",
    optionD: "Definiowanie funkcji tylko w nagłówkach",
    correctOption: "optionB"
	},
    {
    question: "Gdzie w C++ definiujemy funkcje?",
    optionA: "Tylko w funkcji main",
    optionB: "Przed funkcją main lub w nagłówkach",
    optionC: "Wewnątrz funkcji main",
    optionD: "W pliku źródłowym bez nagłówków",
    correctOption: "optionB"
	},

    {
    question: "Co to jest klasa w C++?",
    optionA: "Szablon do tworzenia obiektów, zawierający atrybuty i metody",
    optionB: "Metoda do wywołania w funkcji main",
    optionC: "Funkcja do inicjalizacji obiektów",
    optionD: "Typ zmiennej lokalnej",
    correctOption: "optionA"
	},


    {
    question: "Jakie struktury danych są implementowane przy użyciu `queue` i `stack`?",
    optionA: "Tablica i lista",
    optionB: "Kolejka i stos",
    optionC: "Drzewo i graf",
    optionD: "Hasz tabela i mapa",
    correctOption: "optionB"
	},
	
    {
    question: "Jakie są główne zastosowania algorytmów sortowania?",
    optionA: "Optymalizacja pamięci",
    optionB: "Wyszukiwanie danych",
    optionC: "Przechowywanie danych",
    optionD: "Organizacja i uporządkowanie danych",
    correctOption: "optionD"
	},

    {
    question: "Co umożliwia dziedziczenie w C++?",
    optionA: "Tworzenie nowych klas na podstawie istniejących klas",
    optionB: "Tworzenie zmiennych globalnych",
    optionC: "Wywoływanie metod w funkcji main",
    optionD: "Zmiana typów danych",
    correctOption: "optionA"
	},


    {
    question: "Jakie są podstawowe pliki w module C++?",
    optionA: "Tylko plik źródłowy",
    optionB: "Tylko plik nagłówkowy",
    optionC: "Plik nagłówkowy (.h) i plik źródłowy (.cpp)",
    optionD: "Plik nagłówkowy i plik dokumentacji",
    correctOption: "optionC"
	},

    {
    question: "Do czego służą przestrzenie nazw (namespace) w C++?",
    optionA: "Do organizowania kodu i unikania konfliktów nazw",
    optionB: "Do definiowania funkcji matematycznych",
    optionC: "Do zarządzania pamięcią",
    optionD: "Do optymalizacji kodu",
    correctOption: "optionA"
	},

    {
    question: "Jakie klasy są używane w C++ do pracy z plikami do odczytu i zapisu?",
    optionA: "ifstream i ofstream",
    optionB: "fstream i ifstream",
    optionC: "ofstream i fstream",
    optionD: "ifstream i fstream",
    correctOption: "optionA"
	},

    {
    question: "Na czym polega technika RAII (Resource Acquisition Is Initialization) w kontekście zarządzania plikami w C++?",
    optionA: "Zasoby są przydzielane przy inicjalizacji i zwalniane przy niszczeniu obiektów",
    optionB: "Zasoby są przydzielane i zwalniane ręcznie przez programistę",
    optionC: "Zasoby są przydzielane tylko podczas tworzenia obiektów, ale muszą być zwalniane osobno",
    optionD: "Technika RAII nie jest stosowana do zarządzania plikami",
    correctOption: "optionA"
	},

    {
    question: "Do czego służą funkcje lambda w C++?",
    optionA: "Do tworzenia nazwanych funkcji",
    optionB: "Do przechowywania funkcji w zmiennych",
    optionC: "Do wywoływania funkcji w różnych miejscach kodu",
    optionD: "Do definiowania funkcji bez nazwy i używania ich jako argumentów",
    correctOption: "optionD"
	},
	
    {
    question: "Co robi funkcja `transform()` w algorytmach STL?",
    optionA: "Sortuje elementy kontenera",
    optionB: "Wypisuje elementy kontenera",
    optionC: "Przekształca elementy kontenera według funkcji",
    optionD: "Usuwa elementy kontenera",
    correctOption: "optionC"
	},

    {
    question: "Jakie są podstawowe pojęcia związane z zarządzaniem pamięcią w C++?",
    optionA: "Wskaźniki, referencje, dynamiczna alokacja pamięci, smart wskaźniki",
    optionB: "Funkcje, klasy, przestrzenie nazw, operatory",
    optionC: "Tablice, zmienne globalne, zmienne lokalne, wskaźniki",
    optionD: "Kolekcje, wyjątki, struktury danych, algorytmy",
    correctOption: "optionA"
	},

    {
    question: "Jakie operatory są używane do dynamicznej alokacji i zwalniania pamięci w C++?",
    optionA: "malloc() i free()",
    optionB: "new i delete",
    optionC: "alloc() i dealloc()",
    optionD: "reserve() i release()",
    correctOption: "optionB"
	}

]


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