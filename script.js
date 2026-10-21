const questions = [
    { type: "options", topic: "Слитное и раздельное написание НЕ", simple: "Если слово без «НЕ» не употребляется (ненавидеть), пишется слитно. Если есть противопоставление (не друг, а враг) — раздельно.", theory: "НЕ пишется слитно, если слово без НЕ не используется. Раздельно — если есть противопоставление с союзом А.", example: "Ненавидеть. Не друг, а враг.", glossary: [{ term: "Противопоставление", def: "Союз А или НО, который отрицает первую часть." }, { term: "Употребляется", def: "Используется в речи. Если убрать НЕ из слова «ненавидеть», получится «навидеть» — такого слова нет." }], question: "Выбери ВСЕ варианты, где НЕ пишется СЛИТНО:", options: ["(не)навидеть", "(не)весёлый", "(не)друг, а враг", "(не)годовать"], correctIndexes: [0, 1, 3], explanation: "Слитно: «ненавидеть», «негодовать», «невесёлый». Раздельно: «не друг, а враг»." },
    { type: "options", topic: "Слитное и раздельное написание НЕ", simple: "Если слово можно заменить синонимом без НЕ — пишем слитно. Если есть слова «далеко», «вовсе» — раздельно.", theory: "НЕ пишется раздельно, если есть слова, усиливающие отрицание: далеко не, вовсе не.", example: "Он вовсе не умный.", glossary: [{ term: "Синоним", def: "Слово, близкое по смыслу. Синоним к «невесёлый» — «грустный»." }, { term: "Усиление отрицания", def: "Слова «далеко не», «вовсе не», «ничуть не». Если они есть, пишем раздельно." }], question: "В каком предложении НЕ пишется РАЗДЕЛЬНО?", options: ["Он (не)умный, а глупый.", "Он (не)умный человек.", "Это (не)правда, а ложь.", "Он (не)ряха."], correctIndexes: [0, 2], explanation: "Раздельно: «не умный, а глупый», «не правда, а ложь»." },
    { type: "options", topic: "Разделительный Ъ и Ь", simple: "Ъ пишется после приставок на согласную перед Е, Ё, Ю, Я. Ь пишется в корне.", theory: "Разделительный Ъ пишется после приставок. Разделительный Ь пишется в корне.", example: "Съел, объявление. Вьюга, пью.", glossary: [{ term: "Приставка", def: "Часть слова перед корнем. В слове «СЪел» приставка С-, а корень -ЕЛ-." }, { term: "Корень", def: "Главная часть слова. В слове «вЬюга» корень -ВЬЮГ-." }], question: "Выбери ВСЕ слова, где пропущен разделительный Ъ:", options: ["с_ел", "в_юга", "об_ём", "л_ёт"], correctIndexes: [0, 2], explanation: "Ъ: СЪел, обЪём. Ь: вЬюга, лЬёт." },
    { type: "options", topic: "Правописание Н и НН", simple: "В прилагательных от существительных пишется Н, если нет суффиксов -ОНН-, -ЕНН-. Но есть исключения.", theory: "НН пишется в прилагательных с суффиксами -ОНН-, -ЕНН- и в исключениях: стеклянный, деревянный.", example: "Стеклянный шар, кожаный портфель.", glossary: [{ term: "Суффикс", def: "Часть слова после корня. В слове «лекционный» суффикс -ОНН-." }, { term: "Отымённое прилагательное", def: "Прилагательное, образованное от имени существительного. Например: туман -> туманный." }, { term: "Слова-исключения", def: "Слова, которые не подчиняются правилу. Их надо просто запомнить: стеклянный, оловянный, деревянный." }], question: "Выбери ВСЕ слова, где пишется НН:", options: ["кожа_ый", "деревя_ый", "серебря_ый", "стекля_ый"], correctIndexes: [1, 3], explanation: "«Деревянный» и «стеклянный» — исключения." },
    { type: "options", topic: "Сложносочинённое предложение (ССП)", simple: "В ССП две равноправные части. Запятая ставится, если нет общего второстепенного члена.", theory: "Запятая ставится между частями ССП, если они не соединены общим второстепенным членом.", example: "Ветер стих, и на небе показалось солнце.", glossary: [{ term: "Грамматическая основа", def: "Главные члены: подлежащее (кто?) и сказуемое (что делает?). В предложении «Ветер стих» основа — «ветер стих»." }, { term: "Общий второстепенный член", def: "Слово, относящееся сразу к двум частям. Например: «В саду (где?) поют птицы И (где?) цветут яблони»." }], question: "В каком предложении НУЖНА запятая перед союзом И?", options: ["В саду поют птицы и цветут яблони.", "Наступил вечер и на небе зажглись звезды.", "На столе лежат книги и тетради.", "Он устал и лёг спать."], correctIndexes: [1], explanation: "«Наступил вечер, и на небе зажглись звёзды» — две основы." },
    { type: "input", topic: "Сложноподчинённое предложение (СПП)", simple: "Придаточная часть всегда выделяется запятыми. Если она внутри главной — с двух сторон.", theory: "Придаточное с союзом «который» выделяется запятыми с двух сторон.", example: "Книга, которую я прочитал, оказалась интересной.", glossary: [{ term: "Придаточная часть", def: "Зависимая часть предложения, которая прицепляется к главной с помощью союзов (который, что, если)." }], question: "Расставь запятые. Напиши цифры (без пробелов).\n\n«Солнце (1) уже село (2) и на небе (3) которое было усыпано звездами (4) показалась луна.»", correctAnswer: ["234"], explanation: "Запятые: 2, 3, 4." },
        { 
        type: "options", 
        topic: "Обособление причастного оборота", 
        simple: "Причастный оборот выделяется запятыми, ТОЛЬКО если стоит ПОСЛЕ определяемого слова.", 
        theory: "Причастный оборот обособляется, если стоит после определяемого слова. Если оборот стоит до слова — запятая не ставится.", 
        example: "Мальчик, читающий книгу, сидел на диване.", 
        glossary: [
            { term: "Причастие", def: "Слово, отвечающее на вопрос «какой?» и обозначающее действие (читающий)." },
            { term: "Причастный оборот", def: "Причастие вместе с зависимыми словами («читающий книгу»)." },
            { term: "Определяемое слово", def: "Главное слово, к которому относится оборот («мальчик»)." }
        ], 
        question: "В каком предложении запятая НЕ нужна?", 
        options: [
            "Мальчик, читающий книгу, сидел на диване.", // Запятые верные (оборот после слова)
            "Читающий книгу, мальчик сидел на диване.", // ОШИБКА (оборот до слова, запятая не нужна)
            "Солнце, ярко светившее весь день, начало садиться.", // Запятые верные
            "Деревья, покрытые снегом, стояли тихо." // Запятые верные
        ], 
        correctIndexes: [1], 
        explanation: "В варианте «Читающий книгу, мальчик сидел на диване» причастный оборот «читающий книгу» стоит ДО определяемого слова «мальчик». По правилам, в этом случае запятая НЕ ставится. Во всех остальных вариантах оборот стоит ПОСЛЕ слова, поэтому запятые там нужны." 
    },
        { 
        type: "input", 
        topic: "Правописание приставок ПРЕ- и ПРИ-", 
        simple: "ПРИ- означает приближение, присоединение, близость. ПРЕ- означает очень или пере-.", 
        theory: "ПРИ- пишется в значении приближения, присоединения. ПРЕ- пишется в значении «очень» или «пере-».", 
        example: "Пришкольный участок, прекрасный день.", 
        glossary: [
            { term: "Приближение", def: "Приехать, приплыть, прибежать (приближение к чему-то)." },
            { term: "Присоединение", def: "Пришить, приклеить, прибить (присоединить к чему-то)." }
        ], 
        question: "В каком слове приставка имеет значение «близость»? (Впиши слово)", 
        
        // ВОТ МАГИЯ: Любое слово, начинающееся на "при" (и не являющееся исключением)
        correctAnswer: /^при[а-яё]+$/i, 
        
        explanation: "Правильные ответы: любые слова с приставкой ПРИ- в значении близости (пришкольный, привокзальный, приморский, прибрежный, придорожный, приусадебный и т.д.)." 
    },
    { type: "options", topic: "Тире в БСП", simple: "В бессоюзном предложении ставится тире, если вторая часть противопоставляется первой.", theory: "В БСП ставится тире, если содержание частей противопоставляется.", example: "Лето припасает — зима поедает.", glossary: [{ term: "БСП", def: "Бессоюзное сложное предложение. В нём нет союзов (и, но, а), части соединены только по смыслу." }, { term: "Противопоставление", def: "Когда вторая часть противоречит первой. Здесь можно мысленно вставить союз «А»." }], question: "В каком предложении нужно поставить ТИРЕ на месте пропуска (__)?", options: ["Солнце село __ и стало прохладно.", "Лето припасает __ зима поедает.", "Я знаю __ ты придешь.", "Он не пришел __ потому что заболел."], correctIndexes: [1], explanation: "«Лето припасает — зима поедает» — противопоставление." },
    { type: "options", topic: "Обособление вводных слов", simple: "Вводные слова (к счастью, наверное) можно убрать. Они всегда выделяются запятыми.", theory: "Вводные слова выражают отношение говорящего. ВСЕГДА выделяются запятыми.", example: "Погода, к счастью, улучшилась.", glossary: [{ term: "Вводное слово", def: "Слово, выражающее эмоцию. Его можно убрать, и предложение не сломается." }], question: "Выбери предложение, где запятые расставлены ВЕРНО:", options: ["Он, к счастью, остался жив.", "Он к счастью остался жив.", "Он к счастью, остался жив.", "Он, к счастью остался жив."], correctIndexes: [0], explanation: "«К счастью» — вводное слово." },
    { type: "input", topic: "Чередующиеся гласные", simple: "Корни -РАСТ-/-РОС-: перед СТ и Щ пишем А, перед С пишем О.", theory: "В корнях -раст-/-ращ-/-рос- пишется А перед СТ и Щ.", example: "Вырос цветок. Растение тянется к солнцу.", glossary: [{ term: "Чередование", def: "Когда буквы в корне слова меняются по правилам (растение / вырос)." }], question: "Вставь букву. Как пишется слово: р_стение? Напиши целиком.", correctAnswer: ["растение"], explanation: "Перед СТ пишем А." },
    { type: "input", topic: "Правописание приставок", simple: "ПРИ- = близость, присоединение. ПРЕ- = очень, пере-.", theory: "ПРИ- пишется в значении близости. ПРЕ- — в значении «очень».", example: "Пришкольный участок, прекрасный день.", glossary: [], question: "Вставь букву. Как пишется слово: пр_школьный? Напиши целиком.", correctAnswer: ["пришкольный"], explanation: "Приставка ПРИ- (близость)." },
    { type: "input", topic: "Однородные члены", simple: "Если союз «и» повторяется, перед каждым «и» ставится запятая.", theory: "При повторяющихся союзах запятая ставится перед всеми союзами, начиная со второго.", example: "В саду росли и яблони, и груши.", glossary: [{ term: "Однородные члены", def: "Слова, отвечающие на один вопрос и делающие одно действие («и яблони, И груши»)." }], question: "Расставь запятые. Напиши цифры без пробелов.\n\n«В лесу (1) и на лугу (2) и в поле (3) пахло весной.»", correctAnswer: ["2"], explanation: "Запятая перед вторым союзом «и» (2)." },
    { type: "input", topic: "Причастный оборот", simple: "Причастный оборот выделяется запятыми, ТОЛЬКО если стоит ПОСЛЕ определяемого слова.", theory: "Причастный оборот обособляется, если стоит после определяемого слова.", example: "Мальчик, читающий книгу, сидел на диване.", glossary: [], question: "Расставь запятые. Напиши цифры без пробелов.\n\n«Дети (1) игравшие во дворе (2) не хотели идти домой.»", correctAnswer: ["12"], explanation: "Оборот после слова «дети» (1 и 2)." },
    { type: "input", topic: "Слитное написание НЕ", simple: "Если слово без «НЕ» не употребляется — пиши слитно.", theory: "НЕ пишется слитно, если слово без НЕ не используется.", example: "Ненавидеть врага.", glossary: [], question: "Как пишется слово: (не)навидеть? Напиши целиком.", correctAnswer: ["ненавидеть"], explanation: "Без НЕ не употребляется." },
    { type: "options", topic: "Знаки препинания при обращении", simple: "Обращение — это имя или название того, к кому обращаются. Оно всегда выделяется запятыми.", theory: "Обращение не является членом предложения. Оно выделяется запятыми с одной или двух сторон.", example: "Маша, иди сюда. Я люблю тебя, мама.", glossary: [{ term: "Обращение", def: "Слово, называющее того, к кому обращена речь («Вася», «Дорогая мама»)." }], question: "В каком предложении есть пунктуационная ошибка?", options: ["Ребята, давайте жить дружно!", "Спасибо тебе, родная земля.", "Ты, Петя, молодец.", "Здравствуй осень, золотая."], correctIndexes: [3], explanation: "Правильно: «Здравствуй, осень золотая». Обращение «осень золотая» выделяется запятой." },
        { 
        type: "input", 
        topic: "Правописание Ь после шипящих", 
        simple: "В существительных женского рода 3 склонения после шипящих пишется Ь. В мужском роде — не пишется.", 
        theory: "Мягкий знак после шипящих на конце существительных пишется только в женском роде (мышь). В мужском (мяч) — не пишется.", 
        example: "МышЬ (ж.р.), врач (м.р.).", 
        glossary: [{ term: "Шипящие", def: "Буквы Ж, Ш, Ч, Щ." }], 
        question: "В каком слове нужен мягкий знак (Ь)? Напиши это слово.", 
        
        // ВОТ ТУТ МАГИЯ: Мы используем регулярное выражение вместо списка
        correctAnswer: /^[а-яё]+(ж|ш|ч|щ)ь$/i, 
        
        explanation: "Любое существительное женского рода 3 склонения (мышь, ночь, дочь, печь, рожь, тишь, вещь, помощь, мощь, дичь и т.д.) пишется с мягким знаком на конце." 
    },
    { type: "options", topic: "Правописание корней с чередованием", simple: "В корне -гар-/-гор- без ударения пишется О, под ударением — А.", theory: "Корни с чередованием -гар-/-гор-: под ударением пишется А, без ударения — О.", example: "ЗагАр (под ударением), гОреть (без ударения).", glossary: [], question: "Выбери ВСЕ слова, где пишется О:", options: ["з_гар", "г_релка", "заг_р", "пог_релец"], correctIndexes: [1, 3], explanation: "«Горелка», «погорелец» — без ударения пишем О. «Загар», «загар» — под ударением А." },
        { 
        type: "input", 
        topic: "Слитное/раздельное написание наречий", 
        simple: "Наречия с приставками пишутся слитно, если образованы от существительных с пространственным значением (вверх, вниз, вдаль).", 
        theory: "Наречия, образованные от существительных с пространственным значением, пишутся слитно (вверх, вдаль, вниз).", 
        example: "Смотреть вдаль (слитно).", 
        glossary: [{ term: "Наречие", def: "Часть речи, обозначающая признак действия (как? куда? когда?)." }], 
        question: "В каком слове наречие пишется СЛИТНО? Напиши это слово.", 
        correctAnswer: [
            "вдаль", "вверх", "вниз", "налево", "направо", 
            "слева", "справа", "вперед", "назад", "вбок", 
            "вглубь", "вширь", "ввысь", "издалека", "изнутри", 
            "снаружи", "сначала", "сзади", "вначале", "вконец", 
            "насквозь", "набок", "вовремя", "вволю", "взамен", 
            "взаперти", "вконец", "вкратце", "влево", "вправо", 
            "вскоре", "втрое", "запросто", "зачастую", "наглухо", 
            "наголо", "наедине", "назло", "назубок", "налегке", 
            "намертво", "наотрез", "наперегонки", "наперекор", 
            "напросто", "нараспашку", "наряду", "насилу", "насухо"
        ], 
        explanation: "Слитно пишутся многие наречия с пространственным значением (вдаль, налево, вверх) и другие, образованные от существительных. Главное правило — проверять по словарю." 
    },
        { 
        type: "input", 
        topic: "Правописание -тся/-ться в глаголах", 
        simple: "Если глагол отвечает на вопрос «что делать?» (есть Ь), то пишется -ться. Если «что делает?» (нет Ь), то -тся.", 
        theory: "Мягкий знак в глаголах пишется, если глагол стоит в неопределенной форме (что делать?) — -ться. Если в 3 лице (что делает?) — -тся.", 
        example: "Он (что делает?) учится.", 
        glossary: [], 
        question: "В каком глаголе пишется -ТСЯ (без мягкого знака)? Напиши это слово.", 
        correctAnswer: [
            "учится", "смеется", "нравится", "катится", 
            "пенится", "боится", "ловurтся", "снится", 
            "мчится", "кружится", "торопится", "купается", 
            "просыпается", "улыбается", "занимается", "старается",
            "удивляется", "ошибается", "одевается", "прячется",
            "лечится", "строится", "хвалится", "ругается"
        ], 
        explanation: "Правильные ответы: любые глаголы 3-го лица (что делает?): учится, смеется, катится, боится и т.д. В них нет мягкого знака." 
    }
];

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

