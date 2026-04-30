import "../../styles/main.css";
import { renderNav } from "../renderers/nav";
import { educationTimeline, workTimeline } from "../../config/timeline.config";

const navContainer = document.getElementById("home-nav");
const highlightsContainer = document.getElementById("home-highlights");

if (navContainer) {
  navContainer.innerHTML = renderNav("about");
}

if (highlightsContainer) {
  const latestWork = workTimeline[0];
  const education = educationTimeline[0];

  highlightsContainer.innerHTML = `
    <h2>经历亮点</h2>
    <div class="timeline-list">
      <article class="timeline-item">
        <p class="timeline-period">${latestWork.period}</p>
        <h3 class="timeline-title">${latestWork.title}</h3>
        <p class="timeline-organization">${latestWork.organization}</p>
        <p class="timeline-description">${latestWork.description}</p>
      </article>
      <article class="timeline-item">
        <p class="timeline-period">${education.period}</p>
        <h3 class="timeline-title">${education.title}</h3>
        <p class="timeline-organization">${education.organization}</p>
        <p class="timeline-description">${education.description}</p>
      </article>
    </div>
  `;
}
