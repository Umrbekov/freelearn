
const catalog = {
    english: {
        title: "English",
        description: "Ingliz tilini boshlang‘ich darajadan boshlab o‘rganing.",
        groups: [
            {
                title: "1. Beginner — Boshlang‘ich",
                topics: [
                    ["Alphabet", "Ingliz alifbosi va harflar talaffuzi.", "Ingliz tilida 26 ta harf bor. Harflarni o‘rganishdan boshlang.", "A — Apple\nB — Book\nC — Cat", "A, B, C harflari bilan boshlanadigan 3 ta so‘z yozing."],
                    ["Greetings", "Salomlashish va xayrlashish.", "Hello — salom. Good morning — xayrli tong. Goodbye — xayr.", "Hello! How are you?\nI am fine, thank you.", "Ingliz tilida salomlashish uchun 3 ta jumla yozing."],
                    ["Numbers", "Sonlar va ularning yozilishi.", "Numbers sonlarni ifodalash uchun ishlatiladi.", "One — 1\nTwo — 2\nThree — 3\nTen — 10", "1 dan 10 gacha ingliz tilida yozing."],
                    ["Pronouns", "I, you, he, she va boshqa olmoshlar.", "Olmoshlar ot o‘rnida ishlatiladi.", "I — men\nYou — siz\nHe — u (erkak)\nShe — u (ayol)\nThey — ular", "I, you va they bilan bittadan gap tuzing."],
                    ["To be", "Am, is, are fe'llari.", "To be shaxs va holatni ifodalashda ishlatiladi.", "I am a student.\nShe is happy.\nThey are friends.", "Am, is yoki are ishlatib 3 ta gap tuzing."],
                    ["Articles", "A, an va the artikllari.", "A va an birlikdagi sanaladigan otlar bilan, the esa ma'lum narsa haqida gapirganda ishlatiladi.", "a book\nan apple\nthe sun", "A yoki an ishlatib 5 ta birikma yozing."]
                ]
            },
            {
                title: "2. Grammar — Grammatika",
                topics: [
                    ["Present Simple", "Oddiy hozirgi zamon.", "Odatlar va muntazam bajariladigan ishlar uchun ishlatiladi. He, she, it bilan fe'lga ko‘pincha -s qo‘shiladi.", "I play football.\nShe plays football.\nDo you play football?", "Present Simple zamonida 3 ta gap yozing."],
                    ["Present Continuous", "Hozir davom etayotgan ishlar.", "Am, is, are + fe'l-ing shakli ishlatiladi.", "I am reading.\nShe is studying.\nThey are playing.", "Hozir bajarayotgan ishlaringiz haqida 3 ta gap yozing."],
                    ["Past Simple", "O‘tgan zamon.", "O‘tmishda tugagan ishlar uchun ishlatiladi. Muntazam fe'llarga ko‘pincha -ed qo‘shiladi.", "I played yesterday.\nShe visited her friend.", "Yesterday so‘zi bilan 3 ta gap yozing."],
                    ["Future Simple", "Kelasi zamon.", "Will + fe'lning asosiy shakli kelajakdagi ishlarni ifodalashda ishlatiladi.", "I will study tomorrow.\nShe will help me.", "Kelajak haqida 3 ta gap yozing."],
                    ["Present Perfect", "Tajriba va hozirga aloqador natijalar.", "Have yoki has + fe'lning uchinchi shakli ishlatiladi.", "I have finished my work.\nShe has visited London.", "Present Perfect zamonida 2 ta gap yozing."],
                    ["Questions", "Savol tuzish.", "Savol tuzishda do, does, did yoki to be shakllaridan foydalanish mumkin.", "Do you like English?\nIs he a student?\nDid they come?", "Ingliz tilida 5 ta savol yozing."],
                    ["Prepositions", "Joy va vaqt predloglari.", "In, on va at joy hamda vaqtni ko‘rsatishda ishlatiladi.", "in a room\non the table\nat school\nat 7 o'clock", "In, on va at bilan bittadan gap yozing."],
                    ["Comparatives", "Narsalarni taqqoslash.", "Qisqa sifatlarda ko‘pincha -er, uzun sifatlarda more ishlatiladi.", "tall — taller\nsmall — smaller\nbeautiful — more beautiful", "Ikki narsani ingliz tilida taqqoslang."]
                ]
            },
            {
                title: "3. Vocabulary — So‘z boyligi",
                topics: [
                    ["Family", "Oila a'zolari.", "Oila haqida gapirish uchun asosiy so‘zlarni o‘rganing.", "mother — ona\nfather — ota\nsister — opa yoki singil\nbrother — aka yoki uka", "Oilangiz haqida 4 ta inglizcha gap yozing."],
                    ["Food", "Oziq-ovqat va ichimliklar.", "Taomlar va ichimliklar nomlarini o‘rganing.", "bread — non\nwater — suv\napple — olma\nmilk — sut", "Sevimli taomingiz haqida 3 ta gap yozing."],
                    ["School", "Maktabga oid so‘zlar.", "Maktab buyumlari va fanlar nomlarini o‘rganing.", "book — kitob\npen — ruchka\nlesson — dars\nteacher — o‘qituvchi", "Maktab haqida 5 ta so‘z yozing."],
                    ["Daily Routine", "Kundalik ishlar.", "Har kuni bajaradigan ishlaringizni ifodalashni o‘rganing.", "wake up — uyg‘onmoq\nstudy — o‘qimoq\neat — ovqatlanmoq\nsleep — uxlamoq", "Kundalik tartibingizni 5 ta gap bilan yozing."]
                ]
            },
            {
                title: "4. Speaking, Listening, Reading, Writing",
                topics: [
                    ["Speaking Basics", "O‘zingizni tanishtirish.", "Ismingiz, yoshingiz, qayerdan ekaningiz va qiziqishlaringizni aytishni mashq qiling.", "Hello! My name is ...\nI am a student.\nI like programming.", "O‘zingizni ingliz tilida 5 ta gap bilan tanishtiring."],
                    ["Listening Practice", "Eshitib tushunish.", "Qisqa inglizcha audio yoki videoni tinglang. Avval umumiy mazmunni, keyin tanish so‘zlarni aniqlang.", "1. Listen once.\n2. Write key words.\n3. Listen again.", "Qisqa inglizcha audio tinglab, eshitgan 5 ta so‘zingizni yozing."],
                    ["Reading Practice", "Matnni o‘qib tushunish.", "Avval sarlavhani o‘qing, keyin matnning asosiy fikrini toping.", "Tom is a student. He likes books. Every day, he reads for ten minutes.", "Matndan Tom kimligini va nimani yoqtirishini aniqlang."],
                    ["Writing Basics", "Oddiy matn yozish.", "Avval sodda gaplardan boshlang. Keyin gaplarni kichik paragrafga birlashtiring.", "My name is Ali. I am a student. I like English.", "O‘zingiz haqingizda 5 ta gap yozing."],
                    ["IELTS Introduction", "IELTS imtihoni bilan tanishuv.", "IELTS Listening, Reading, Writing va Speaking bo‘limlaridan iborat. Tayyorlanishda barcha ko‘nikmalarni mashq qiling.", "Listening\nReading\nWriting\nSpeaking", "Har bir IELTS bo‘limida qanday ko‘nikma tekshirilishini yozing."]
                ]
            }
        ]
    },

    programming: {
        title: "Programming",
        description: "Dasturlashni o‘rganing, kod yozing va natijasini brauzerda tekshiring.",
        groups: [
            {
                title: "1. HTML — Sayt tuzilishi",
                topics: [
                    ["HTML Introduction", "HTML nima va qanday ishlaydi?", "HTML veb-sahifaning tuzilishini yaratadi. Teglar brauzerga sarlavha, matn va boshqa elementlarni qanday ko‘rsatishni bildiradi.", "<h1>Salom, dunyo!</h1>\n<p>Mening birinchi saytim.</p>", "h1 ichiga ismingizni yozing."],
                    ["HTML Document", "To‘liq HTML hujjati.", "HTML hujjati odatda doctype, html, head va body qismlaridan iborat.", "<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Mening saytim</title>\n</head>\n<body>\n    <h1>Salom!</h1>\n</body>\n</html>", "Yangi HTML hujjati yozib, sarlavhasini o‘zgartiring."],
                    ["Headings and Paragraphs", "Sarlavha va matn.", "h1 eng asosiy sarlavha, h2 esa ikkinchi darajali sarlavha uchun ishlatiladi. p matn paragrafini yaratadi.", "<h1>Bosh sarlavha</h1>\n<h2>Kichik sarlavha</h2>\n<p>Oddiy matn.</p>", "Saytingizga ikkita sarlavha va ikkita paragraf qo‘shing."],
                    ["Links and Images", "Havola va rasmlar.", "a havola yaratadi. img rasm ko‘rsatadi. Rasmga tushunarli alt matn yozish foydali.", "<a href=\"https://example.com\">Saytga o‘tish</a>\n<img src=\"photo.jpg\" alt=\"Tabiat rasmi\">", "Bir havola va bitta rasm elementini yarating."],
                    ["Lists and Tables", "Ro‘yxatlar va jadvallar.", "ul tartibsiz ro‘yxat, ol esa raqamlangan ro‘yxat yaratadi. table jadval uchun ishlatiladi.", "<ul>\n    <li>HTML</li>\n    <li>CSS</li>\n</ul>", "Sevimli 5 ta faningiz ro‘yxatini yarating."],
                    ["Forms", "Formalar va inputlar.", "Formalar foydalanuvchidan ism, elektron pochta yoki boshqa ma'lumotlarni olishga yordam beradi.", "<form>\n    <label>Ismingiz</label>\n    <input type=\"text\" placeholder=\"Ism\">\n    <button type=\"button\">Yuborish</button>\n</form>", "Ism va email kiritish maydoniga ega forma yarating."]
                ]
            },
            {
                title: "2. CSS — Dizayn",
                topics: [
                    ["CSS Introduction", "CSS bilan tanishuv.", "CSS HTML elementlarining ko‘rinishini o‘zgartiradi. color matn rangini, background fonni belgilaydi.", "h1 {\n    color: #38bdf8;\n    background: #080d19;\n}", "Sarlavha rangini va fonini o‘zgartiring."],
                    ["Selectors", "CSS selektorlari.", "Element selektori teg nomi bilan, class nuqta bilan, id esa # belgisi bilan yoziladi.", "p { color: white; }\n.card { padding: 20px; }\n#title { color: cyan; }", "Bitta class yarating va unga rang bering."],
                    ["Colors and Backgrounds", "Ranglar va fonlar.", "CSS ranglarni nom, HEX yoki RGB shaklida belgilashga imkon beradi.", "body {\n    background: #080d19;\n    color: #f1f5f9;\n}", "To‘q fon va ko‘k matnli dizayn yarating."],
                    ["Spacing and Borders", "Margin, padding va border.", "Padding element ichidagi bo‘shliqni, margin tashqi oraliqni, border esa chegarani belgilaydi.", ".card {\n    padding: 20px;\n    margin: 15px;\n    border: 1px solid #38bdf8;\n}", "Kartaga chegara va ichki oraliq qo‘shing."],
                    ["Flexbox", "Elementlarni bir qatorga joylash.", "display:flex elementlarni moslashuvchan tarzda joylashtiradi. justify-content va align-items hizalashga yordam beradi.", ".container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 16px;\n}", "Ikki kartani bir qatorda joylashtiring."],
                    ["CSS Grid", "Grid yordamida maket yaratish.", "CSS Grid sahifani qator va ustunlarga bo‘lib joylashtirishga yordam beradi.", ".cards {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}", "Uchta ustundan iborat kartalar maketini yozing."],
                    ["Responsive Design", "Telefon va kompyuterga mos dizayn.", "Media query ekran o‘lchamiga qarab CSS qoidalarini o‘zgartirishga imkon beradi.", "@media (max-width: 600px) {\n    .cards {\n        grid-template-columns: 1fr;\n    }\n}", "Kichik ekranda kartalarni bitta ustunga tushiring."],
                    ["Transitions and Hover", "Hover va animatsiyalar.", "Transition CSS xususiyati o‘zgarganda silliq o‘tish yaratadi.", ".card {\n    transition: transform .2s;\n}\n.card:hover {\n    transform: translateY(-5px);\n}", "Sichqoncha kartaga borganda yuqoriga siljishini yarating."]
                ]
            },
            {
                title: "3. JavaScript — Interaktivlik",
                topics: [
                    ["JavaScript Introduction", "JavaScript nima?", "JavaScript sahifaga interaktivlik qo‘shadi. O‘zgaruvchilar ma'lumotlarni saqlaydi.", "const name = \"Amirbek\";\nconsole.log(name);", "O‘z ismingizni o‘zgaruvchida saqlang va natijasini chiqaring."],
                    ["Variables", "let va const.", "let qiymati keyin o‘zgarishi mumkin. const esa qayta qiymat berilmaydigan o‘zgaruvchini e'lon qiladi.", "let score = 0;\nscore = 10;\nconst username = \"student\";", "Ism va ballni ikkita o‘zgaruvchida saqlang."],
                    ["Data Types", "Ma'lumot turlari.", "JavaScriptda string matn, number son, boolean true yoki false qiymatini bildiradi.", "const name = \"Ali\";\nconst age = 14;\nconst isStudent = true;", "Matn, son va boolean qiymat yarating."],
                    ["Conditions", "if va else shartlari.", "Shart rost bo‘lsa if ichidagi kod bajariladi, aks holda else ishlashi mumkin.", "const age = 14;\nif (age >= 13) {\n    console.log(\"Welcome!\");\n} else {\n    console.log(\"Try again\");\n}", "Son 10 dan katta yoki kichikligini tekshiring."],
                    ["Loops", "Takrorlash sikllari.", "for sikli kodni bir necha marta bajarish uchun ishlatiladi.", "for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}", "1 dan 10 gacha sonlarni chiqaradigan sikl yozing."],
                    ["Functions", "Funksiyalar.", "Funksiya bir vazifani bajaruvchi, qayta ishlatish mumkin bo‘lgan kod blokidir.", "function greet(name) {\n    return \"Hello, \" + name;\n}\nconsole.log(greet(\"Ali\"));", "Ikki sonni qo‘shadigan funksiya yozing."],
                    ["Arrays", "Massivlar.", "Massiv bir nechta qiymatni bitta o‘zgaruvchida saqlaydi. Indekslar 0 dan boshlanadi.", "const fruits = [\"apple\", \"banana\", \"orange\"];\nconsole.log(fruits[0]);", "Uchta sevimli filmingiz yoki kitobingizni massivga joylang."],
                    ["DOM and Events", "HTML elementlarini boshqarish.", "DOM orqali JavaScript HTML elementlarini topishi va o‘zgartirishi mumkin.", "const button = document.querySelector(\"#myButton\");\nbutton.addEventListener(\"click\", () => {\n    document.querySelector(\"#message\").textContent = \"Hello!\";\n});", "Tugma bosilganda matn o‘zgaradigan sahifa yarating."]
                ]
            },
            {
                title: "4. Keyingi yo‘nalishlar",
                topics: [
                    ["Python Basics", "Python tiliga kirish.", "Python sodda sintaksisga ega dasturlash tilidir. Uni web dasturlash, avtomatlashtirish va ma'lumotlar bilan ishlashda ishlatish mumkin.", "name = \"Ali\"\nprint(name)", "Python tilida ismingizni chiqaradigan kod yozing."],
                    ["Git and GitHub", "Kod versiyalarini saqlash.", "Git koddagi o‘zgarishlarni kuzatadi. GitHub esa loyihalarni onlayn saqlash va ulashishga yordam beradi.", "git init\ngit add .\ngit commit -m \"first commit\"", "Git va GitHub nima uchun ishlatilishini o‘z so‘zingiz bilan yozing."],
                    ["APIs", "Boshqa xizmatlardan ma'lumot olish.", "API dasturlarning o‘zaro ma'lumot almashishiga yordam beradi. fetch JavaScriptda so‘rov yuborish uchun ishlatilishi mumkin.", "fetch(\"https://jsonplaceholder.typicode.com/todos/1\")\n    .then(response => response.json())\n    .then(data => console.log(data));", "API nima ekanini tushuntiring va fetch misolini o‘rganing."]
                ]
            }
        ]
    },

    math: {
        title: "Mathematics",
        description: "Matematikani asoslardan boshlab, algebra va geometriyagacha o‘rganing.",
        groups: [
            {
                title: "1. Arifmetika",
                topics: [
                    ["Natural Numbers", "Natural sonlar.", "Natural sonlar sanash uchun ishlatiladi: 1, 2, 3 va hokazo.", "12 + 8 = 20\n25 - 9 = 16", "35 + 27 ni hisoblang."],
                    ["Fractions", "Oddiy kasrlar.", "Kasr butunning bir qismini ifodalaydi. Surat yuqorida, maxraj pastda yoziladi.", "1/2 + 1/2 = 1\n1/4 + 1/4 = 1/2", "1/3 + 1/3 ni hisoblang."],
                    ["Decimals", "O‘nli kasrlar.", "O‘nli kasrlar sonning butun va kasr qismini vergul bilan ajratib ko‘rsatadi.", "0.5 + 0.25 = 0.75\n1.2 + 0.8 = 2", "2.5 + 1.75 ni hisoblang."],
                    ["Percentages", "Foizlar.", "Foiz yuzdan bir ulushni bildiradi. 25% = 25/100 = 0.25.", "200 ning 10% i = 20\n100 ning 25% i = 25", "300 ning 20 foizini toping."],
                    ["Ratios", "Nisbat va proporsiya.", "Nisbat ikki miqdorni solishtiradi. 2:3 nisbatda jami 5 ta teng ulush bor.", "2:3 = 4:6", "12 va 18 sonlarining nisbatini qisqartiring."]
                ]
            },
            {
                title: "2. Algebra",
                topics: [
                    ["Variables and Expressions", "O‘zgaruvchi va ifodalar.", "Harflar noma'lum yoki o‘zgaruvchi qiymatni bildirishi mumkin.", "x + 3\n2a + 5\n3(x + 2)", "x = 4 bo‘lsa, 2x + 3 qiymatini toping."],
                    ["Linear Equations", "Chiziqli tenglamalar.", "Tenglamaning ikkala tomonida tenglikni saqlaydigan amallarni bajarib noma'lumni topamiz.", "x + 5 = 12\nx = 12 - 5\nx = 7", "x + 9 = 20 tenglamasini yeching."],
                    ["Inequalities", "Tengsizliklar.", "Tengsizlik sonlarning katta-kichikligini ko‘rsatadi. Manfiy songa ko‘paytirganda yoki bo‘lganda belgi yo‘nalishi o‘zgaradi.", "x + 2 > 5\nx > 3", "x - 4 < 8 tengsizlikni yeching."],
                    ["Powers and Roots", "Daraja va ildiz.", "Daraja sonni o‘ziga bir necha marta ko‘paytirishni bildiradi. Kvadrat ildiz kvadrati berilgan songa teng sonni topadi.", "3² = 3 × 3 = 9\n√25 = 5", "4² va √81 ni hisoblang."],
                    ["Polynomials", "Ko‘phadlar.", "Ko‘phad sonlar, o‘zgaruvchilar va darajalardan tuzilgan algebraik ifodadir.", "2x + 3x = 5x\nx² + 2x + 1", "4x + 2x - 3x ni soddalashtiring."],
                    ["Functions", "Funksiyalar.", "Funksiya kirish qiymatini chiqish qiymatiga moslaydi.", "f(x) = 2x + 1\nf(3) = 2 × 3 + 1 = 7", "f(x) = 3x bo‘lsa, f(4) ni toping."]
                ]
            },
            {
                title: "3. Geometriya",
                topics: [
                    ["Points and Lines", "Nuqta, to‘g‘ri chiziq va kesma.", "Nuqta joyni, chiziq esa yo‘nalish bo‘ylab davom etuvchi geometrik obyektni ifodalaydi.", "Kesma uzunligi: AB = 5 cm", "Daftarda 6 sm uzunlikdagi kesma chizing."],
                    ["Angles", "Burchaklar.", "To‘g‘ri burchak 90°, yoyiq burchak 180° bo‘ladi.", "O‘tkir burchak: < 90°\nTo‘g‘ri burchak: 90°\nO‘tmas burchak: 90°–180°", "35° burchak qaysi turga kiradi?"],
                    ["Triangles", "Uchburchaklar.", "Uchburchak ichki burchaklari yig‘indisi 180° ga teng.", "A + B + C = 180°\nA = 50°, B = 60°\nC = 70°", "Ikki burchagi 45° va 75° bo‘lgan uchburchakning uchinchi burchagini toping."],
                    ["Perimeter and Area", "Perimetr va yuza.", "To‘g‘ri to‘rtburchak perimetri barcha tomonlar yig‘indisi, yuzi esa uzunlik bilan en ko‘paytmasidir.", "P = 2(a + b)\nS = a × b", "Uzunligi 8 sm, eni 3 sm bo‘lgan to‘g‘ri to‘rtburchakning perimetri va yuzini toping."],
                    ["Circles", "Aylana va doira.", "Aylana uzunligi 2πr, doira yuzi esa πr² formulasi bilan hisoblanadi.", "C = 2πr\nS = πr²", "Radiusi 3 sm bo‘lgan doira yuzini π orqali ifodalang."],
                    ["Pythagorean Theorem", "Pifagor teoremasi.", "To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga teng.", "a² + b² = c²\n3² + 4² = 5²", "Katetlari 6 va 8 bo‘lgan uchburchak gipotenuzasini toping."]
                ]
            },
            {
                title: "4. Boshqa mavzular",
                topics: [
                    ["Coordinate Plane", "Koordinata tekisligi.", "Nuqtaning koordinatalari (x, y) shaklida yoziladi. Birinchi son gorizontal, ikkinchisi vertikal joylashuvni bildiradi.", "A = (2, 3)\nB = (-1, 4)", "Koordinata tekisligida (3, 2) nuqtani belgilang."],
                    ["Statistics", "Statistika va o‘rtacha qiymat.", "Arifmetik o‘rtacha qiymat barcha sonlar yig‘indisini sonlar miqdoriga bo‘lish orqali topiladi.", "(2 + 4 + 6) / 3 = 4", "5, 7, 9 sonlarining o‘rtacha qiymatini toping."],
                    ["Probability", "Ehtimollik.", "Bir xil imkoniyatga ega natijalarda ehtimollik qulay natijalar sonini jami natijalar soniga bo‘lish orqali hisoblanadi.", "P = qulay natijalar / jami natijalar\nTanga: P(gerb) = 1/2", "Oddiy kubik tashlanganda 6 tushish ehtimolini toping."]
                ]
            }
        ]
    }
};

