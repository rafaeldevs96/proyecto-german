const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Cerrar menú al hacer click en un enlace (Mejora UX)
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));





const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const btn = document.getElementById("submit-btn");

if (form) {
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita la redirección fuera del sitio
        
        const data = new FormData(event.target);
        btn.disabled = true;
        status.innerHTML = "Sending...";
        status.className = "form-message info";

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "¡Thanks! Your application has been sent successfully.";
                status.className = "form-message success";
                form.reset(); // Limpia el formulario
            } else {
                status.innerHTML = "Oops! There was a problem. Please try again.";
                status.className = "form-message error";
            }
            btn.disabled = false;
        }).catch(error => {
            status.innerHTML = "Connection error. Please check your internet.";
            status.className = "form-message error";
            btn.disabled = false;
        });
    });
}