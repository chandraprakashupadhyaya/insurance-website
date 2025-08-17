// WhatsApp Redirect Function
function redirectToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !message) {
    alert("⚠️ Please fill all fields.");
    return;
  }

  // Ensure phone has country code
  const fullPhone = phone.startsWith("+") ? phone : `+91${phone}`;

  // WhatsApp link
  const url = `https://wa.me/${fullPhone}?text=${encodeURIComponent(
    `Hello, my name is ${name}.\n\n${message}`
  )}`;

  // Open WhatsApp
  window.open(url, "_blank");

  // Reset form
  document.getElementById("whatsappForm").reset();

  // Button success animation
  const btn = document.querySelector(".send-btn");
  btn.innerHTML = "✅ Sent!";
  btn.style.background = "linear-gradient(135deg,#22c55e,#16a34a)";
  setTimeout(() => {
    btn.innerHTML = "🚀 Send on WhatsApp";
    btn.style.background =
      "linear-gradient(135deg,var(--accent),var(--accent-2))";
  }, 3000);
}

// Auto Year in Footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
