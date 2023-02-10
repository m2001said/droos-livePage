const btn1 = document.querySelector(".live-btn-1");
const btn2 = document.querySelector(".live-btn-2");
const btn3 = document.querySelector(".live-btn-3");

const box1 = document.querySelector("#live-box-1");
const box2 = document.querySelector("#live-box-2");
const box3 = document.querySelector("#live-box-3");

const shareBtns = document.querySelectorAll(".live-share-btn");
const resultShares = document.querySelectorAll(".live-share-result");

const showDiv = (id) => {
  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  document.getElementById(id).style.display = "block";
};

const activeBtn = (className) => {
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");

  document.querySelector(className).classList.add("active");
};

const deleteResultShare = () =>
  resultShares.forEach((resultShare) => {
    resultShare.textContent = "";
  });

btn1.addEventListener("click", () => {
  showDiv("live-box-1");
  activeBtn(".live-btn-1");
  window.history.pushState({}, "", "#live-box-1");
  deleteResultShare();
});

btn2.addEventListener("click", () => {
  showDiv("live-box-2");
  activeBtn(".live-btn-2");
  window.history.pushState({}, "", "#live-box-2");
  deleteResultShare();
});

btn3.addEventListener("click", () => {
  showDiv("live-box-3");
  activeBtn(".live-btn-3");
  window.history.pushState({}, "", "#live-box-3");
  deleteResultShare();
});

//when the page is loaded
const hash = window.location.hash.substr(1);
const idNumber = hash.slice(-1);
if (hash) {
  showDiv(hash);
  for (let i = 1; i < 4; i++) {
    if (idNumber == i) {
      activeBtn(`.live-btn-${i}`);
    }
  }
}
// --------------------sharing buttons

const shareData = {
  title: "موقع دروس الامارات",
  text: "لقد أعجبني هذا الدرس فلعله ينفعكم ",
  url: window.location.href,
};

shareBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultShares.forEach((resultShare) => {
        resultShare.textContent = "تم المشاركة بنجاح";
      });
    } catch (err) {
      resultShares.forEach((resultShare) => {
        resultShare.textContent = "نأسف لك لم تتم المشاركة بنجاح";
      });
    }
  });
});
