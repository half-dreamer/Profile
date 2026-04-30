export type LifePostType = "旅游" | "日记" | "心得";

export type LifePost = {
  type: LifePostType;
  title: string;
  date: string;
  summary: string;
  cover?: string;
};

export const lifePosts: LifePost[] = [
  {
    type: "旅游",
    title: "杭州城市徒步记录",
    date: "2026-04-06",
    summary: "从西湖到玉皇山，一次慢节奏徒步让我重新找回专注与体力边界。",
    cover: "https://images.unsplash.com/photo-1557093795-5f5b0b7e7f5d?w=1200&q=80"
  },
  {
    type: "日记",
    title: "从焦虑到可控的一天",
    date: "2026-04-18",
    summary:
      "把任务拆成可执行小步后，状态明显更稳。完成比完美更重要，节奏比冲刺更重要。",
    cover: ""
  },
  {
    type: "心得",
    title: "工程化思维同样适用于生活",
    date: "2026-04-22",
    summary:
      "先定义目标，再拆解步骤、建立反馈和复盘机制。长期坚持后，复杂问题会变得更可管理。",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80"
  }
];
