import "../../styles/main.css";
import {
  articleList,
  techStackGroups,
  zhihuProfileUrl
} from "../../config/articles.config";
import { siteConfig } from "../../config/site.config";
import {
  isValidExternalLink,
  renderArticleCards,
  renderTechStacks
} from "../renderers/learning";
import { renderNav } from "../renderers/nav";
import {
  validateArticleConfig,
  validateSiteConfig,
  validateTechStackGroups,
  validateZhihuProfileUrl
} from "../validators/configValidator";

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const navContainer = document.querySelector('header nav[aria-label="主导航"]');
const learningRoot = document.getElementById("learning-root");

if (navContainer) {
  navContainer.innerHTML = renderNav("learning");
}

if (learningRoot) {
  try {
    validateSiteConfig(siteConfig);
    validateArticleConfig(articleList);
    validateTechStackGroups(techStackGroups);
    validateZhihuProfileUrl(zhihuProfileUrl);

    const zhihuEntry = isValidExternalLink(zhihuProfileUrl)
      ? `<a class="article-link" href="${escapeHtml(zhihuProfileUrl)}" target="_blank" rel="noreferrer noopener">${siteConfig.learning.zhihuButtonText}</a>`
      : `<span class="article-link is-disabled">${siteConfig.learning.zhihuInvalidText}</span>`;

    learningRoot.innerHTML = `
      <section class="learning-actions" aria-label="学习文章入口">
        ${zhihuEntry}
      </section>
      <section class="article-list" aria-label="文章列表">
        ${renderArticleCards(articleList)}
      </section>
      <section class="tech-stack-list" aria-label="技术栈分组">
        <h3>${siteConfig.learning.techStackTitle}</h3>
        ${renderTechStacks(techStackGroups)}
      </section>
    `;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    learningRoot.innerHTML = `<p class="timeline-warning">${siteConfig.errors.invalidConfigMessage}: ${message}</p>`;
  }
}
