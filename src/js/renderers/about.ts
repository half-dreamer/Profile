import type { TimelineItem } from "../../config/timeline.config";

function toSafeText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function hasMissingField(item: TimelineItem): boolean {
  return (
    !toSafeText(item.period) ||
    !toSafeText(item.title) ||
    !toSafeText(item.organization) ||
    !toSafeText(item.description)
  );
}

export function renderTimelineSection(
  sectionTitle: string,
  items: TimelineItem[]
): string {
  const safeSectionTitle = escapeHtml(toSafeText(sectionTitle));

  if (items.length === 0) {
    return `
      <section class="timeline-section">
        <h3>${safeSectionTitle}</h3>
        <p class="timeline-empty">暂无时间线数据</p>
      </section>
    `;
  }

  const list = items
    .map((item) => {
      const missing = hasMissingField(item);
      const missingHtml = missing
        ? '<p class="timeline-warning">字段缺失：请补全 period/title/organization/description</p>'
        : "";
      const period = escapeHtml(toSafeText(item.period));
      const title = escapeHtml(toSafeText(item.title));
      const organization = escapeHtml(toSafeText(item.organization));
      const description = escapeHtml(toSafeText(item.description));

      return `
        <article class="timeline-item${missing ? " is-invalid" : ""}">
          <p class="timeline-period">${period}</p>
          <h4 class="timeline-title">${title}</h4>
          <p class="timeline-organization">${organization}</p>
          <p class="timeline-description">${description}</p>
          ${missingHtml}
        </article>
      `;
    })
    .join("");

  return `
    <section class="timeline-section">
      <h3>${safeSectionTitle}</h3>
      <div class="timeline-list">${list}</div>
    </section>
  `;
}
