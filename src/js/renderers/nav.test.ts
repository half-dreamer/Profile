import { describe, expect, it } from "vitest";
import { renderNav } from "./nav";

describe("renderNav", () => {
  it("about/learning/life 都渲染 3 个导航项，且仅当前项为 active", () => {
    const cases = ["about", "learning", "life"] as const;

    for (const active of cases) {
      const html = renderNav(active);
      const anchors = html.match(/<a\b[^>]*>.*?<\/a>/g) || [];
      const activeAnchor = anchors.find(
        (anchor) =>
          anchor.includes(`data-page="${active}"`) &&
          anchor.includes('class="nav-link active"')
      );
      const activeClassCount = anchors.filter((anchor) =>
        anchor.includes('class="nav-link active"')
      ).length;
      const ariaCurrentCount = anchors.filter((anchor) =>
        anchor.includes('aria-current="page"')
      ).length;

      expect(anchors.length).toBe(3);
      expect(activeClassCount).toBe(1);
      expect(activeAnchor).toBeDefined();
      expect(activeAnchor).toContain('aria-current="page"');
      expect(ariaCurrentCount).toBe(1);
    }
  });
});
