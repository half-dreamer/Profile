# 个人主页项目 README

这是一个用于求职 + 个人品牌展示 + 内容沉淀的个人网站项目，支持发布到 GitHub Pages。

## 项目定位

- 网页端优先（PC 体验优先）
- 风格简洁酷炫
- 三页面结构：
  - `关于我`（学历/工作时间线）
  - `学习文章`（知乎入口、文章、技术栈）
  - `生活记录`（旅游/日记/心得）

## 项目文档（均在根目录）

- `DEV_SPEC.md`：开发规格说明（架构、功能、排期、进度）
- `TEST_PLAN.md`：测试文档（测试范围、用例、通过标准）
- `README.md`：本说明文件

## 当前代码文件（已工程化）

- 页面入口：`index.html`、`about.html`、`learning.html`、`life.html`
- 页面逻辑：`src/js/pages/*.ts`
- 渲染器：`src/js/renderers/*.ts`
- 配置文件：`src/config/*.ts`
- 配置校验：`src/js/validators/configValidator.ts`
- E2E：`tests/e2e/smoke.spec.ts`
- E2E 配置：`playwright.config.ts`
- CI/CD：`.github/workflows/deploy.yml`

## 运行方式

1. 安装依赖：`npm install`
2. 本地开发：`npm run dev`
3. 单元测试：`npm run test`
4. 冒烟 E2E（推荐单命令）：`npm run test:e2e`
5. 构建产物：`npm run build`

## GitHub Pages 发布（自动化流程）

1. 推送到 `main` 分支后，GitHub Actions 自动执行：
   - build job：`npm run build` + `npm run test` + `npm run test:e2e`
   - deploy job：发布 `dist` 到 GitHub Pages
2. 在仓库 `Settings -> Pages` 确认来源为 `GitHub Actions`
3. 线上访问地址（占位）：`https://<your-github-username>.github.io/<your-repo-name>/`

## 维护建议

- 内容改动优先更新数据文件（后续实现）
- 每次改动后执行 `TEST_PLAN.md` 的核心用例
- 在 `DEV_SPEC.md` 的“项目进度”中勾选已完成项
