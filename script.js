const questions = [
    {
        type: "options",
        topic: "Слитное и раздельное написание НЕ",
        simple: "Если слово без «НЕ» не употребляется (ненавидеть, негодовать), пишется слитно. Если есть противопоставление (не друг, а враг) — раздельно.",
        theory: "НЕ пишется слитно, если слово без НЕ не используется. Также слитно, если можно подобрать синоним. Раздельно — если есть противопоставление с союзом А.",
        example: "Ненавидеть, невесёлый (грустный). Не весёлый, а грустный.",
        glossary: [
            { term: "Противопоставление", def: "Это когда во второй части предложения есть союз «А» или «НО», который отрицает первую часть. Например: «Он не умный, А глупый»." }
        ],
        question: "Выбери ВСЕ варианты, где НЕ пишется СЛИТНО:",
        options: ["(не)навидеть", "(не)весёлый", "(не)друг, а враг", "(не)годовать"],
        correctIndexes: [0, 1, 3],
        explanation: "Слитно: «ненавидеть», «негодовать», «невесёлый». Раздельно: «не друг, а враг»."
    },
    {
        type: "options",
        topic: "Слитное и раздельное написание НЕ",
        simple: "Если слово можно заменить синонимом без НЕ — пишем слитно. Если есть слова «далеко», «вовсе», «ничуть» — раздельно.",
        theory: "НЕ пишется раздельно, если есть слова, усиливающие отрицание: далеко не, вовсе не, ничуть не, отнюдь не.",
        example: "Он вовсе не умный. Это далеко не красивый поступок.",
        glossary: [
            { term: "Усиление отрицания", def: "Слова-магниты, которые усиливают «НЕ». Если видишь «далеко не», «вовсе не», «ничуть не» — пиши раздельно." }
        ],
        question: "В каком предложении НЕ пишется РАЗДЕЛЬНО?",
        options: ["Он (не)умный, а глупый.", "Он (не)умный человек.", "Это (не)правда, а ложь.", "Он (не)ряха."],
        correctIndexes: [0, 2],
        explanation: "Раздельно: «не умный, а глупый», «не правда, а ложь»."
    },
    {
        type: "options",
        topic: "Разделительный Ъ и Ь",
        simple: "Ъ пишется после приставок на согласную перед Е, Ё, Ю, Я. Ь пишется в корне перед Е, Ё, Ю, Я, И.",
        theory: "Разделительный Ъ пишется после приставок. Разделительный Ь пишется в корне.",
        example: "Съел, объявление. Вьюга, пью.",
        glossary: [
            { term: "Приставка", def: "Часть слова перед корнем. Например, в слове «СЪел» приставка С-, а корень -ЕЛ-." },
            { term: "Корень", def: "Главная часть слова. В слове «вЬюга» корень -ВЬЮГ-." }
        ],
        question: "Выбери ВСЕ слова, где пропущен разделительный Ъ:",
        options: ["с_ел", "в_юга", "об_ём", "л_ёт"],
        correctIndexes: [0, 2],
        explanation: "Ъ: СЪел, обЪём. Ь: вЬюга, лЬёт."
    },
    {
        type: "options",
        topic: "Правописание Н и НН",
        simple: "В прилагательных, образованных от существительных, пишется Н, если нет суффиксов -ОНН-, -ЕНН-. Но есть слова-исключения.",
        theory: "НН пишется в прилагательных с суффиксами -ОНН-, -ЕНН- и в исключениях: стеклянный, оловянный, деревянный.",
        example: "Стеклянный шар, кожаный портфель.",
        glossary: [
            { term: "Отымённое прилагательное", def: "Прилагательное, образованное от существительного. Например: туман -> туманный, кожа -> кожаный." },
            { term: "Слова-исключения", def: "Слова, которые не подчиняются правилу. Их надо просто запомнить: стеклянный, оловянный, деревянный." }
        ],
        question: "Выбери ВСЕ слова, где пишется НН:",
        options: ["кожа_ый", "деревя_ый", "серебря_ый", "стекля_ый"],
        correctIndexes: [1, 3],
        explanation: "«Деревянный» и «стеклянный» — исключения."
    },
    {
        type: "options",
        topic: "Сложносочинённое предложение (ССП)",
        simple: "В ССП две равноправные части. Запятая ставится, если нет общего второстепенного члена.",
        theory: "Запятая ставится между частями ССП, если они не соединены общим второстепенным членом.",
        example: "Ветер стих, и на небе показалось солнце. В саду пахло яблоками и пели птицы.",
        glossary: [
            { term: "Грамматическая основа", def: "Подлежащее + сказуемое. В предложении «Ветер стих» основа — «ветер стих»." },
            { term: "Общий второстепенный член", def: "Слово, которое относится сразу к двум частям. Например, «В саду» (где?) поют птицы И (где?) цветут яблони. Если он есть — запятая не нужна." }
        ],
        question: "В каком предложении НУЖНА запятая перед союзом И?",
        options: ["В саду поют птицы и цветут яблони.", "Наступил вечер и на небе зажглись звезды.", "На столе лежат книги и тетради.", "Он устал и лёг спать."],
        correctIndexes: [1],
        explanation: "«Наступил вечер, и на небе зажглись звёзды» — две основы."
    },
    {
        type: "input",
        topic: "Сложноподчинённое предложение (СПП)",
        simple: "Придаточная часть всегда выделяется запятыми. Если она внутри главной — с двух сторон.",
        theory: "Придаточное с союзом «который» выделяется запятыми с двух сторон.",
        example: "Книга, которую я прочитал вчера, оказалась интересной.",
        glossary: [
            { term: "Придаточная часть", def: "Зависимая часть предложения, которая прицепляется к главной с помощью союзов (который, что, если)." }
        ],
        question: "Расставь запятые. Напиши цифры (без пробелов).\n\n«Солнце (1) уже село (2) и на небе (3) которое было усыпано звездами (4) показалась луна.»",
        correctAnswer: ["234"],
        explanation: "Запятые: 2, 3, 4."
    },
    {
        type: "options",
        topic: "Обособление причастного оборота",
        simple: "Причастный оборот выделяется запятыми, ТОЛЬКО если стоит ПОСЛЕ определяемого слова.",
        theory: "Причастный оборот обособляется, если стоит после определяемого слова.",
        example: "Мальчик, читающий книгу, сидел на диване.",
        glossary: [
            { term: "Причастие", def: "Слово, которое отвечает на вопрос «какой?» и обозначает действие. Например: читающий, играющий." },
            { term: "Причастный оборот", def: "Причастие вместе с зависимыми словами. Например: «читающий книгу»." },
            { term: "Определяемое слово", def: "Главное слово, к которому относится оборот. В примере «мальчик, читающий книгу» определяемое слово — мальчик." }
        ],
        question: "В каком предложении запятая НЕ нужна?",
        options: ["Мальчик, читающий книгу, сидел на диване.", "Читающий книгу мальчик сидел на диване.", "Солнце, ярко светившее весь день, начало садиться.", "Деревья, покрытые снегом, стояли тихо."],
        correctIndexes: [1],
        explanation: "В варианте «Читающий книгу мальчик» оборот стоит ДО слова."
    },
    {
        type: "options",
        topic: "Правописание приставок ПРЕ- и ПРИ-",
        simple: "ПРИ- означает приближение, присоединение, близость. ПРЕ- означает очень или пере-.",
        theory: "ПРИ- пишется в значении приближения, присоединения. ПРЕ- пишется в значении «очень» или «пере-».",
        example: "Пришкольный участок, преградить путь.",
        glossary: [
            { term: "Приближение", def: "Приехать, приплыть, прибежать (приближение к чему-то)." },
            { term: "Присоединение", def: "Пришить, приклеить, прибить (присоединить к чему-то)." }
        ],
        question: "В каком слове приставка имеет значение «близость»?",
        options: ["пр_школьный", "пр_градить", "пр_красный", "пр_увеличить"],
        correctIndexes: [0],
        explanation: "«Пришкольный» — рядом со школой."
    },
    {
        type: "options",
        topic: "Тире в БСП",
        simple: "В бессоюзном предложении ставится тире, если вторая часть противопоставляется первой.",
        theory: "В БСП ставится тире, если содержание частей противопоставляется.",
        example: "Лето припасает — зима поедает.",
        glossary: [
            { term: "БСП", def: "Бессоюзное сложное предложение. В нём нет союзов (и, но, а), части соединены только по смыслу." }
        ],
        question: "В каком предложении нужно поставить ТИРЕ на месте пропуска (__)?",
        options: ["Солнце село __ и стало прохладно.", "Лето припасает __ зима поедает.", "Я знаю __ ты придешь.", "Он не пришел __ потому что заболел."],
        correctIndexes: [1],
        explanation: "«Лето припасает — зима поедает» — противопоставление."
    },
    {
        type: "options",
        topic: "Обособление вводных слов",
        simple: "Вводные слова (к счастью, наверное) можно убрать. Они всегда выделяются запятыми.",
        theory: "Вводные слова выражают отношение говорящего. ВСЕГДА выделяются запятыми.",
        example: "Погода, к счастью, улучшилась.",
        glossary: [
            { term: "Вводное слово", def: "Слово, которое выражает эмоцию или уверенность. Его можно убрать, и предложение не сломается. Например: «Погода, К СЧАСТЬЮ, улучшилась»." }
        ],
        question: "Выбери предложение, где запятые расставлены ВЕРНО:",
        options: ["Он, к счастью, остался жив.", "Он к счастью остался жив.", "Он к счастью, остался жив.", "Он, к счастью остался жив."],
        correctIndexes: [0],
        explanation: "«К счастью» — вводное слово."
    },
    {
        type: "input",
        topic: "Чередующиеся гласные",
        simple: "Корни -РАСТ-/-РОС-: перед СТ и Щ пишем А (растение), перед С пишем О (вырос).",
        theory: "В корнях -раст-/-ращ-/-рос- пишется А перед СТ и Щ.",
        example: "Вырос красивый цветок. Растение тянется к солнцу.",
        glossary: [
            { term: "Чередование", def: "Это когда буквы в корне слова меняются по определённым правилам. Например: растение / вырос." }
        ],
        question: "Вставь букву. Как пишется слово: р_стение? Напиши целиком.",
        correctAnswer: ["растение"],
        explanation: "Перед СТ пишем А."
    },
    {
        type: "input",
        topic: "Правописание приставок",
        simple: "ПРИ- = близость, присоединение. ПРЕ- = очень, пере-.",
        theory: "ПРИ- пишется в значении близости. ПРЕ- — в значении «очень».",
        example: "Пришкольный участок, прекрасный день.",
        glossary: [],
        question: "Вставь букву. Как пишется слово: пр_школьный? Напиши целиком.",
        correctAnswer: ["пришкольный"],
        explanation: "Приставка ПРИ- (близость)."
    },
    {
        type: "input",
        topic: "Однородные члены",
        simple: "Если союз «и» повторяется, перед каждым «и» ставится запятая.",
        theory: "При повторяющихся союзах запятая ставится перед всеми союзами, начиная со второго.",
        example: "В саду росли и яблони, и груши.",
        glossary: [
            { term: "Однородные члены", def: "Слова, которые отвечают на один вопрос и делают одно действие. Например: «и яблони, И груши»." }
        ],
        question: "Расставь запятые. Напиши цифры без пробелов.\n\n«В лесу (1) и на лугу (2) и в поле (3) пахло весной.»",
        correctAnswer: ["2"],
        explanation: "Запятая перед вторым союзом «и» (2)."
    },
    {
        type: "input",
        topic: "Причастный оборот",
        simple: "Причастный оборот выделяется запятыми, ТОЛЬКО если стоит ПОСЛЕ определяемого слова.",
        theory: "Причастный оборот обособляется, если стоит после определяемого слова.",
        example: "Мальчик, читающий книгу, сидел на диване.",
        glossary: [],
        question: "Расставь запятые. Напиши цифры без пробелов.\n\n«Дети (1) игравшие во дворе (2) не хотели идти домой.»",
        correctAnswer: ["12"],
        explanation: "Оборот после слова «дети» (1 и 2)."
    },
    {
        type: "input",
        topic: "Слитное написание НЕ",
        simple: "Если слово без «НЕ» не употребляется — пиши слитно.",
        theory: "НЕ пишется слитно, если слово без НЕ не используется.",
        example: "Ненавидеть врага.",
        glossary: [],
        question: "Как пишется слово: (не)навидеть? Напиши целиком.",
        correctAnswer: ["ненавидеть"],
        explanation: "Без НЕ не употребляется."
    }
];


