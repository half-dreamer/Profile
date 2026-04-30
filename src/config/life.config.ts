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
    title: "苏州周末小旅行",
    date: "2026-04-10",
    summary: "在平江路散步，感受古城慢节奏。",
    cover: "https://images.unsplash.com/photo-1557093795-5f5b0b7e7f5d?w=1200&q=80"
  },
  {
    type: "日记",
    title: "今天学会了测试先行",
    date: "2026-04-15",
    summary: "先写测试再实现，改动更有安全感。",
    cover: ""
  },
  {
    type: "心得",
    title: "保持输出比追求完美更重要",
    date: "2026-04-20",
    summary: "先完成再优化，能持续积累正反馈。",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80"
  }
];