const subjectGrid = document.querySelector(".subject-grid");
const learning = document.querySelector("#learning");
const learningContent = document.querySelector("#learningContent");
const backButton = document.querySelector("#backButton");
const navigation = document.querySelector("#navigation");

let activeSubject = "";
let activeTopic = null;
let searchTerm = "";

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function getTopics(subject) {
    return catalog[subject].groups.flatMap((group, groupIndex) =>
        group.topics.map((topic, topicIndex) => ({
            groupTitle: group.title,
            groupIndex,
            topicIndex,
            title: topic[0],
            summary: topic[1],
            explanation: topic[2],
            example: topic[3],
            task: topic[4]
        }))
    );
}

function openSubject(subject) {
    activeSubject = subject;
    activeTopic = null;
    searchTerm = "";
    subjectGrid.closest(".subjects").hidden = true;
    document.querySelector(".hero").hidden = true;
    document.querySelector(".about").hidden = true;
    learning.hidden = false;
    renderSubject();
    learning.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSubject() {
    const data = catalog[activeSubject];
    const allTopics = getTopics(activeSubject);
    const filteredTopics = allTopics.filter(topic =>
        `${topic.title} ${topic.summary} ${topic.groupTitle}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groups = data.groups.map((group, groupIndex) => {
        const topics = filteredTopics.filter(topic => topic.groupIndex === groupIndex);

        if (!topics.length) return "";

        return `
            <section class="topic-group">
                <div class="group-heading">
                    <h3>${escapeHTML(group.title)}</h3>
                    <span>${topics.length} ta mavzu</span>
                </div>
                <div class="topic-list">
                    ${topics.map(topic => `
                        <div class="topic-row" role="button" tabindex="0"
                             data-group="${topic.groupIndex}" data-topic="${topic.topicIndex}">
                            <span class="topic-number">${String(topic.topicIndex + 1).padStart(2, "0")}</span>
                            <span class="topic-info">
                                <h4>${escapeHTML(topic.title)}</h4>
                                <p>${escapeHTML(topic.summary)}</p>
                            </span>
                            <span class="topic-arrow">↗</span>
                        </div>
                    `).join("")}
                </div>
            </section>
        `;
    }).join("");

    learningContent.innerHTML = `
        <div class="course-heading">
            <span class="eyebrow">FREELEARN / ${escapeHTML(data.title.toUpperCase())}</span>
            <h2>${escapeHTML(data.title)}</h2>
            <p>${escapeHTML(data.description)}</p>
        </div>
        <div class="course-toolbar">
            <input class="search-input" id="topicSearch" type="search"
                   placeholder="Mavzuni qidirish..." value="${escapeHTML(searchTerm)}"
                   aria-label="Mavzularni qidirish">
            <select class="filter-select" id="groupFilter" aria-label="Bo‘limni tanlash">
                <option value="">Barcha bo‘limlar</option>
                ${data.groups.map((group, index) =>
                    `<option value="${index}">${escapeHTML(group.title)}</option>`
                ).join("")}
            </select>
            <span class="eyebrow">${filteredTopics.length} TA MAVZU</span>
        </div>
        <div class="topic-groups">
            ${groups || `<p class="empty-state">Bu so‘z bo‘yicha mavzu topilmadi.</p>`}
        </div>
    `;

    const searchInput = document.querySelector("#topicSearch");
    const groupFilter = document.querySelector("#groupFilter");

    searchInput.addEventListener("input", () => {
        searchTerm = searchInput.value;
        const cursorPosition = searchInput.selectionStart;
        renderSubject();
        const nextInput = document.querySelector("#topicSearch");
        nextInput.focus();
        nextInput.setSelectionRange(cursorPosition, cursorPosition);
        document.querySelector("#groupFilter").value = groupFilter.value;
    });

    groupFilter.addEventListener("change", () => {
        const groupIndex = groupFilter.value;
        if (groupIndex === "") {
            renderSubject();
            return;
        }

        const selectedGroup = data.groups[Number(groupIndex)];
        searchTerm = "";
        renderSubject();

        document.querySelector("#topicSearch").value = "";
        document.querySelectorAll(".topic-group").forEach(section => {
            section.hidden = section.querySelector(".group-heading h3").textContent !== selectedGroup.title;
        });
    });

    learningContent.querySelectorAll(".topic-row").forEach(row => {
        const open = () => {
            renderTopic(Number(row.dataset.group), Number(row.dataset.topic));
        };

        row.addEventListener("click", open);
        row.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
            }
        });
    });
}

function renderTopic(groupIndex, topicIndex) {
    activeTopic = { groupIndex, topicIndex };

    const topic = catalog[activeSubject].groups[groupIndex].topics[topicIndex];
    const isProgramming = activeSubject === "programming";
    const isDone = localStorage.getItem(`freelearn:${activeSubject}:${groupIndex}:${topicIndex}`) === "true";

    const starterCode = isProgramming
        ? getStarterCode(topicIndex, groupIndex)
        : "";

    learningContent.innerHTML = `
        <div class="lesson-view">
            <button class="back-button" id="topicBack">← Mavzular ro‘yxati</button>
            <span class="eyebrow">${escapeHTML(catalog[activeSubject].title)} / ${escapeHTML(catalog[activeSubject].groups[groupIndex].title)}</span>
            <h2>${escapeHTML(topic[0])}</h2>
            <p>${escapeHTML(topic[2])}</p>

            <div class="lesson-box">
                <h3>Misol</h3>
                <pre><code>${escapeHTML(topic[3])}</code></pre>
            </div>

            <div class="lesson-box">
                <h3>Amaliy mashq</h3>
                <p>${escapeHTML(topic[4])}</p>
            </div>

            ${isProgramming ? `
                <h3 class="output-heading">Kod muharriri</h3>
                <p>Quyidagi maydonga kod yozing yoki mavjud kodni o‘zgartiring. HTML, CSS va JavaScriptni birgalikda sinab ko‘rishingiz mumkin.</p>
                <div class="practice-editor">
                    <div class="editor-header">
                        <strong>FreeLearn Code Editor</strong>
                        <span>HTML / CSS / JS</span>
                    </div>
                    <textarea id="codeEditor" spellcheck="false" aria-label="Kod yozish maydoni">${escapeHTML(starterCode)}</textarea>
                    <div class="editor-actions">
                        <button class="run-button" id="runCode">▶ Ishga tushirish</button>
                        <button id="resetCode">Qayta tiklash</button>
                    </div>
                </div>
                <h3 class="output-heading">Natija</h3>
                <iframe id="codeOutput" title="Kod natijasi" sandbox="allow-scripts"></iframe>
            ` : `
                <div class="lesson-box">
                    <h3>Javobingizni yozing</h3>
                    <textarea class="search-input" id="practiceAnswer" style="width:100%;min-height:130px;padding:14px" placeholder="Javobingizni shu yerga yozing..."></textarea>
                    <div class="editor-actions">
                        <button class="run-button" id="saveAnswer">Javobni saqlash</button>
                    </div>
                    <p id="answerStatus" aria-live="polite"></p>
                </div>
            `}

            <div class="lesson-actions">
                <button class="mark-button" id="markComplete">${isDone ? "✓ Dars bajarildi" : "✓ Darsni tugatdim"}</button>
                <button id="previousTopic">← Oldingi mavzu</button>
                <button id="nextTopic">Keyingi mavzu →</button>
            </div>
        </div>
    `;

    document.querySelector("#topicBack").addEventListener("click", renderSubject);

    document.querySelector("#markComplete").addEventListener("click", () => {
        const key = `freelearn:${activeSubject}:${groupIndex}:${topicIndex}`;
        const nextState = localStorage.getItem(key) !== "true";
        localStorage.setItem(key, String(nextState));
        renderTopic(groupIndex, topicIndex);
    });

    document.querySelector("#previousTopic").addEventListener("click", () => {
        moveTopic(-1);
    });

    document.querySelector("#nextTopic").addEventListener("click", () => {
        moveTopic(1);
    });

    if (isProgramming) {
        const editor = document.querySelector("#codeEditor");
        const originalCode = starterCode;

        document.querySelector("#runCode").addEventListener("click", runEditorCode);
        document.querySelector("#resetCode").addEventListener("click", () => {
            editor.value = originalCode;
            runEditorCode();
        });

        runEditorCode();
    } else {
        const answer = document.querySelector("#practiceAnswer");
        const savedAnswer = localStorage.getItem(`answer:${activeSubject}:${groupIndex}:${topicIndex}`);
        if (savedAnswer) answer.value = savedAnswer;

        document.querySelector("#saveAnswer").addEventListener("click", () => {
            localStorage.setItem(`answer:${activeSubject}:${groupIndex}:${topicIndex}`, answer.value);
            document.querySelector("#answerStatus").textContent = "Javob shu brauzerda saqlandi.";
        });
    }
}

function getStarterCode(topicIndex, groupIndex) {
    if (groupIndex === 0) {
        return `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening sahifam</title>
</head>
<body>
    <h1>Salom, FreeLearn!</h1>
    <p>Men o‘z saytimni yaratishni o‘rganyapman.</p>
    <button onclick="document.querySelector('#message').textContent = 'Tugma ishladi!'">
        Meni bosing
    </button>
    <p id="message"></p>
</body>
</html>`;
    }

    if (groupIndex === 1) {
        return `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS mashqi</title>
    <style>
        body {
            background: #080d19;
            color: #f1f5f9;
            font-family: Arial, sans-serif;
            padding: 30px;
        }

        h1 {
            color: #38bdf8;
        }

        .card {
            padding: 20px;
            border: 1px solid #38bdf8;
            border-radius: 12px;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>CSS mashqi</h1>
        <p>Ranglar va dizaynni o‘zgartiring.</p>
    </div>
</body>
</html>`;
    }

    return `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript mashqi</title>
</head>
<body>
    <h1>JavaScript</h1>
    <p id="message">Hali tugma bosilmadi.</p>
    <button id="myButton">Tugmani bosing</button>

    <script>
        const button = document.querySelector("#myButton");
        const message = document.querySelector("#message");

        button.addEventListener("click", () => {
            message.textContent = "JavaScript ishlayapti!";
        });
    <\/script>
</body>
</html>`;
}

function runEditorCode() {
    const editor = document.querySelector("#codeEditor");
    const output = document.querySelector("#codeOutput");

    if (!editor || !output) return;

    output.srcdoc = editor.value;
}

function moveTopic(direction) {
    const topics = getTopics(activeSubject);
    const currentIndex = topics.findIndex(topic =>
        topic.groupIndex === activeTopic.groupIndex &&
        topic.topicIndex === activeTopic.topicIndex
    );

    const next = topics[currentIndex + direction];

    if (next) {
        renderTopic(next.groupIndex, next.topicIndex);
        learning.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

subjectGrid.addEventListener("click", event => {
    const card = event.target.closest("[data-subject]");
    if (card) openSubject(card.dataset.subject);
});

backButton.addEventListener("click", () => {
    activeSubject = "";
    activeTopic = null;
    learning.hidden = true;
    subjectGrid.closest(".subjects").hidden = false;
    document.querySelector(".hero").hidden = false;
    document.querySelector(".about").hidden = false;
    document.querySelector("#subjects").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#homeButton").addEventListener("click", event => {
    event.preventDefault();

    if (!learning.hidden) {
        backButton.click();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#menuButton").addEventListener("click", () => {
    navigation.classList.toggle("open");
});

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navigation.classList.remove("open"));
});

document.querySelector("#year").textContent = new Date().getFullYear();

for (const subject of Object.keys(catalog)) {
    const count = getTopics(subject).length;
    const element = document.querySelector(`#${subject}Count`);
    if (element) element.textContent = `${count} ta mavzu`;
}