// ==========================================================
// 🎲 ГЕНЕРАТОР СЛУЧАЙНЫХ СЛОВ (АУДИОДИКТАНТ)
// ==========================================================

const allWords = [
    "авангард", "аннотация", "ватрушка", "винегрет", "виновный", 
    "виртуальный", "галерея", "гармония", "гарнизон", "горизонт", 
    "декорация", "диапазон", "дирижёр", "интеллект", "калитка", 
    "канонада", "кардинальный", "карикатура", "карьера", "кафтан", 
    "коварный", "колонна", "комбинат", "комфортный", "менталитет", 
    "меценатство", "наваждение", "новелла", "обаяние", "окаймлять", 
    "обоняние", "отразить", "панорама", "палисадник", "перила", 
    "подражание", "поколение", "привилегия", "приоритет", "реставрация", 
    "рецензия", "реалистичный", "священный", "симптомы", "смятение", 
    "спартакиада", "стипендия", "утрамбовать"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Перемешиваем ВСЕ слова и берем 5 случайных
const randomWords = shuffleArray([...allWords]).slice(0, 5);

// Добавляем эти 5 слов в массив вопросов
randomWords.forEach(word => {
    questions.push({
        type: "audio",
        topic: "Словарные слова (ЕГЭ)",
        simple: "Нажми на кнопку 'Прослушать', чтобы услышать слово. Впиши его правильно.",
        theory: "В этом слове часто делают ошибку.",
        example: "Слово из списка ЕГЭ.",
        glossary: [],
        question: "Прослушай слово и впиши его в поле.",
        wordToSpeak: word,
        correctAnswer: [word],
        explanation: "Правильное написание: " + word
    });
});

// ==========================================================
// ИНИЦИАЛИЗАЦИЯ ИГРЫ
// ==========================================================

let currentQuestion = 0;
let score = 0;
let answered = false;
let mistakes = [];

let shuffledQuestions = shuffleArray([...questions]);

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const inputContainer = document.getElementById('inputContainer');
const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const explanationBox = document.getElementById('explanationBox');
const explanationText = document.getElementById('explanationText');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const theoryTitle = document.getElementById('theoryTitle');
const simpleText = document.getElementById('simpleText');
const theoryText = document.getElementById('theoryText');
const exampleText = document.getElementById('exampleText');
const exampleBox = document.getElementById('exampleBox');
const glossaryBox = document.getElementById('glossaryBox');
const quizContent = document.getElementById('quizContent');
const resultsScreen = document.getElementById('resultsScreen');
const tooltipBox = document.getElementById('tooltipBox');
const tooltipTitle = document.getElementById('tooltipTitle');
const tooltipText = document.getElementById('tooltipText');
const closeTooltip = document.getElementById('closeTooltip');
const audioControl = document.getElementById('audioControl');

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

closeTooltip.addEventListener('click', () => tooltipBox.classList.remove('show'));

function loadQuestion() {
    answered = false;
    const q = shuffledQuestions[currentQuestion];
    
    progressText.textContent = `Вопрос ${currentQuestion + 1} из ${shuffledQuestions.length}`;
    progressBar.style.width = `${((currentQuestion) / shuffledQuestions.length) * 100}%`;

    theoryTitle.textContent = q.topic;
    simpleText.textContent = q.simple;
    theoryText.textContent = q.theory;
    
    if (q.example) {
        exampleBox.style.display = 'block';
        exampleText.textContent = q.example;
    } else {
        exampleBox.style.display = 'none';
    }

    glossaryBox.innerHTML = '';
    tooltipBox.classList.remove('show');
    if (q.glossary && q.glossary.length > 0) {
        q.glossary.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'glossary-term';
            btn.textContent = `❓ ${item.term}`;
            btn.onclick = () => {
                tooltipTitle.textContent = item.term;
                tooltipText.textContent = item.def;
                tooltipBox.classList.add('show');
            };
            glossaryBox.appendChild(btn);
        });
    }

    questionText.innerHTML = q.question.replace(/\n/g, '<br>');
    explanationBox.classList.remove('show');
    nextBtn.classList.remove('show');
    
    optionsContainer.style.display = 'none';
    inputContainer.style.display = 'none';
    optionsContainer.innerHTML = '';
    audioControl.style.display = 'none';
    
    textInput.value = '';
    textInput.classList.remove('correct', 'wrong');
    textInput.disabled = false;
    submitBtn.disabled = false;
    submitBtn.style.display = 'block';

    const checkOptionsBtn = document.getElementById('checkOptionsBtn');

    if (q.type === 'options') {
        optionsContainer.style.display = 'flex';
        nextBtn.textContent = currentQuestion === shuffledQuestions.length - 1 ? 'Узнать результат 🎉' : 'Следующий вопрос →';
        
        if (q.correctIndexes.length > 1) {
            checkOptionsBtn.style.display = 'block';
            checkOptionsBtn.disabled = false;
        } else {
            checkOptionsBtn.style.display = 'none';
        }

        let selectedOptions = [];

        let optionsList = q.options.map((text, index) => ({
            text: text,
            isCorrect: q.correctIndexes.includes(index),
            originalIndex: index
        }));
        optionsList = shuffleArray(optionsList);

        optionsList.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            
            btn.addEventListener('click', () => {
                if (answered) return;

                if (q.correctIndexes.length === 1) {
                    handleOptionClick(btn, opt.isCorrect, q);
                } else {
                    if (btn.classList.contains('selected')) {
                        btn.classList.remove('selected');
                        selectedOptions = selectedOptions.filter(i => i !== opt.originalIndex);
                    } else {
                        btn.classList.add('selected');
                        selectedOptions.push(opt.originalIndex);
                    }
                }
            });
            optionsContainer.appendChild(btn);
        });

        checkOptionsBtn.onclick = () => {
            if (answered) return;
            answered = true;
            checkOptionsBtn.disabled = true;
            checkOptionsBtn.style.display = 'none';

            const allButtons = document.querySelectorAll('.option-btn');
            allButtons.forEach(b => b.classList.add('disabled'));

            const isCorrect = (selectedOptions.length === q.correctIndexes.length) && 
                              selectedOptions.every(val => q.correctIndexes.includes(val));

            if (isCorrect) {
                allButtons.forEach(b => {
                    const idx = q.options.indexOf(b.textContent);
                    if (q.correctIndexes.includes(idx)) b.classList.add('correct');
                });
                score++;
                explanationText.textContent = "✅ Верно! " + q.explanation;
                explanationBox.className = 'explanation show correct-bg';
            } else {
                allButtons.forEach(b => {
                    const idx = q.options.indexOf(b.textContent);
                    if (selectedOptions.includes(idx) && !q.correctIndexes.includes(idx)) b.classList.add('wrong');
                    if (q.correctIndexes.includes(idx)) b.classList.add('correct');
                });
                mistakes.push(q.topic);
                explanationText.textContent = "❌ Ошибка. " + q.explanation;
                explanationBox.className = 'explanation show wrong-bg';
            }
            showNextBtn();
        };
    } else if (q.type === 'input') {
        inputContainer.style.display = 'flex';
        nextBtn.textContent = currentQuestion === shuffledQuestions.length - 1 ? 'Узнать результат 🎉' : 'Следующий вопрос →';
        textInput.focus();
    } else if (q.type === 'audio') {
        inputContainer.style.display = 'flex';
        audioControl.style.display = 'block';
        nextBtn.textContent = currentQuestion === shuffledQuestions.length - 1 ? 'Узнать результат 🎉' : 'Следующий вопрос →';
        textInput.focus();
    }
}

