# IMPLEMENTATION_PLAN - 个人主页项目实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 基于 `DEV_SPEC.md` 完成三页面个人主页工程化实现，满足“现代技术栈 + 数据配置解耦 + GitHub Pages 部署”。

**Architecture:** 与 `DEV_SPEC.md` 第 2 节完全对齐：Vite + TypeScript + Tailwind 的 MPA 架构；`View/Logic/Config/Validation` 分层；内容仅存在 `src/config/*.ts`，页面逻辑只负责渲染。

**Tech Stack:** Vite, TypeScript, Tailwind CSS, ESLint, Prettier, Vitest, Playwright, Zod, GitHub Actions

---

## 0. 与 DEV_SPEC 对齐说明（你 review 时重点看这里）

本计划严格参照 `DEV_SPEC.md` 的以下部分：

- **技术实现分点**：对应 `DEV_SPEC.md` 的 `5.1 ~ 5.9`，一一映射为 Task 1 ~ Task 9。
- **项目排期**：按实现分点拆为 5 个执行阶段（见第 2 节），便于你管理进度。
- **开发准则**：完全遵循 `DEV_SPEC.md` 第 6 节代码规范（语义化、命名、样式 token、逻辑解耦、文档同步）。
- **测试计划**：完全映射 `DEV_SPEC.md` 第 7 节测试功能点（7.1 ~ 7.7），每个 Task 均含明确验证步骤与结果标准。

---

## 1. 任务映射矩阵（DEV_SPEC -> 实施任务）

| DEV_SPEC 技术实现分点 | 实施任务 | 核心产出 |
| --- | --- | --- |
| 5.1 三页面结构搭建 | Task 1 | `about.html` / `learning.html` / `life.html` 页面入口 |
| 5.2 导航统一与高亮 | Task 2 | 统一导航渲染器 + active 高亮逻辑 |
| 5.3 时间线组件 | Task 3 | “关于我”时间线渲染器与页面挂载 |
| 5.4 学习文章模块 | Task 4 | 知乎入口 + 文章卡片渲染 |
| 5.5 技术栈模块 | Task 5 | 技术栈分组渲染 |
| 5.6 生活记录模块 | Task 6 | 旅游/日记/心得模块渲染 |
| 5.7 视觉与动效统一 | Task 7 | 主题 token + 统一样式 + 动效优化 |
| 5.8 内容数据集中管理 | Task 8 | `src/config/*.ts` + Zod 校验 + 逻辑解耦 |
| 5.9 GitHub Pages 发布 | Task 9 | CI/CD 工作流 + Pages 部署与回归 |

---

## 2. 项目排期（基于技术实现分点）

> 说明：`DEV_SPEC.md` 当前不单列排期章节，本计划按“技术实现分点执行顺序”提供可落地排期。

- **阶段 A（Day 1）**：Task 1~2（搭好三页面骨架与导航）
- **阶段 B（Day 2）**：Task 3~4（关于我时间线 + 学习文章基础）
- **阶段 C（Day 3）**：Task 5~6（技术栈 + 生活记录）
- **阶段 D（Day 4）**：Task 7~8（视觉统一 + 数据解耦 + 配置校验）
- **阶段 E（Day 5）**：Task 9（部署、回归、文档收尾）

---

## 3. 开发准则（执行约束）

1. **语义化与结构清晰**：HTML 使用语义标签，页面结构可读。
2. **命名一致**：文件/函数命名统一，避免临时命名。
3. **逻辑与数据解耦（强制）**：
   - 页面仅渲染，不硬编码业务文案；
   - 业务内容统一放 `src/config/*.ts`；
   - 配置变更不应修改渲染函数。
4. **样式规范**：设计 token（颜色、间距、字体）集中管理，动效轻量。
5. **测试先行**：关键渲染函数先补单测，再实现；核心路径补 E2E。
6. **文档同步**：每完成一阶段，更新 `DEV_SPEC.md` 进度表与 `TEST_PLAN.md` 执行记录。

---

## 4. 测试计划映射（DEV_SPEC 7.1 ~ 7.7）

