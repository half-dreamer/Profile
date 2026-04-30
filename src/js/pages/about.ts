import "../../styles/main.css";
import { siteConfig } from "../../config/site.config";
import {
  educationTimeline,
  workTimeline
} from "../../config/timeline.config";
import { renderTimelineSection } from "../renderers/about";
import {
  validateSiteConfig,
  validateTimelineConfig
} from "../validators/configValidator";
import { renderNav } from "../renderers/nav";

const navContainer = document.querySelector('header nav[aria-label="主导航"]');
const aboutRoot = document.getElementById("about-root");

if (navContainer) {
  navContainer.innerHTML = renderNav("about");
}

if (aboutRoot) {
  try {
    validateSiteConfig(siteConfig);
    validateTimelineConfig(educationTimeline);
    validateTimelineConfig(workTimeline);

    aboutRoot.innerHTML = `
      ${renderTimelineSection(siteConfig.about.educationTitle, educationTimeline)}
      ${renderTimelineSection(siteConfig.about.workTitle, workTimeline)}
    `;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    aboutRoot.innerHTML = `<p class="timeline-warning">${siteConfig.errors.invalidConfigMessage}: ${message}</p>`;
  }
}