const randomWords = shuffleArray([...allWords]).slice(0, 5);

randomWords.forEach(word => {
    questions.push({
        type: "audio",
        topic: "Словарные слова (ОГЭ)",
        simple: "Нажми на кнопку 'Прослушать', чтобы услышать слово. Впиши его правильно.",
        theory: "В этом слове часто делают ошибку.",
        example: "Слово из списка ОГЭ.",
        glossary: [],
        question: "Прослушай слово и впиши его в поле.",
        wordToSpeak: word,
        correctAnswer: [word],
        explanation: "Правильное написание: " + word
    });
});

let currentQuestion = 0;
let answered = false;
let mistakes = [];
let questionStatus = []; 
let shuffledQuestions = shuffleArray([...questions]);

let timerInterval;
let secondsElapsed = 0;

function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    const timerText = document.getElementById('timerText');
    if(!timerText) return;
    timerText.textContent = '⏱ 0:00';
    
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const m = Math.floor(secondsElapsed / 60);
        const s = secondsElapsed % 60;
        timerText.textContent = `⏱ ${m}:${s < 10 ? '0' + s : s}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

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
const skipBtn = document.getElementById('skipBtn');

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

closeTooltip.addEventListener('click', () => tooltipBox.classList.remove('show'));

function renderNav() {
    const navContainer = document.getElementById('questionNav');
    if(!navContainer) return;
    navContainer.innerHTML = '';
    shuffledQuestions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = index + 1;
        
        if (index === currentQuestion) btn.classList.add('active');
        if (questionStatus[index] === 'correct') btn.classList.add('answered-correct');
        if (questionStatus[index] === 'wrong') btn.classList.add('answered-wrong');

        btn.onclick = () => {
            currentQuestion = index;
            loadQuestion();
        };
        navContainer.appendChild(btn);
    });
}
function loadQuestion() {
    answered = false;
    const q = shuffledQuestions[currentQuestion];
    
    if (currentQuestion === 0 && !timerInterval) {
        startTimer();
    }

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
    textInput.classList.remove('correct', 'wrong', 'correct-anim', 'wrong-anim');
    textInput.disabled = false;
    submitBtn.disabled = false;
    submitBtn.style.display = 'block';

    const checkOptionsBtn = document.getElementById('checkOptionsBtn');
    checkOptionsBtn.style.display = 'none'; // Прячем кнопку мультивыбора по умолчанию

    if (questionStatus[currentQuestion] === undefined) {
        skipBtn.style.display = 'block';
    } else {
        skipBtn.style.display = 'none';
    }

    if (q.type === 'options') {
        optionsContainer.style.display = 'flex';
        nextBtn.textContent = currentQuestion === shuffledQuestions.length - 1 ? 'Узнать результат 🎉' : 'Следующий вопрос →';
        
        if (q.correctIndexes && q.correctIndexes.length > 1) {
            checkOptionsBtn.style.display = 'block';
            checkOptionsBtn.disabled = false;
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

                if (!q.correctIndexes || q.correctIndexes.length === 1) {
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
            skipBtn.style.display = 'none';

            const allButtons = document.querySelectorAll('.option-btn');
            allButtons.forEach(b => b.classList.add('disabled'));

            const isCorrect = (selectedOptions.length === q.correctIndexes.length) && 
                              selectedOptions.every(val => q.correctIndexes.includes(val));

            if (isCorrect) {
                allButtons.forEach(b => {
                    const idx = q.options.indexOf(b.textContent);
                    if (q.correctIndexes.includes(idx)) b.classList.add('correct');
                });
                questionStatus[currentQuestion] = 'correct';
                explanationText.textContent = "✅ Верно! " + q.explanation;
                explanationBox.className = 'explanation show correct-bg';
            } else {
                allButtons.forEach(b => {
                    const idx = q.options.indexOf(b.textContent);
                    if (selectedOptions.includes(idx) && !q.correctIndexes.includes(idx)) b.classList.add('wrong');
                    if (q.correctIndexes.includes(idx)) b.classList.add('correct');
                });
                questionStatus[currentQuestion] = 'wrong';
                mistakes.push(q.topic);
                explanationText.textContent = "❌ Ошибка. " + q.explanation;
                explanationBox.className = 'explanation show wrong-bg';
            }
            showNextBtn();
            renderNav();
        };
    } else if (q.type === 'input' || q.type === 'audio') {
        inputContainer.style.display = 'flex';
        if (q.type === 'audio') audioControl.style.display = 'block';
        nextBtn.textContent = currentQuestion === shuffledQuestions.length - 1 ? 'Узнать результат 🎉' : 'Следующий вопрос →';
        textInput.focus();
    }
    
    renderNav();
}

function handleOptionClick(btn, isCorrect, q) {
    if (answered) return;
    answered = true;
    skipBtn.style.display = 'none';

    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(b => b.classList.add('disabled'));

    if (isCorrect) {
        btn.classList.add('correct', 'correct-anim');
        questionStatus[currentQuestion] = 'correct';
        explanationText.textContent = "✅ Верно! " + q.explanation;
        explanationBox.className = 'explanation show correct-bg';
    } else {
        btn.classList.add('wrong', 'wrong-anim');
        questionStatus[currentQuestion] = 'wrong';
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
    renderNav();
}

function handleInputSubmit() {
    if (answered) return;
    const q = shuffledQuestions[currentQuestion];
    
    answered = true;
    textInput.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.display = 'none';
    skipBtn.style.display = 'none';
    
    let userAnswer = textInput.value.trim().toLowerCase().replace(/ё/g, 'е');
    // Проверка: если правильный ответ — это регулярное выражение (RegExp), проверяем по нему. Если массив — ищем совпадение.
let isCorrectInput = false;
if (q.correctAnswer instanceof RegExp) {
    isCorrectInput = q.correctAnswer.test(textInput.value.trim());
} else {
    isCorrectInput = q.correctAnswer.some(ans => ans.toLowerCase().replace(/ё/g, 'е') === userAnswer);
}

    if (isCorrectInput) {
        textInput.classList.add('correct', 'correct-anim');
        questionStatus[currentQuestion] = 'correct';
        explanationText.textContent = "✅ Верно! " + q.explanation;
        explanationBox.className = 'explanation show correct-bg';
    } else {
        textInput.classList.add('wrong', 'wrong-anim');
        questionStatus[currentQuestion] = 'wrong';
        mistakes.push(q.topic);
        explanationText.textContent = "❌ Ошибка. Правильный ответ: " + q.correctAnswer[0] + ". " + q.explanation;
        explanationBox.className = 'explanation show wrong-bg';
    }
    showNextBtn();
    renderNav();
}

function showNextBtn() {
    nextBtn.classList.add('show');
    if (currentQuestion === shuffledQuestions.length - 1) progressBar.style.width = '100%';
}

skipBtn.addEventListener('click', () => {
    let nextUnanswered = -1;
    for (let i = 1; i <= shuffledQuestions.length; i++) {
        let checkIndex = (currentQuestion + i) % shuffledQuestions.length;
        if (questionStatus[checkIndex] === undefined) {
            nextUnanswered = checkIndex;
            break;
        }
    }
    
    if (nextUnanswered !== -1) {
        currentQuestion = nextUnanswered;
        loadQuestion();
    } else {
        currentQuestion++;
        if (currentQuestion < shuffledQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
});

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
    stopTimer();
    quizContent.style.display = 'none';
    document.getElementById('questionNav').style.display = 'none';
    resultsScreen.style.display = 'block';
    
    let total = shuffledQuestions.length;
    let finalScore = questionStatus.filter(status => status === 'correct').length;
    let percent = (finalScore / total) * 100;
    let grade = 2;

    if (percent >= 85) grade = 5;
    else if (percent >= 65) grade = 4;
    else if (percent >= 40) grade = 3;
    else grade = 2;

    document.getElementById('finalScore').textContent = `${finalScore}/${total}`;
    
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

    if (grade === 5) {
        launchConfetti();
    }
}

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff007f', '#8a2be2', '#00f0ff', '#ffd700', '#22c55e'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            if (p.y > canvas.height) {
                particles.splice(index, 1);
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            canvas.style.display = 'none';
        }
    }
    animate();
}

loadQuestion();