| DEV_SPEC 测试项 | 对应任务 | 验收标准 |
| --- | --- | --- |
| 7.1 三页面结构与导航 | Task 1~2 | 页面可访问，导航互跳成功，active 高亮正确 |
| 7.2 关于我时间线 | Task 3 | 时间顺序、字段完整、交互正确 |
| 7.3 学习文章与知乎入口 | Task 4 | 按钮跳转成功，文章卡片信息正确 |
| 7.4 技术栈模块 | Task 5 | 分类展示完整，响应式下可读 |
| 7.5 生活记录模块 | Task 6 | 三类内容完整，缺图兜底生效 |
| 7.6 视觉与兼容性 | Task 7 | Chrome/Safari 视觉一致，动效不影响阅读 |
| 7.7 部署与回归 | Task 9 | GitHub Pages 在线可用，核心流程回归通过 |

---

## 5. 详细实施任务（2-5 分钟粒度）

### Task 1: 三页面结构搭建（对应 DEV_SPEC 5.1）

**Files:**
- Create: `about.html`, `learning.html`, `life.html`
- Modify: `index.html`
- Create: `src/js/pages/about.ts`, `src/js/pages/learning.ts`, `src/js/pages/life.ts`

**Steps:**
- [ ] Step 1: 创建三页面 HTML 骨架（语义化标签 + 挂载点）。
- [ ] Step 2: 在每页接入页面入口脚本。
- [ ] Step 3: 修改 `index.html` 作为默认入口（跳转或导航索引）。
- [ ] Step 4: 启动开发服务并逐页访问。

Run: `npm run dev`  
Expected:
- 接口维度测试：
  - 类型：集成测试（页面入口加载）
  - 命令：`npm run dev`
  - 操作：查看浏览器控制台与终端输出
  - 预期：无模块解析错误、无入口脚本 404、无 TS 运行时报错
  - 类型：静态检查
  - 命令：`ls about.html learning.html life.html src/js/pages/about.ts src/js/pages/learning.ts src/js/pages/life.ts`
  - 预期：上述文件全部存在
- 端到端维度测试：
  - 类型：手工 E2E
  - 命令：`npm run dev`
  - 操作：访问 `/about.html`、`/learning.html`、`/life.html`，并在每页刷新一次
  - 预期：三页均正常渲染，刷新后不出现 404/空白

---

### Task 2: 导航统一与高亮（对应 DEV_SPEC 5.2）

**Files:**
- Create: `src/js/renderers/nav.ts`
- Modify: `src/styles/main.css`
- Modify: `src/js/pages/about.ts`, `src/js/pages/learning.ts`, `src/js/pages/life.ts`

**Steps:**
- [ ] Step 1: 编写 `renderNav(active)` 输出统一导航模板。
- [ ] Step 2: 三页面入口注入导航并传入正确 `active`。
- [ ] Step 3: 完成 active/non-active 视觉样式。
- [ ] Step 4: 手工执行导航互跳校验。

Run: `npm run dev`  
Expected:
- 接口维度测试：
  - 类型：单元测试（推荐新增 `src/js/renderers/nav.test.ts`）
  - 命令：`npm run test`
  - 预期：`renderNav("about")`、`renderNav("learning")`、`renderNav("life")` 都返回包含 3 个导航项的 HTML，并且 active 类名仅命中当前项
  - 类型：静态检查
  - 命令：`npm run test -- nav`
  - 预期：nav 相关测试全部通过
- 端到端维度测试：
  - 类型：手工 E2E
  - 命令：`npm run dev`
  - 操作：从 about -> learning -> life 连续点击导航
  - 预期：每次跳转成功，且当前菜单高亮正确切换

---

### Task 3: 关于我时间线模块（对应 DEV_SPEC 5.3）

**Files:**
- Create: `src/js/renderers/about.ts`
- Modify: `about.html`, `src/js/pages/about.ts`, `src/styles/main.css`
- Create: `src/config/timeline.config.ts`

**Steps:**
- [ ] Step 1: 先写 `renderTimelineSection()` 单测（标题、节点数量、顺序）。
- [ ] Step 2: 实现时间线渲染函数。
- [ ] Step 3: 在 about 页面接入学历与工作时间线配置数据。
- [ ] Step 4: 调整样式并检查交互状态。

Run: `npm run test`  
Expected:
- 接口维度测试：
  - 类型：单元测试（`renderTimelineSection`）
  - 命令：`npm run test -- about`
  - 预期：空数组返回空节点容器；正常数组返回正确节点数量；标题渲染正确
  - 类型：配置校验测试（如启用 Zod）
  - 命令：`npm run test -- configValidator`
  - 预期：字段缺失时抛出可读错误（period/title/organization/description）
