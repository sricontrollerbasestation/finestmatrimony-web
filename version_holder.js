
  document.addEventListener("DOMContentLoaded", () => {
    const SITE_VERSION = "SRI04(Web)-v2.5.32";
    const PUBLISHED_ON = "11 August 2026, 21:16:00 IST";

    document.querySelectorAll(".site-version").forEach(el => {
      el.textContent = `Version: ${SITE_VERSION} | Published on: ${PUBLISHED_ON}`;
    });
  });