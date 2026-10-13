"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("main-nav");

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});

const tabs = Array.from(document.querySelectorAll(".experience-tab"));
const panels = Array.from(document.querySelectorAll(".experience-panel"));

function activateTab(selectedTab) {
  tabs.forEach((tab) => {
    const selected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  panels.forEach((panel) => {
    panel.hidden = panel.id !== selectedTab.getAttribute("aria-controls");
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    }
  });
});

const interest = document.getElementById("interest");
document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    interest.value = link.dataset.interest;
  });
});

const form = document.getElementById("contact-form");
const whatsappFallback = document.getElementById("whatsapp-fallback");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const description = document.getElementById("message").value.trim();
  const message =
    "Olá! Conheci a Henter Digital Solutions e tenho interesse em " +
    interest.value +
    "." +
    (description
      ? "\n\n" + description
      : " Gostaria de conversar sobre um projeto.");
  const url = "https://wa.me/5524992755167?text=" + encodeURIComponent(message);
  whatsappFallback.href = url;
  whatsappFallback.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
});
