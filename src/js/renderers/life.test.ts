import { describe, expect, it } from "vitest";
import { renderLifePosts } from "./life";

describe("renderLifePosts", () => {
  it("空数组时输出空状态", () => {
    const html = renderLifePosts([]);
    expect(html).toContain('class="life-empty"');
    expect(html).toContain("暂无生活记录");
  });

  it("按类型渲染旅游/日记/心得三类卡片", () => {
    const html = renderLifePosts([
      {
        type: "旅游",
        title: "杭州旅行",
        date: "2026-04-01",
        summary: "西湖与灵隐寺",
        cover: "https://example.com/hz.jpg"
      },
      {
        type: "日记",
        title: "周三随笔",
        date: "2026-04-02",
        summary: "记录今天的收获",
        cover: "https://example.com/day.jpg"
      },
      {
        type: "心得",
        title: "效率方法",
        date: "2026-04-03",
        summary: "任务拆分更高效",
        cover: "https://example.com/tip.jpg"
      }
    ]);

    expect((html.match(/class="life-card"/g) || []).length).toBe(3);
    expect(html).toContain("旅游");
    expect(html).toContain("日记");
    expect(html).toContain("心得");
  });

  it("缺图时显示占位图并标记 is-fallback", () => {
    const html = renderLifePosts([
      {
        type: "旅游",
        title: "缺图示例",
        date: "2026-04-04",
        summary: "没有封面图",
        cover: ""
      }
    ]);

    expect(html).toContain('class="life-cover is-fallback"');
    expect(html).toContain("https://via.placeholder.com/640x360?text=No+Image");
  });
});
