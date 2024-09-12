const questions = [
    {
    question: "Jakim typem danych w Javie jest „boolean”?",
    optionA: "Typ logiczny",
    optionB: "Typ zmiennoprzecinkowy",
    optionC: "Typ całkowity",
    optionD: "Typ referencyjny",
    correctOption: "optionA"
	},

    {
    question: "Jaki typ danych w Javie jest używany do przechowywania tekstu?",
    optionA: "char",
    optionB: "String",
    optionC: "boolean",
    optionD: "int",
    correctOption: "optionB"
	},
    {
    "question": "Jakie operacje można wykonać na HashSet w Javie?",
    "optionA": "Dodawanie, usuwanie, sprawdzanie unikalności",
    "optionB": "Sortowanie, usuwanie, dodawanie",
    "optionC": "Dodawanie, usuwanie, sortowanie",
    "optionD": "Dodawanie, usuwanie, klonowanie",
    "correctOption": "optionA"
	},

    {
    "question": "Jakie wyrażenie służy do deklaracji tablicy o rozmiarze 5 w C++?",
    "optionA": "int arr[] = new int[5];",
    "optionB": "int arr[5];",
    "optionC": "int arr(5);",
    "optionD": "int arr[5] = {0};",
    "correctOption": "optionB"
	},

    {
    "question": "Jakie słowo kluczowe jest używane w Javie do wykonania kodu, gdy żaden z wcześniejszych warunków w instrukcjach if i else if nie jest spełniony?",
    "optionA": "else",
    "optionB": "continue",
    "optionC": "break",
    "optionD": "return",
    "correctOption": "optionA"
	},

   {
    "question": "Jaką rolę pełni iterator w kolekcji w Javie?",
    "optionA": "Usuwa elementy z kolekcji",
    "optionB": "Dodaje nowe elementy do kolekcji",
    "optionC": "Pozwala na iterację po elementach kolekcji",
    "optionD": "Sortuje elementy w kolekcji",
    "correctOption": "optionC"
	},

    {
    "question": "Jakie są różnice między zmiennymi globalnymi a lokalnymi w Javie?",
    "optionA": "Globalne są dostępne w całym programie, lokalne mają ograniczony zakres",
    "optionB": "Globalne mają ograniczony zakres, lokalne są dostępne w całym programie",
    "optionC": "Globalne są zawsze zmiennymi statycznymi, lokalne nie",
    "optionD": "Globalne są dostępne tylko w metodach, lokalne w całym programie",
    "correctOption": "optionA"
	},

    {
    "question": "Jaki jest warunek bazowy w metodzie rekurencyjnej <code>silnia</code> w podanym przykładzie? Przykład: <pre>if (n == 0) { return 1; }</pre>",
    "optionA": "n == 0",
    "optionB": "n == 1",
    "optionC": "n == 5",
    "optionD": "n == -1",
    "correctOption": "optionA"
	},

    {
    "question": "W jaki sposób prymitywne typy danych są przekazywane do metod w Javie?",
    "optionA": "Przez referencję",
    "optionB": "Przez wartość",
    "optionC": "Przez wskaźnik",
    "optionD": "Jest to zależne od typu danych",
    "correctOption": "optionB"
	},

    {
    question: "Co to jest klasa w Javie?",
    optionA: "Klasa to szablon do tworzenia obiektów, zawierający dane i metody.",
    optionB: "Klasa to obiekt zawierający dane i metody.",
    optionC: "Klasa to zmienna, która przechowuje metody.",
    optionD: "Klasa to konstruktor obiektów.",
    correctOption: "optionA"
	},
	
    {
    question: "Jakie są poziomy dostępu dla metod i atrybutów w Javie?",
    optionA: "Publiczny, prywatny, chroniony.",
    optionB: "Globalny, lokalny, prywatny.",
    optionC: "Prywatny, statyczny, finalny.",
    optionD: "Publiczny, finalny, statyczny.",
    correctOption: "optionA"
	},

    {
    question: "Jak definiuje się przestrzeń nazw w Javie?",
    optionA: "package nazwaPrzestrzeni;",
    optionB: "import nazwaPrzestrzeni;",
    optionC: "namespace nazwaPrzestrzeni;",
    optionD: "using nazwaPrzestrzeni;",
    correctOption: "optionA"
	},


    {
    question: "Jakie słowo kluczowe używane jest do definiowania modułu w Javie?",
    optionA: "module",
    optionB: "package",
    optionC: "import",
    optionD: "require",
    correctOption: "optionA"
	},

    {
    question: "Jakie klasy są używane do odczytywania i zapisywania danych w plikach w Javie?",
    optionA: "BufferedReader, BufferedWriter",
    optionB: "FileReader, FileWriter",
    optionC: "FileInputStream, FileOutputStream",
    optionD: "PrintWriter, Scanner",
    correctOption: "optionA"
	},

    {
    question: "Jakie klasy są używane do otwierania i zamykania plików w Javie?",
    optionA: "FileReader, FileWriter, BufferedReader, BufferedWriter",
    optionB: "Scanner, PrintWriter, File, FileInputStream",
    optionC: "DataInputStream, DataOutputStream, ObjectInputStream, ObjectOutputStream",
    optionD: "InputStream, OutputStream, Reader, Writer",
    correctOption: "optionA"
	},

    {
    question: "Jak działa algorytm sortowania szybkim (Quick Sort)?",
    optionA: "Dzieli tablicę na mniejsze podtablice, sortuje je i łączy wyniki",
    optionB: "Sortuje tablicę jeden element na raz, budując posortowaną sekcję",
    optionC: "Ocenia każdy element w tablicy i wstawia go na odpowiednie miejsce",
    optionD: "Odczytuje elementy z pliku i sortuje je na podstawie wartości",
    correctOption: "optionA"
	},

    {
    question: "Jakie są główne różnice między kolejką (Queue) a stosem (Stack)?",
    optionA: "Kolejka działa na zasadzie FIFO, podczas gdy stos działa na zasadzie LIFO",
    optionB: "Kolejka działa na zasadzie LIFO, podczas gdy stos działa na zasadzie FIFO",
    optionC: "Kolejka ma mniejszy czas dostępu do elementów niż stos",
    optionD: "Stos używa funkcji haszujących, a kolejka nie",
    correctOption: "optionA"
	},
	
    {
    question: "Co robi funkcja wyszukiwania binarnego w Javie?",
    optionA: "Przeszukuje posortowaną tablicę poprzez dzielenie jej na pół i porównywanie klucza z elementem środkowym",
    optionB: "Sortuje tablicę przed przeszukiwaniem jej elementów",
    optionC: "Zamienia tablicę na tablicę dynamiczną i przeszukuje jej elementy",
    optionD: "Tworzy nową tablicę z elementami znajdującymi się na parzystych indeksach",
    correctOption: "optionA"
	},	

    {
    question: "Co to są funkcje lambda w Javie?",
    optionA: "Funkcje, które pozwalają na przekazywanie kodu jako argumentów",
    optionB: "Funkcje, które wykonują operacje na tablicach",
    optionC: "Funkcje do obsługi wejścia/wyjścia",
    optionD: "Funkcje, które tworzą obiekty na podstawie danych wejściowych",
    correctOption: "optionA"
	},

    {
    question: "Jakie operacje można wykonać za pomocą Stream API?",
    optionA: "Mapowanie i Filtrowanie",
    optionB: "Sortowanie i Szukanie",
    optionC: "Łączenie i Rozdzielanie",
    optionD: "Przeszukiwanie i Zmienianie",
    correctOption: "optionA"
	},

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