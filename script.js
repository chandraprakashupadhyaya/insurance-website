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

  // Always send to your WhatsApp number
  const whatsappNumber = "917569552274";

  // WhatsApp message format
  const text =
    `New Lead from Website:%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Message: ${message}`;

  // WhatsApp link
  const url = `https://wa.me/${whatsappNumber}?text=${text}`;

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
