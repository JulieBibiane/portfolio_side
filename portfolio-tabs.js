// Styrer faneblade (Om projektet / Proces / Resultat & læring) på portfolio.html
document.querySelectorAll(".case-tabs").forEach((caseEl) => {
  const buttons = caseEl.querySelectorAll(".case-tab-btn");
  const panels = caseEl.querySelectorAll(".case-tab-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      buttons.forEach((b) => b.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));

      btn.classList.add("is-active");
      caseEl
        .querySelector(`[data-panel="${target}"]`)
        .classList.add("is-active");
    });
  });
});
