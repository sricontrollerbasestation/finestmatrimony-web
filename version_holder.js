
  document.addEventListener("DOMContentLoaded", () => {
    const SITE_VERSION = "SRI04(Web)-v1.0.24";
    const PUBLISHED_ON = "26 June 2026, 18:16:48 IST";

    document.querySelectorAll(".site-version").forEach(el => {
      el.textContent = `Version: ${SITE_VERSION} | Published on: ${PUBLISHED_ON}`;
    });
  });