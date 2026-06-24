# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览

乔家桢的个人简历 + 作品集网站。单页 React 应用，暗色科技风，整屏滑动切换，展示个人背景、项目经历、Demo 演示、AI 辅助开发能力。

- **部署地址**: https://qiaojiazhencv.vercel.app
- **GitHub**: https://github.com/LazyZ14/portfolio-site
- **本地路径**: `/Users/lazyz14/学习资料/实习/简历网站`

## 环境

- Node.js: v25+
- 包管理器: npm
- 框架: React 19 + Vite 8
- 无其他依赖（零外部 UI 库，纯 CSS）

## 启动方式

```bash
cd "/Users/lazyz14/学习资料/实习/简历网站"
npm install
npm run dev
```

开发服务器运行在 `http://localhost:5173`。

## 生产构建

```bash
npm run build    # 输出到 dist/
```

## 部署

GitHub push 到 `main` 分支后，Vercel 自动部署。

```bash
git add -A && git commit -m "描述" && git push
```

## 项目结构

```
简历网站/
├── index.html          # 入口 HTML（Google Fonts 引入）
├── vite.config.js      # Vite 配置
├── package.json
└── src/
    ├── main.jsx         # React 挂载入口
    ├── index.css        # 全局 reset 样式
    ├── App.jsx          # 主组件（各板块 JSX）
    └── App.css          # 全部样式（CSS 变量、布局、响应式）
```

单文件组件架构：`App.jsx` 包含所有板块，`App.css` 包含全部样式。没有路由、没有组件拆分，保持简单。

## 页面板块结构

每个板块用 `<div className="snap-panel">` 包裹，实现 `scroll-snap` 整屏切换：

| 板块 | id | snap 模式 | 内容说明 |
|------|-----|----------|---------|
| Hero | `#hero` | `fit` (居中) | 名字、岗位、实习信息、视频背景占位、SCROLL 提示 |
| About | `#about` | `overflow` (可内部滚动) | 左右两栏：个人介绍 + 教育经历 + 技能标签 |
| Projects | `#projects` | `overflow` | 3 个项目卡片（AR-HUD / RAG / HGNN） |
| Demos | `#demos` | `overflow` | 两个视频占位位（上下排列） |
| Skills | `#skills` | `fit` | 4 张个人优势卡片 |
| AI Coding | `#aicoding` | `overflow` | AI 协作流程 + 工具清单 + 项目案例 |
| Contact | `#contact` | `fit` | 整屏收尾，联系方式 |

## 设计系统

- **背景**: `#050508`（深黑）
- **卡片**: `#0a0a10`
- **边框**: `rgba(255,255,255,0.06)`
- **主色调**: `#6d6ef5`（靛蓝），`#22d3ee`（青）
- **字体**: Inter（正文）+ JetBrains Mono（等宽标签）
- **版心**: 1700px max-width
- **圆角**: 10px

## 注意事项

- 视频占位位在 Demo 板块，HTML 注释中有 `<video>` 模板，后续放入录屏替换即可
- 简历内容需与 Word 版简历 `/Users/lazyz14/学习资料/实习/乔家桢-求职简历.docx` 保持一致
- 网站内容反映用户最新状态：现居深圳、邮箱 `1158444038@qq.com`
- Vercel 项目名为 `qiaojiazhencv`，团队 `lazy-z14`