- 端到端维度测试：
  - 类型：手工 E2E
  - 命令：`npm run dev`
  - 操作：打开 `/about.html`，检查学历与工作区块
  - 预期：时间线顺序正确，节点样式正常，交互（hover/展开）符合 DEV_SPEC

---

### Task 4: 学习文章模块（对应 DEV_SPEC 5.4）

**Files:**
- Create: `src/js/renderers/learning.ts`
- Modify: `learning.html`, `src/js/pages/learning.ts`
- Create: `src/config/articles.config.ts`

**Steps:**
- [ ] Step 1: 编写 `renderArticleCards()` 渲染测试。
- [ ] Step 2: 接入知乎主页入口按钮。
- [ ] Step 3: 渲染文章卡片并绑定外链。
- [ ] Step 4: 补充空链接兜底展示逻辑。

Run: `npm run test && npm run dev`  
Expected:
- 接口维度测试：
  - 类型：单元测试（`renderArticleCards`）
  - 命令：`npm run test -- learning`
  - 预期：空数组渲染空列表；正常数组渲染对应数量卡片；非法链接触发兜底逻辑
  - 类型：配置结构测试
  - 命令：`npm run test -- configValidator`
  - 预期：`title/summary/date/tags/url` 缺失时校验失败并提示字段名
- 端到端维度测试：
  - 类型：手工 E2E
  - 命令：`npm run dev`
  - 操作：打开 `/learning.html`，点击知乎按钮与文章卡片
  - 预期：知乎主页可打开；有效外链跳转成功；无效外链显示兜底状态

---

### Task 5: 技术栈模块（对应 DEV_SPEC 5.5）

**Files:**
- Modify: `src/js/renderers/learning.ts`
- Modify: `src/js/pages/learning.ts`
- Modify: `src/config/articles.config.ts`

**Steps:**
- [ ] Step 1: 编写 `renderTechStacks()` 单测（分组与标签数量）。
- [ ] Step 2: 按分类渲染技术栈（前端/工程化/工具）。
- [ ] Step 3: 完成标签样式与可读性优化。
- [ ] Step 4: 进行响应式布局测试。

Run: `npm run test`  
Expected:
- 接口维度测试：
  - 类型：单元测试（`renderTechStacks`）
  - 命令：`npm run test -- learning`
  - 预期：空分组不报错；单分组/多分组节点数量正确；分组标题渲染正确
  - 类型：配置格式测试
  - 命令：`npm run test -- configValidator`
  - 预期：分组 key 为字符串、value 为字符串数组，否则校验失败
- 端到端维度测试：
  - 类型：手工 E2E + 响应式检查
  - 命令：`npm run dev`
  - 操作：在浏览器宽度 1440px、1024px、768px 下查看技术栈区
  - 预期：分组可见、标签不重叠、换行后可读

---

### Task 6: 生活记录模块（对应 DEV_SPEC 5.6）

**Files:**
- Create: `src/js/renderers/life.ts`
- Modify: `life.html`, `src/js/pages/life.ts`, `src/styles/main.css`
- Create: `src/config/life.config.ts`

**Steps:**
- [ ] Step 1: 为 `renderLifePosts()` 编写单测（按类型渲染）。
- [ ] Step 2: 渲染旅游/日记/心得三类卡片。
- [ ] Step 3: 增加缺图占位与字段缺失兜底逻辑。
- [ ] Step 4: 执行分类显示与样式校验。

Run: `npm run test && npm run dev`  
Expected:
- 接口维度测试：
  - 类型：单元测试（`renderLifePosts`）
  - 命令：`npm run test -- life`
  - 预期：`type=旅游/日记/心得` 均可渲染；空数组返回空状态容器
  - 类型：配置字段测试
  - 命令：`npm run test -- configValidator`
  - 预期：`type/title/date/summary` 缺失时报错；`cover` 缺失时走占位图逻辑
- 端到端维度测试：
  - 类型：手工 E2E
  - 命令：`npm run dev`
  - 操作：打开 `/life.html`，检查三类卡片并模拟缺图数据
  - 预期：三类内容都能看到；缺图时显示占位，不破版

---

### Task 7: 视觉与动效统一（对应 DEV_SPEC 5.7）

**Files:**
- Modify: `src/styles/main.css`
- Optional Modify: `src/js/pages/*.ts`

