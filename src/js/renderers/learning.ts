import type {
  ArticleItem,
  TechStackGroups
} from "../../config/articles.config";

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function isValidExternalLink(value: string): boolean {
  return isValidHttpUrl(value);
}

export function renderArticleCards(articles: ArticleItem[]): string {
  if (articles.length === 0) {
    return '<p class="article-list-empty">暂无文章数据</p>';
  }

  return articles
    .map((article) => {
      const title = escapeHtml(article.title);
      const summary = escapeHtml(article.summary);
      const date = escapeHtml(article.date);
      const tags = article.tags
        .map((tag) => `<span class="article-tag">${escapeHtml(tag)}</span>`)
        .join("");

      const linkHtml = isValidExternalLink(article.url)
        ? `<a class="article-link" href="${escapeHtml(article.url)}" target="_blank" rel="noreferrer noopener">阅读原文</a>`
        : '<span class="article-link is-disabled">链接暂不可用</span>';

      return `
        <article class="article-card">
          <h3 class="article-title">${title}</h3>
          <p class="article-summary">${summary}</p>
          <p class="article-date">${date}</p>
          <div class="article-tags">${tags}</div>
          ${linkHtml}
        </article>
      `;
    })
    .join("");
}

export function renderTechStacks(groups: TechStackGroups): string {
  const entries = Object.entries(groups);
  if (entries.length === 0) {
    return '<p class="tech-stack-empty">暂无技术栈数据</p>';
  }

  return entries
    .map(([groupName, stacks]) => {
      const safeGroupName = escapeHtml(groupName);
      const tags = stacks
        .map((stack) => `<span class="tech-tag">${escapeHtml(stack)}</span>`)
        .join("");

      return `
        <section class="tech-group">
          <h3 class="tech-group-title">${safeGroupName}</h3>
          <div class="tech-tags">${tags}</div>
        </section>
      `;
    })
    .join("");
}
