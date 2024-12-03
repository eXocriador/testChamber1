const textEl = document.querySelector(".article-text");
// textEl.textContent = "suck suck";
console.log(textEl.textContent);

const titleEl = document.querySelector(".article-title");
titleEl.textContent = 'Welcome to Bahamas!';
console.log(titleEl.textContent);

const allChange = document.querySelector(".article");
// allChange.textContent = "Pizda sobaka";
console.log(allChange.textContent);

const link = document.querySelector(".link");
console.log(link.classList); 
// ["link", "is-active", length: 2, value: "link is-active"]
const hasActiveClassIsActive = link.classList.contains("is-active"); // true
const hasActiveClassTitle = link.classList.contains("title"); // false
console.log(hasActiveClassIsActive);
console.log(hasActiveClassTitle);