**Steps:**
- [ ] Step 1: 定义全局设计 token（颜色、间距、字号、阴影、圆角）。
- [ ] Step 2: 统一卡片、按钮、标题层级样式。
- [ ] Step 3: 增加轻量动效（hover/fade/transition）。
- [ ] Step 4: 在 Chrome 与 Safari 做兼容检查并微调。

Run: `npm run dev`  
Expected:
- 接口维度测试：
  - 类型：样式静态检查
  - 命令：`rg \"--\" src/styles/main.css`
  - 预期：关键 token（颜色、间距、字号）在样式文件集中定义
  - 类型：脚本耦合检查
  - 命令：`rg \"style=\" src/js`
  - 预期：页面脚本中无业务主题强耦合的内联样式拼接
- 端到端维度测试：
  - 类型：手工视觉回归
  - 命令：`npm run dev`
  - 操作：逐页对比 about/learning/life 的卡片、按钮、标题、hover 动效
  - 预期：视觉统一、动效平滑、文本可读性达标

---

### Task 8: 数据配置解耦 + 配置校验（对应 DEV_SPEC 5.8）

**Files:**
- Create: `src/config/site.config.ts`
- Modify/Create: `src/config/timeline.config.ts`, `src/config/articles.config.ts`, `src/config/life.config.ts`
- Create: `src/js/validators/configValidator.ts`
- Modify: `src/js/pages/*.ts`, `src/js/renderers/*.ts`

**Steps:**
- [ ] Step 1: 使用 Zod 建立站点与模块配置 schema。
- [ ] Step 2: 页面入口改为读取 `src/config/*.ts` 后渲染。
- [ ] Step 3: 删除模板和渲染函数中的硬编码业务文案。
- [ ] Step 4: 增加配置缺失字段兜底与错误提示测试。

Run: `npm run test`  
Expected:
- 接口维度测试：
  - 类型：单元测试（配置校验器）
  - 命令：`npm run test -- configValidator`
  - 预期：合法配置通过；非法配置返回明确字段级错误
  - 类型：代码扫描（硬编码检查）
  - 命令：`rg \"你的名字|示例文章|默认文案\" src/js src/*.html`
  - 预期：业务内容仅出现在 `src/config/*.ts`，不散落在渲染逻辑
- 端到端维度测试：
  - 类型：手工 E2E（配置驱动）
  - 命令：`npm run dev`
  - 操作：修改 `src/config/*.ts` 后刷新页面
  - 预期：页面内容按配置变化；非法配置出现可定位报错或兜底提示

---

### Task 9: GitHub Pages 发布与回归（对应 DEV_SPEC 5.9）

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `tests/e2e/smoke.spec.ts`
- Modify: `README.md`, `DEV_SPEC.md`, `TEST_PLAN.md`

**Steps:**
- [ ] Step 1: 新增 GitHub Actions 构建与 Pages 部署工作流。
- [ ] Step 2: 编写 E2E 冒烟测试（页面访问、导航、关键链接）。
- [ ] Step 3: 本地执行 `build + unit test + e2e` 全链路验证。
- [ ] Step 4: 部署后执行线上回归并记录结果。
- [ ] Step 5: 同步更新 `DEV_SPEC.md` 进度表与 `TEST_PLAN.md` 执行记录。

Run: `npm run build && npm run test && npm run test:e2e`  
Expected:
- 接口维度测试：
  - 类型：CI/CD 工作流验证
  - 命令：`npm run build && npm run test && npm run test:e2e`
  - 预期：本地构建、单测、E2E 全绿；工作流配置语法有效
  - 类型：E2E 脚本覆盖验证
  - 命令：`npm run test:e2e`
  - 预期：至少覆盖页面访问、导航切换、关键链接点击
- 端到端维度测试：
  - 类型：线上回归
  - 命令：部署后人工访问 GitHub Pages URL
  - 操作：按“访问 about -> 切换 learning -> 切换 life -> 点击知乎/文章链接”执行
  - 预期：线上三页面可用、核心跳转成功、无阻断性错误

---

## 6. 完成定义（DoD）

当且仅当以下全部满足，项目才算完成：

1. `DEV_SPEC.md` 的 5.1~5.9 对应功能全部完成并在进度表打勾。
2. `DEV_SPEC.md` 的 7.1~7.7 对应测试项全部执行并通过。
3. 页面业务文案全部从 `src/config/*.ts` 读取，无页面硬编码。
4. GitHub Pages 线上地址可访问，核心流程可用。
5. `README.md`、`DEV_SPEC.md`、`TEST_PLAN.md` 与实现状态同步。
