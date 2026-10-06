const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const message = document.getElementById("message");
const colorBtn = document.getElementById("colorBtn");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameInput.value.trim() === "") {
        message.textContent = "Please enter your name!!!!!!!!";
        message.style.color = "red";
    } else {
        message.textContent = "Hallo, " + nameInput.value + " "+"im BAYMAX!"+" "+"try to click the change color to change the backgroundColor to wheat";
        message.style.color = "BLUE";
    }
});
colorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "wheat";
});