function handleOptionClick(btn, isCorrect, q) {
    if (answered) return;
    answered = true;

    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(b => b.classList.add('disabled'));

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
        explanationText.textContent = "✅ Верно! " + q.explanation;
        explanationBox.className = 'explanation show correct-bg';
    } else {
        btn.classList.add('wrong');
        mistakes.push(q.topic);
        allButtons.forEach((b) => {
            const originalIndex = q.options.indexOf(b.textContent);
            if (q.correctIndexes.includes(originalIndex)) {
                b.classList.add('correct');
            }
        });
        explanationText.textContent = "❌ Ошибка. " + q.explanation;
        explanationBox.className = 'explanation show wrong-bg';
    }
    showNextBtn();
}

function handleInputSubmit() {
    if (answered) return;
    const q = shuffledQuestions[currentQuestion];
    
    answered = true;
    textInput.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.display = 'none';
    
    let userAnswer = textInput.value.trim().toLowerCase().replace(/ё/g, 'е');
    let isCorrectInput = q.correctAnswer.some(ans => ans.toLowerCase().replace(/ё/g, 'е') === userAnswer);

    if (isCorrectInput) {
        textInput.classList.add('correct');
        score++;
        explanationText.textContent = "✅ Верно! " + q.explanation;
        explanationBox.className = 'explanation show correct-bg';
    } else {
        textInput.classList.add('wrong');
        mistakes.push(q.topic);
        explanationText.textContent = "❌ Ошибка. Правильный ответ: " + q.correctAnswer[0] + ". " + q.explanation;
        explanationBox.className = 'explanation show wrong-bg';
    }
    showNextBtn();
}

