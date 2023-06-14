var buttons = document.getElementsByClassName("btn")

const daily = document.querySelector(".daily")
const weekly = document.querySelector(".weekly")
const monthly = document.querySelector(".monthly")

let dailyText = document.querySelectorAll("#daily")
let weeklyText = document.querySelectorAll("#weekly")
let monthlyText = document.querySelectorAll("#monthly")

function changeColor(element) {
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
    }
    element.classList.add("clicked");
}
for (let i = 0; i < dailyText.length; i++) {
daily.addEventListener("click", function() {
    dailyText[i].style.display = "block"
    weeklyText[i].style.display = "none"
    monthlyText[i].style.display = "none"
})
}
for (let i = 0; i < weeklyText.length; i++) {
weekly.addEventListener("click", function() {
    dailyText[i].style.display = "none"
    weeklyText[i].style.display = "block"
    monthlyText[i].style.display = "none"
})
}

for (let i = 0; i < monthlyText.length; i++) {
monthly.addEventListener("click", function() {
    dailyText[i].style.display = "none"
    weeklyText[i].style.display = "none"
    monthlyText[i].style.display = "block"
})
}