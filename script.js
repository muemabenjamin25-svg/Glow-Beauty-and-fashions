// Greeting & Date
const greetingEl = document.getElementById("greeting");
const dateEl = document.getElementById("date");

if (greetingEl && dateEl) {
    const hour = new Date().getHours();
    let greeting =
        hour < 12 ? "Good Morning" :
            hour < 18 ? "Good Afternoon" :
                "Good Evening";

    greetingEl.textContent = greeting;
    dateEl.textContent = new Date().toDateString();
}

// Cart Feature
let cart = localStorage.getItem("cartCount") || 0;
cart = parseInt(cart);

function updateCart() {
    document.querySelectorAll("#cartCount").forEach(el => {
        el.textContent = cart;
    });
}

function addToCart() {
    cart++;
    localStorage.setItem("cartCount", cart);
    updateCart();
}

updateCart();

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const msg = document.getElementById("formMessage");

        if (!email.includes("@")) {
            msg.textContent = "❌ Invalid email address";
            msg.style.color = "red";
        } else {
            msg.textContent = "✅ Message sent successfully!";
            msg.style.color = "green";
            form.reset();
        }
    });
}
function payMpesa() {
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("mpesaMessage");

    if (phone.length < 10 || !phone.startsWith("07")) {
        message.textContent = "❌ Enter a valid Safaricom number";
        message.style.color = "red";
    } else {
        message.textContent = "✅ MPesa payment request sent successfully!";
        message.style.color = "green";
    }
}


// Theme Toggle
const toggle = document.getElementById("themeToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
