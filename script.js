
const title = document.getElementById("title");
const description = document.getElementById("description");
const button = document.getElementById("start");
const counter = document.getElementById("counter");

let seconds = 0;

setInterval(() => {
  seconds++;
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  counter.textContent = `${h} : ${m} : ${s}`;
}, 1000);

const messages = [
  ["لقد وصلت.", "ليس كل من يبحث يجد... لكنك وجدت شيئاً."],
  ["النظام يعرفك.", "أنت لست هنا بالصدفة."],
  ["مرحلة جديدة.", "كل شيء يبدأ بقرار واحد."],
  ["UNKNOWN.", "المجهول لم يعد مجهولاً."]
];

let stage = 0;

button.addEventListener("click", () => {
  if (stage < messages.length) {
    title.classList.remove("reveal");
    void title.offsetWidth;
    title.textContent = messages[stage][0];
    description.textContent = messages[stage][1];
    title.classList.add("reveal");

    stage++;

    button.textContent =
      stage === messages.length ? "انتهى الاكتشاف" : "تابع...";
  } else {
    title.textContent = "THE END.";
    description.textContent = "لكن مشروعك القادم ينتظرك.";
    button.textContent = "أعد التجربة";
    stage = 0;
  }
});
