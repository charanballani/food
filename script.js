const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;
    const qty = document.getElementById("qty").value;

    message.innerText = `Thanks, ${name}! Your order for ${qty} ${food}(s) is confirmed 🛵.`;
});
