function showPage(pageName) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  const selected = document.getElementById(pageName);

  if (selected) {
    selected.classList.add("active");
  }

  const navButtons = document.querySelectorAll(".nav");

  navButtons.forEach(function(button) {
    button.classList.remove("active");
  });

  const names = {
    home: "홈",
    about: "회사소개",
    education: "반도체 교육",
    process: "제조 공정",
    library: "자료실",
    contact: "문의하기"
  };

  navButtons.forEach(function(button) {

    if (button.textContent.trim() === names[pageName]) {
      button.classList.add("active");
    }

  });

  history.pushState({}, "", "#" + pageName);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* 자료실 내용 열기 */

function openInfo(id) {

  const info = document.getElementById(id);

  if (info) {
    info.classList.toggle("show");
  }

}


/* 문의 */

function sendMessage(event) {

  event.preventDefault();

  const success =
    document.getElementById("success");

  success.classList.add("show");

  event.target.reset();
}


/* 새로고침 */

function loadPage() {

  let page =
    window.location.hash.replace("#", "");

  const validPages = [
    "home",
    "about",
    "education",
    "process",
    "library",
    "contact"
  ];

  if (!validPages.includes(page)) {
    page = "home";
  }

  document.querySelectorAll(".page").forEach(function(item) {
    item.classList.remove("active");
  });

  document.getElementById(page).classList.add("active");

  const names = {
    home: "홈",
    about: "회사소개",
    education: "반도체 교육",
    process: "제조 공정",
    library: "자료실",
    contact: "문의하기"
  };

  document.querySelectorAll(".nav").forEach(function(button) {

    button.classList.remove("active");

    if (button.textContent.trim() === names[page]) {
      button.classList.add("active");
    }

  });

}


window.addEventListener("hashchange", loadPage);

window.addEventListener("popstate", loadPage);

loadPage();