function showNextBtn() {
    nextBtn.classList.add('show');
    if (currentQuestion === shuffledQuestions.length - 1) progressBar.style.width = '100%';
}

document.getElementById('playAudioBtn').addEventListener('click', () => {
    const q = shuffledQuestions[currentQuestion];
    if (q && q.wordToSpeak) {
        const utterance = new SpeechSynthesisUtterance(q.wordToSpeak);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
});

submitBtn.addEventListener('click', handleInputSubmit);
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleInputSubmit();
});

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizContent.style.display = 'none';
    resultsScreen.style.display = 'block';
    
    let total = shuffledQuestions.length;
    let percent = (score / total) * 100;
    let grade = 2;

    if (percent >= 85) grade = 5;
    else if (percent >= 65) grade = 4;
    else if (percent >= 40) grade = 3;
    else grade = 2;

    document.getElementById('finalScore').textContent = `${score}/${total}`;
    
    const gradeEl = document.getElementById('finalGrade');
    gradeEl.textContent = grade;
    gradeEl.className = 'grade-mark';
    if (grade === 5) gradeEl.classList.add('grade-5');
    if (grade === 4) gradeEl.classList.add('grade-4');
    if (grade === 3) gradeEl.classList.add('grade-3');
    if (grade === 2) gradeEl.classList.add('grade-2');
    
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = '';
    
    if (mistakes.length === 0) {
        feedbackList.innerHTML = '<li>Идеально! Ошибок нет. 🏆</li>';
    } else {
        const uniqueMistakes = [...new Set(mistakes)];
        uniqueMistakes.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = `Повтори тему: ${topic}`;
            feedbackList.appendChild(li);
        });
    }
}

loadQuestion();