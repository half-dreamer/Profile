export type ArticleItem = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  url: string;
};

export type TechStackGroups = Record<string, string[]>;

export const zhihuProfileUrl = "https://www.zhihu.com/people/half-dreamer";

export const articleList: ArticleItem[] = [
  {
    title: "Spec Coding + 自定义 Skill 的 AI 工程化实践",
    summary:
      "结合 Harness 工程思想，沉淀 AI 驱动研发流程，覆盖需求、实现、测试与复盘。",
    date: "2026-03-10",
    tags: ["AI Engineering", "Spec Coding", "Workflow"],
    url: "https://www.zhihu.com/people/half-dreamer"
  },
  {
    title: "多阶段混合检索（BM25 + Dense）工程实现总结",
    summary:
      "围绕 RAG 场景设计检索流水线，包含查询预处理、混合召回、重排与评估闭环。",
    date: "2026-02-18",
    tags: ["RAG", "Retrieval", "BM25", "Dense"],
    url: "https://www.zhihu.com/people/half-dreamer"
  },
  {
    title: "高性能系统优化经验：从链路重构到可观测性",
    summary:
      "总结支付与数据系统中的并发优化、幂等治理、重试策略与全链路监控实践。",
    date: "2026-01-25",
    tags: ["Performance", "Idempotency", "Observability"],
    url: "https://www.zhihu.com/people/half-dreamer"
  }
];

export const techStackGroups: TechStackGroups = {
  语言与基础: ["C/C++", "Java", "Python", "Rust", "SQL"],
  后端与架构: ["Spring", "LiteFlow", "策略模式", "状态机", "幂等与重试"],
  数据与智能: ["RAG", "BM25 + Dense", "Ragas", "MCP Server", "Hive"],
  工程与工具: ["Git", "GitHub", "Vite", "Vitest", "Playwright"]
};
