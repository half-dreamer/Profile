import { describe, expect, it } from "vitest";
import { renderTimelineSection } from "./about";

describe("renderTimelineSection", () => {
  it("空数组时输出空状态与合法结构", () => {
    const html = renderTimelineSection("学历经历", []);

    expect(html).toContain('class="timeline-section"');
    expect(html).toContain("<h3>学历经历</h3>");
    expect(html).toContain('class="timeline-empty"');
    expect(html).toContain("暂无时间线数据");
  });

  it("正常数组时输出正确标题、节点数量与顺序", () => {
    const html = renderTimelineSection("工作经历", [
      {
        period: "2024 - 至今",
        title: "前端工程师",
        organization: "星辰科技",
        description: "负责核心页面开发"
      },
      {
        period: "2021 - 2024",
        title: "前端开发",
        organization: "云帆工作室",
        description: "参与多端页面维护"
      }
    ]);

    expect(html).toContain("<h3>工作经历</h3>");
    expect((html.match(/class="timeline-item"/g) || []).length).toBe(2);
    expect(html.indexOf("2024 - 至今")).toBeLessThan(html.indexOf("2021 - 2024"));
  });

  it("缺字段时渲染 warning 与 is-invalid", () => {
    const html = renderTimelineSection("工作经历", [
      {
        period: 2024 as unknown as string,
        title: "前端工程师",
        organization: null as unknown as string,
        description: "负责核心页面开发"
      }
    ]);

    expect(html).toContain('class="timeline-item is-invalid"');
    expect(html).toContain('class="timeline-warning"');
    expect(html).toContain("字段缺失");
  });

  it("对文本做 HTML 转义，避免注入", () => {
    const html = renderTimelineSection("<script>", [
      {
        period: "<b>2024</b>",
        title: "前端<script>alert(1)</script>",
        organization: "组织 & 公司",
        description: "\"描述\""
      }
    ]);

    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&lt;b&gt;2024&lt;/b&gt;");
    expect(html).toContain("组织 &amp; 公司");
    expect(html).toContain("&quot;描述&quot;");
  });
});
