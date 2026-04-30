export type NavPage = "about" | "learning" | "life";

type NavItem = {
  key: NavPage;
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { key: "about", label: "关于我", href: "./about.html" },
  { key: "learning", label: "学习文章", href: "./learning.html" },
  { key: "life", label: "生活记录", href: "./life.html" }
];

export function renderNav(active: NavPage): string {
  const items = NAV_ITEMS.map((item) => {
    const className =
      item.key === active ? "nav-link active" : "nav-link non-active";
    const ariaCurrent = item.key === active ? ' aria-current="page"' : "";

    return `<a class="${className}" data-page="${item.key}" href="${item.href}"${ariaCurrent}>${item.label}</a>`;
  }).join("");

  return `<div class="site-nav">${items}</div>`;
}
