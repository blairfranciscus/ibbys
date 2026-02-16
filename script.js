const backTop = document.getElementById("backTop");
if (backTop) {
  window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 500 ? "inline-block" : "none";
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const form = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "Thanks! Your reservation request has been received. Please complete your booking on OpenTable.";
    form.reset();
  });
}
