import type { LifePost } from "../../config/life.config";

const FALLBACK_COVER = "https://via.placeholder.com/640x360?text=No+Image";

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

export function renderLifePosts(posts: LifePost[]): string {
  if (posts.length === 0) {
    return '<p class="life-empty">暂无生活记录</p>';
  }

  return posts
    .map((post) => {
      const useFallback = !post.cover || !isValidHttpUrl(post.cover);
      const cover = useFallback ? FALLBACK_COVER : post.cover;

      return `
        <article class="life-card">
          <img class="life-cover${useFallback ? " is-fallback" : ""}" src="${escapeHtml(cover)}" alt="${escapeHtml(post.title)}" />
          <p class="life-type">${escapeHtml(post.type)}</p>
          <h3 class="life-title">${escapeHtml(post.title)}</h3>
          <p class="life-date">${escapeHtml(post.date)}</p>
          <p class="life-summary">${escapeHtml(post.summary)}</p>
        </article>
      `;
    })
    .join("");
}
