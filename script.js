const btn1 = document.querySelector(".live-btn-1");
const btn2 = document.querySelector(".live-btn-2");
const btn3 = document.querySelector(".live-btn-3");

const box1 = document.querySelector("#live-box-1");
const box2 = document.querySelector("#live-box-2");
const box3 = document.querySelector("#live-box-3");

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

btn1.addEventListener("click", () => {
  showDiv("live-box-1");
  activeBtn(".live-btn-1");
  window.history.pushState({}, "", "#live-box-1");
});
btn2.addEventListener("click", () => {
  showDiv("live-box-2");
  activeBtn(".live-btn-2");
  window.history.pushState({}, "", "#live-box-2");
});
btn3.addEventListener("click", () => {
  showDiv("live-box-3");
  activeBtn(".live-btn-3");
  window.history.pushState({}, "", "#live-box-3");
});

//when the page is loaded
const hash = window.location.hash.substr(1);
const idNumber = hash.slice(-1);
if (hash) {
  showDiv(hash);
  for (let i = 1; i < 3; i++) {
    if (idNumber == i) {
      activeBtn(`.live-btn-${i}`);
    }
  }
}
// --------------------sharing buttons
const shareButton = document.getElementById("share-button");
const shareModal = document.getElementById("share-modal");
const closeModalButton = document.getElementById("close-modal");

shareButton.addEventListener("click", function () {
  shareModal.style.display = "flex";
});

closeModalButton.addEventListener("click", function () {
  shareModal.style.display = "none";
});

const link = window.location.href;

// twitter
const twitterShare = document.getElementById("twitter-share");
twitterShare.addEventListener("click", function (event) {
  event.preventDefault();
  const url =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(link);
  window.open(url, "Share to Twitter", "height=400,width=600");
});

const facebookShare = document.getElementById("facebook-share");
facebookShare.addEventListener("click", function (event) {
  event.preventDefault();
  const url =
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link);
  window.open(url, "Share to Facebook", "height=400,width=600");
});

const linkedinShare = document.getElementById("linkedin-share");
linkedinShare.addEventListener("click", function (event) {
  event.preventDefault();
  const url =
    "https://www.linkedin.com/shareArticle?mini=true&url=" +
    encodeURIComponent(link);

  window.open(url, "Share to LinkedIn", "height=400,width=600");
});

// ------------
// document.addEventListener("click", function (event) {
//   if (shareModal.contains(event.target)) {
//     shareModal.style.display = "none";
//   }
// });

// const twitterShare = document.getElementById("twitter-share");
// twitterShare.addEventListener("click", function (event) {
//   event.preventDefault();
//   const url =
//     "https://twitter.com/intent/tweet?text=" +
//     encodeURIComponent("The text you want to share");
//   window.open(url, "Share to Twitter", "height=400,width=600");
// });

// const facebookShare = document.getElementById("facebook-share");
// facebookShare.addEventListener("click", function (event) {
//   event.preventDefault();
//   const url =
//     "https://www.facebook.com/sharer/sharer.php?u=" +
//     encodeURIComponent("The URL you want to share");
//   window.open(url, "Share to Facebook", "height=400,width=600");
// });

// const linkedinShare = document.getElementById("linkedin-share");
// linkedinShare.addEventListener("click", function (event) {
//   event.preventDefault();
//   const url =
//     "https://www.linkedin.com/shareArticle?mini=true&url=" +
//     encodeURIComponent("The URL you want to share") +
//     "&title=" +
//     encodeURIComponent("The title you want to use") +
//     "&summary=" +
//     encodeURIComponent("The summary you want to use");
//   window.open(url, "Share to LinkedIn", "height=400,width=600");
// });
