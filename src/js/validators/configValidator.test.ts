import { describe, expect, it } from "vitest";
import {
  validateArticleConfig,
  validateLifeConfig,
  validateSiteConfig,
  validateTimelineConfig,
  validateTechStackGroups,
  validateZhihuProfileUrl
} from "./configValidator";

describe("validateArticleConfig", () => {
  it("合法文章配置可通过校验", () => {
    const input = [
      {
        title: "文章标题",
        summary: "文章摘要",
        date: "2026-04-30",
        tags: ["前端", "工程化"],
        url: "https://example.com/article"
      }
    ];

    expect(() => validateArticleConfig(input)).not.toThrow();
  });

  it("字段缺失时报错并包含字段名", () => {
    const requiredFields = ["title", "summary", "date", "tags", "url"] as const;

    for (const fieldName of requiredFields) {
      const badItem = {
        title: "文章标题",
        summary: "文章摘要",
        date: "2026-04-30",
        tags: ["前端"],
        url: "https://example.com/article"
      } as Record<string, unknown>;

      delete badItem[fieldName];

      expect(() => validateArticleConfig([badItem])).toThrowError(
        new RegExp(fieldName)
      );
    }
  });
});

describe("validateTechStackGroups", () => {
  it("key 为字符串且 value 为字符串数组时通过", () => {
    const input = {
      前端: ["TypeScript", "React"],
      工程化: ["Vite", "Vitest"]
    };

    expect(() => validateTechStackGroups(input)).not.toThrow();
  });

  it("value 不是字符串数组时报可读错误", () => {
    const badInput = {
      前端: ["TypeScript", 123]
    };

    expect(() => validateTechStackGroups(badInput)).toThrowError(/前端\.1/);
  });
});

describe("validateLifeConfig", () => {
  it("cover 缺失时允许通过（走占位图逻辑）", () => {
    const input = [
      {
        type: "旅游",
        title: "旅行记录",
        date: "2026-04-30",
        summary: "一次短途出行"
      }
    ];

    expect(() => validateLifeConfig(input)).not.toThrow();
  });

  it("type/title/date/summary 缺失时报错并包含字段名", () => {
    const requiredFields = ["type", "title", "date", "summary"] as const;

    for (const fieldName of requiredFields) {
      const badItem = {
        type: "旅游",
        title: "旅行记录",
        date: "2026-04-30",
        summary: "一次短途出行",
        cover: ""
      } as Record<string, unknown>;

      delete badItem[fieldName];

      expect(() => validateLifeConfig([badItem])).toThrowError(
        new RegExp(fieldName)
      );
    }
  });
});

describe("validateTimelineConfig", () => {
  it("合法时间线配置可通过", () => {
    const input = [
      {
        period: "2024 - 至今",
        title: "前端工程师",
        organization: "星辰科技",
        description: "负责页面开发"
      }
    ];

    expect(() => validateTimelineConfig(input)).not.toThrow();
  });

  it("字段缺失时报错并带字段名", () => {
    const badInput = [
      {
        period: "2024 - 至今",
        title: "前端工程师",
        organization: "星辰科技"
      }
    ];

    expect(() => validateTimelineConfig(badInput)).toThrowError(/description/);
  });
});

describe("validateSiteConfig", () => {
  it("合法站点配置可通过", () => {
    const input = {
      about: {
        educationTitle: "学历经历",
        workTitle: "工作经历"
      },
      learning: {
        zhihuButtonText: "访问我的知乎主页",
        zhihuInvalidText: "知乎主页链接暂不可用",
        techStackTitle: "技术栈"
      },
      life: {
        sectionLabel: "生活记录列表"
      },
      errors: {
        invalidConfigMessage: "配置校验失败"
      }
    };

    expect(() => validateSiteConfig(input)).not.toThrow();
  });

  it("缺失顶层字段时报错并带字段名", () => {
    const badInput = {
      about: {
        educationTitle: "学历经历",
        workTitle: "工作经历"
      },
      learning: {
        zhihuButtonText: "访问我的知乎主页",
        zhihuInvalidText: "知乎主页链接暂不可用",
        techStackTitle: "技术栈"
      },
      life: {
        sectionLabel: "生活记录列表"
      }
    };

    expect(() => validateSiteConfig(badInput)).toThrowError(/errors/);
  });
});

describe("validateZhihuProfileUrl", () => {
  it("合法 http(s) 链接可通过", () => {
    expect(() => validateZhihuProfileUrl("https://www.zhihu.com/people/demo")).not.toThrow();
  });

  it("空字符串或非 http(s) 链接时报错", () => {
    expect(() => validateZhihuProfileUrl("   ")).toThrowError(/zhihuProfileUrl/);
    expect(() => validateZhihuProfileUrl("ftp://example.com")).toThrowError(
      /zhihuProfileUrl/
    );
  });
});
