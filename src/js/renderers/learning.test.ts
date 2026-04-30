import { describe, expect, it } from "vitest";
import { renderArticleCards, renderTechStacks } from "./learning";

describe("renderArticleCards", () => {
  it("空数组时输出空状态", () => {
    const html = renderArticleCards([]);

    expect(html).toContain('class="article-list-empty"');
    expect(html).toContain("暂无文章数据");
  });

  it("正常列表时渲染卡片并展示字段", () => {
    const html = renderArticleCards([
      {
        title: "Vite 入门",
        summary: "快速搭建前端工程",
        date: "2026-04-30",
        tags: ["Vite", "工程化"],
        url: "https://zhuanlan.zhihu.com/p/123456"
      }
    ]);

    expect((html.match(/class="article-card"/g) || []).length).toBe(1);
    expect(html).toContain("Vite 入门");
    expect(html).toContain("快速搭建前端工程");
    expect(html).toContain("2026-04-30");
    expect(html).toContain("Vite");
    expect(html).toContain("href=\"https://zhuanlan.zhihu.com/p/123456\"");
  });

  it("非法链接时走兜底展示", () => {
    const html = renderArticleCards([
      {
        title: "坏链接示例",
        summary: "用于测试兜底",
        date: "2026-04-30",
        tags: ["测试"],
        url: "not-a-url"
      }
    ]);

    expect(html).toContain('class="article-link is-disabled"');
    expect(html).toContain("链接暂不可用");
    expect(html).not.toContain('href="not-a-url"');
  });

  it("文本内容会被转义，避免注入", () => {
    const html = renderArticleCards([
      {
        title: "<script>alert(1)</script>",
        summary: "a & b",
        date: "2026-04-30",
        tags: ["<img>", "\"tag\""],
        url: "https://example.com/?q=a&b=1"
      }
    ]);

    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
    expect(html).toContain("a &amp; b");
    expect(html).toContain("&lt;img&gt;");
    expect(html).toContain("&quot;tag&quot;");
    expect(html).toContain("href=\"https://example.com/?q=a&amp;b=1\"");
  });
});

describe("renderTechStacks", () => {
  it("空分组时输出空状态", () => {
    const html = renderTechStacks({});
    expect(html).toContain('class="tech-stack-empty"');
    expect(html).toContain("暂无技术栈数据");
  });

  it("多分组时输出分组标题与标签", () => {
    const html = renderTechStacks({
      前端: ["TypeScript", "React"],
      工程化: ["Vite"]
    });

    expect((html.match(/class="tech-group"/g) || []).length).toBe(2);
    expect(html).toContain("前端");
    expect(html).toContain("工程化");
    expect(html).toContain("TypeScript");
    expect(html).toContain("React");
    expect(html).toContain("Vite");
  });
});
