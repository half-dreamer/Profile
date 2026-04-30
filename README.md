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

## 当前代码文件（初始版本）

- `index.html`
- `styles.css`
- `script.js`

> 后续将按开发计划扩展为 `about.html`、`learning.html`、`life.html` 等多页面结构。

## 运行方式

1. 打开项目目录
2. 双击 `index.html` 在浏览器预览
3. 修改页面内容后刷新浏览器查看变化

## GitHub Pages 发布（目标流程）

1. 新建 GitHub 仓库并推送代码
2. 打开仓库 `Settings` -> `Pages`
3. `Source` 选择 `Deploy from a branch`
4. 选择 `main` 分支与根目录 `/root`
5. 保存后等待部署完成，访问生成的公开 URL

## 维护建议

- 内容改动优先更新数据文件（后续实现）
- 每次改动后执行 `TEST_PLAN.md` 的核心用例
- 在 `DEV_SPEC.md` 的“项目进度”中勾选已完成项
