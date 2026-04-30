export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const educationTimeline: TimelineItem[] = [
  {
    period: "2021.09 - 2025.06",
    title: "本科 · 生物医学工程（EE 专业）",
    organization: "浙江大学 · 中国杭州",
    description:
      "系统学习计算机网络、操作系统、体系结构、数据库等课程，并持续进行工程化实践。"
  }
];

export const workTimeline: TimelineItem[] = [
  {
    period: "2025.07 - 2026.04",
    title: "Java 开发工程师｜国际化金融-巴西支付",
    organization: "滴滴 · 中国上海",
    description:
      "负责 99Pay 账户领域能力建设，主导开户链路重构，P95 从 33s 降至 17s，成功率从 96% 提升到 99.6%。"
  },
  {
    period: "2024.07 - 2024.10",
    title: "C++ 开发实习生｜引擎架构-搜索推荐",
    organization: "小红书 · 中国上海",
    description:
      "参与精排引擎特征服务接入，推动从硬编码到配置化特征治理，提升迭代效率。"
  },
  {
    period: "2024.02 - 2024.06",
    title: "基础架构开发实习生｜高性能数据平台",
    organization: "龙旗科技（量化方向）· 中国杭州",
    description:
      "开发高性能行情回放器并参与类 LSM 存储引擎建设，回放性能提升到原基线 11~12 倍。"
  }
];
