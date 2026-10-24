
  document.addEventListener("DOMContentLoaded", () => {
    const SITE_VERSION = "SRI04(Web)-v3.0.0";
    const PUBLISHED_ON = "23 October 2026, 21:16:00 IST";

    document.querySelectorAll(".site-version").forEach(el => {
      el.textContent = `Version: ${SITE_VERSION} | Published on: ${PUBLISHED_ON}`;
    });
  });