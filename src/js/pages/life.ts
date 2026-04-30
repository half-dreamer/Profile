import "../../styles/main.css";
import { lifePosts } from "../../config/life.config";
import { siteConfig } from "../../config/site.config";
import { renderLifePosts } from "../renderers/life";
import { renderNav } from "../renderers/nav";
import {
  validateLifeConfig,
  validateSiteConfig
} from "../validators/configValidator";

const navContainer = document.querySelector('header nav[aria-label="主导航"]');
const lifeRoot = document.getElementById("life-root");

if (navContainer) {
  navContainer.innerHTML = renderNav("life");
}

if (lifeRoot) {
  try {
    validateSiteConfig(siteConfig);
    validateLifeConfig(lifePosts);

    lifeRoot.innerHTML = `
      <section class="life-list" aria-label="${siteConfig.life.sectionLabel}">
        ${renderLifePosts(lifePosts)}
      </section>
    `;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    lifeRoot.innerHTML = `<p class="timeline-warning">${siteConfig.errors.invalidConfigMessage}: ${message}</p>`;
  }
}
