export type SiteConfig = {
  about: {
    educationTitle: string;
    workTitle: string;
  };
  learning: {
    zhihuButtonText: string;
    zhihuInvalidText: string;
    techStackTitle: string;
  };
  life: {
    sectionLabel: string;
  };
  errors: {
    invalidConfigMessage: string;
  };
};

export const siteConfig: SiteConfig = {
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
    invalidConfigMessage: "配置校验失败，请检查 src/config/*.ts"
  }
};
