export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const educationTimeline: TimelineItem[] = [
  {
    period: "2019 - 2023",
    title: "计算机科学与技术",
    organization: "示例大学",
    description: "系统学习前端工程、数据结构与软件设计。"
  },
  {
    period: "2016 - 2019",
    title: "高中",
    organization: "示例中学",
    description: "建立数理基础，参与信息技术社团。"
  }
];

export const workTimeline: TimelineItem[] = [
  {
    period: "2024 - 至今",
    title: "前端工程师",
    organization: "星辰科技",
    description: "负责个人品牌站与企业官网前端开发。"
  },
  {
    period: "2023 - 2024",
    title: "前端实习生",
    organization: "云帆工作室",
    description: "参与组件开发与页面性能优化。"
  }
];
