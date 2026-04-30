export type ArticleItem = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  url: string;
};

export type TechStackGroups = Record<string, string[]>;

export const zhihuProfileUrl = "https://www.zhihu.com/people/your-name";

export const articleList: ArticleItem[] = [
  {
    title: "Vite + TypeScript 多页面实践",
    summary: "从零搭建个人站点 MPA，并拆分页面入口脚本。",
    date: "2026-04-25",
    tags: ["Vite", "TypeScript", "MPA"],
    url: "https://zhuanlan.zhihu.com/p/100000001"
  },
  {
    title: "前端工程可维护性清单",
    summary: "通过分层、配置解耦和测试让项目更稳定。",
    date: "2026-04-20",
    tags: ["工程化", "测试", "架构"],
    url: "invalid-link"
  }
];

export const techStackGroups: TechStackGroups = {
  前端: ["TypeScript", "JavaScript", "HTML", "CSS", "React"],
  工程化: ["Vite", "Vitest", "ESLint", "Prettier"],
  工具: ["Git", "GitHub", "Cursor"]
};
