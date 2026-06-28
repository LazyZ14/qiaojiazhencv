import { useState, useEffect } from 'react'
import './App.css'

const NAV = [
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: 'Demo', href: '#demos' },
  { label: '能力', href: '#skills' },
  { label: '联系', href: '#contact' },
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">

      {/* ── Navigation ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <span className="nav-logo">QIAO</span>
        <ul className="nav-links">
          {NAV.map(item => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">联系我</a>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <div className="snap-panel fit">
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow-1" />
          <div className="hero-glow-2" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Hong Kong Polytechnic University · MSc Smart Manufacturing</p>
          <h1 className="hero-title">乔家桢</h1>
          <p className="hero-role">AI Agent 开发实习生</p>
          <p className="hero-desc">
            专注于大语言模型驱动的智能 Agent 系统设计与全栈实现。<br />
            具备从后端 API 到 Unity 实时通信的完整交付能力。
          </p>
          <div className="hero-intern">
            <span>每周 5 天</span><span className="hero-sep">·</span>
            <span>实习 3 个月以上</span><span className="hero-sep">·</span>
            <span>随时到岗</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">查看项目</a>
            <a href="#contact" className="btn-outline">联系我</a>
          </div>
        </div>
        <div className="hero-scroll"><span>SCROLL</span><div className="scroll-line" /></div>
      </section>
      </div>

      {/* ═══════════════════════════════════════════
          ABOUT
          ═══════════════════════════════════════════ */}
      <div className="snap-panel overflow">
      <section className="section" id="about">
        <div className="section-label">ABOUT</div>

        <div className="about-layout">
          <div className="about-main">
            <h2 className="section-title">智能制造 × AI Agent 交叉背景</h2>
            <p className="about-text">
              硕士阶段就读于香港理工大学智能制造专业，研究方向为大语言模型驱动的智能导航 Agent 系统。
              RA 项目期间独立设计并全栈实现了车载 AR-HUD 智能导航系统，覆盖意图识别、个性化推荐、A* 路径规划与 YOLO 视觉定位全链路。
              擅长使用 AI Coding 工具快速验证想法、构建原型。
            </p>
            <div className="about-contact">
              <a href="mailto:1158444038@qq.com">1158444038@qq.com</a>
              <span className="sep">·</span>
              <span>+86 15731131126</span>
              <span className="sep">·</span>
              <span>广东省深圳市</span>
            </div>
          </div>

          <div className="about-edu">
            <div className="edu-item">
              <div className="edu-year">2025 — Present</div>
              <div className="edu-school">香港理工大学 · 工业及系统工程学系</div>
              <div className="edu-degree">智能制造专业 · 硕士（在读）</div>
              <div className="edu-courses">Cyber-Physical Industry 4.0 Systems (A-) · Industrial Metaverse (A) · Industrial Prompt Engineering (A-)</div>
            </div>
            <div className="edu-item">
              <div className="edu-year">2020 — 2024</div>
              <div className="edu-school">河北工业大学 · 人工智能学院</div>
              <div className="edu-degree">计算机科学与技术专业 · 工学学士</div>
              <div className="edu-stats">
                <div className="stat-box"><span className="stat-num">3.28</span><span className="stat-label">GPA / 4.0</span></div>
                <div className="stat-box"><span className="stat-num">85.03</span><span className="stat-label">均分 / 100</span></div>
                <div className="stat-box"><span className="stat-num">502</span><span className="stat-label">CET-6</span></div>
                <div className="stat-box"><span className="stat-num">6.0</span><span className="stat-label">IELTS</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skill-tags">
          <span>Python</span><span>FastAPI</span><span>Ollama</span>
          <span>PyTorch</span><span>LangChain</span><span>Docker</span>
          <span>Git</span><span>MySQL</span><span>Linux</span>
        </div>
      </section>
      </div>

      {/* ═══════════════════════════════════════════
          PROJECTS
          ═══════════════════════════════════════════ */}
      <div className="snap-panel overflow">
      <section className="section" id="projects">
        <div className="section-label">PROJECTS</div>
        <h2 className="section-title-big">科研与项目经历</h2>

        <div className="project-list">
          {/* AR-HUD */}
          <div className="project-detail">
            <div className="proj-header-row">
              <span className="proj-num">01</span>
              <div>
                <h3 className="proj-title">车载 AR-HUD 智能导航系统</h3>
                <p className="proj-sub">香港理工大学 RA 项目 · 独立设计并全栈实现</p>
              </div>
            </div>
            <ul className="proj-bullets">
              <li>设计并实现面向驾驶场景的智能导航 Agent，支持自然语言意图理解，覆盖餐饮、饮品、停车、便利店、休息、服务 6 大导航需求类别</li>
              <li>基于 OpenStreetMap 香港尖沙咀真实地图数据（683 POI，7017 路网节点）完成端到端验证，串联意图识别、个性化推荐、A* 路径规划、YOLO-World 视觉定位四大模块</li>
              <li>设计三阶段对话式交互流程（输入需求→浏览推荐卡片→确认导航），AR-HUD 透明窗口叠加实时路径线和目的地标记，减少驾驶分心</li>
              <li>引入时间衰减偏好模型，区分用户短期行为与长期偏好，结合 A* 路网距离实现个性化推荐排序</li>
              <li>Unity 仿真环境开发：基于 OSM 尖沙咀真实路网数据，射线扫描自动生成路点拓扑图（239 节点），邻近距离自动构建连通图，导出为 Python 端 A* 导航图数据</li>
              <li>实现 Unity ↔ Python WebSocket 双向实时通信：每 100ms 上报车辆位姿，屏幕空间投影计算 2D 叠加坐标回传 AR-HUD overlay 实时渲染导航线；支持断线自动重连</li>
              <li>实现 Camera → JPEG 实时帧推流（10 fps），供 Python 端 YOLO 视觉模块检测目标店铺/停车场驱动 AR 高亮标注；车辆物理操控与多视角跟随系统</li>
            </ul>
            <div className="proj-tech">
              <span>Python</span><span>FastAPI</span><span>Ollama</span><span>YOLO-World</span><span>A*</span><span>WebSocket</span><span>Unity</span>
            </div>
          </div>

          {/* RAG */}
          <div className="project-detail">
            <div className="proj-header-row">
              <span className="proj-num">02</span>
              <div>
                <h3 className="proj-title">基于 RAG 的智能文档问答系统</h3>
                <p className="proj-sub">个人项目</p>
              </div>
            </div>
            <ul className="proj-bullets">
              <li>从零构建 RAG 完整链路：PDF/DOCX/TXT 文档加载 → 递归分块 → Ollama Embedding → Chroma 向量存储 → DeepSeek 大模型生成答案</li>
              <li>支持流式输出与引用来源标注，使用 Streamlit 搭建 Web 交互界面</li>
              <li>深入理解 RAG 各环节（分块策略、Embedding 模型、检索 Top-K）对回答质量的量化影响，理解"RAG 降低但未消除幻觉"</li>
            </ul>
            <div className="proj-tech">
              <span>Python</span><span>LangChain</span><span>Chroma</span><span>DeepSeek API</span><span>Streamlit</span>
            </div>
          </div>

          {/* HGNN */}
          <div className="project-detail">
            <div className="proj-header-row">
              <span className="proj-num">03</span>
              <div>
                <h3 className="proj-title">基于超图卷积神经网络的脑影像纵向分析</h3>
                <p className="proj-sub">河北工业大学毕业设计</p>
              </div>
            </div>
            <ul className="proj-bullets">
              <li>针对脑影像高维稀疏、传统 GNN 无法建模高阶关系，设计超图结构替代普通图——每条超边可连接 3+ 脑区节点，捕捉多脑区协同模式</li>
              <li>KNN 构建超图关联矩阵 + 皮尔逊系数加权策略，ADNI 数据集上分类准确率优于基线 GCN</li>
            </ul>
            <div className="proj-tech">
              <span>PyTorch</span><span>HGNN</span>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ═══════════════════════════════════════════
          DEMOS — video embed placeholders
          ═══════════════════════════════════════════ */}
      <div className="snap-panel overflow">
      <section className="section" id="demos">
        <div className="section-label">DEMO</div>
        <h2 className="section-title-big">项目演示</h2>

        <div className="demo-grid">
          {/* AR-HUD Demo */}
          <div className="demo-block">
            <h3 className="demo-title">
              <span className="demo-num">01</span>
              车载 AR-HUD 智能导航
            </h3>
            <p className="demo-desc">自然语言输入 → 意图识别 → 个性化推荐 → A* 路径规划 → Unity AR 导航渲染，完整交互流程演示</p>
            <div className="demo-player">
              <video controls preload="none" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',borderRadius:'10px'}}>
                <source src={import.meta.env.BASE_URL + "ar-hud-demo.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* RAG Demo */}
          <div className="demo-block">
            <h3 className="demo-title">
              <span className="demo-num">02</span>
              基于 RAG 的智能文档问答
            </h3>
            <p className="demo-desc">Streamlit 交互界面 · 文档上传 → 向量检索 → DeepSeek 流式生成 · 引用来源标注</p>
            <div className="demo-player">
              <video controls preload="none" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',borderRadius:'10px'}}>
                <source src={import.meta.env.BASE_URL + "rag-demo.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ═══════════════════════════════════════════
          STRENGTHS
          ═══════════════════════════════════════════ */}
      <div className="snap-panel fit">
      <section className="section" id="skills">
        <div className="section-label">STRENGTHS</div>
        <h2 className="section-title-big">个人优势</h2>

        <div className="strength-grid">
          <div className="strength-card">
            <div className="strength-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>交叉学科背景</h3>
            <p>计算机科学本科 + 智能制造硕士，从工程实践和 AI 技术双重角度理解问题，具备将 Agent 落地到工业场景的独特优势。</p>
          </div>

          <div className="strength-card">
            <div className="strength-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3>全栈开发能力</h3>
            <p>从后端 FastAPI 到前端 Streamlit、从本地模型部署到 Unity 实时通信的完整交付能力，RA 期间独立完成全链路系统。</p>
          </div>

          <div className="strength-card">
            <div className="strength-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>AI 工具驱动开发</h3>
            <p>熟练掌握 Claude Code / Cursor 等 AI Coding 工具，能够快速构建 Agent 应用原型，数小时内从想法到可运行 Demo。</p>
          </div>

          <div className="strength-card">
            <div className="strength-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>语言与学习能力</h3>
            <p>IELTS 6.0 · CET-6 502 · 法语（基础）。保持对前沿 AI 产品的持续体验与技术动态的紧密跟踪。</p>
          </div>
        </div>
      </section>
      </div>

      {/* ═══════════════════════════════════════════
          AI CODING
          ═══════════════════════════════════════════ */}
      <div className="snap-panel overflow">
      <section className="section" id="aicoding">
        <div className="section-label">AI CODING</div>
        <h2 className="section-title-big">AI 辅助开发实践</h2>

        <div className="aicoding-block">
          <h3 className="aicoding-subtitle">我的 AI 协作流程</h3>
          <p>
            经过 AR-HUD 和 RAG 两个项目的实战，我已经形成了一套比较固定的 AI 协作方式，整个过程是反复迭代的——不是一次性写完就完事：
          </p>
          <div className="aicoding-flow">
            <div className="flow-step">
              <span className="flow-icon">1</span>
              <div>
                <strong>搭建框架</strong>
                <p>先把整体架构想清楚——有哪些模块、数据怎么流、接口怎么定义。这一步跟 AI 反复讨论方案，它帮我梳理不同技术路线的取舍。比如 AR-HUD 最终确定 REST 负责请求响应、WebSocket 负责实时推送，就是讨论出来的。</p>
              </div>
            </div>
            <div className="flow-step">
              <span className="flow-icon">2</span>
              <div>
                <strong>分模块实现</strong>
                <p>一个模块一个模块来——先把核心链路跑通，再加周边功能。每个模块明确告诉 AI 输入输出是什么、边界条件有哪些，让它帮我生成初版代码，我在本地跑起来看效果。</p>
              </div>
            </div>
            <div className="flow-step">
              <span className="flow-icon">3</span>
              <div>
                <strong>验证与调试</strong>
                <p>跑通之后就是各种边界情况和 bug。A* 路点图不连通、Unity WebSocket 断线不重连、YOLO 检测不到中文名——这些问题我会把报错信息和日志丢给 AI，让它帮忙定位根因。</p>
              </div>
            </div>
            <div className="flow-step">
              <span className="flow-icon">4</span>
              <div>
                <strong>修改与迭代</strong>
                <p>AI 给的建议不是每次都对，有时候看起来合理实际跑不通。这时候我去翻源码和文档、确认后再让它重新出方案，一轮一轮直到问题解决。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="aicoding-block">
          <h3 className="aicoding-subtitle">常用工具与插件</h3>
          <div className="aicoding-tool-list">
            <div className="aicoding-tool-item">
              <span className="tool-name">Claude Code</span>
              <span className="tool-desc">主力开发环境 — 架构讨论、编码实现、调试定位、文档阅读、项目管理</span>
            </div>
            <div className="aicoding-tool-item">
              <span className="tool-name">Superpowers 插件</span>
              <span className="tool-desc">Brainstorming 梳理需求与方案 · Writing Plans 制定实施计划 · Subagent-Driven Development 分派独立任务并行推进 · Systematic Debugging 系统化定位 bug · Verification Before Completion 完成后自动验证</span>
            </div>
            <div className="aicoding-tool-item">
              <span className="tool-name">Cursor</span>
              <span className="tool-desc">轻量修改与快速补全</span>
            </div>
            <div className="aicoding-tool-item">
              <span className="tool-name">V0 / Bolt</span>
              <span className="tool-desc">前端原型快速生成（本网站即由 V0 辅助搭建初版）</span>
            </div>
          </div>
        </div>

        <div className="aicoding-block">
          <h3 className="aicoding-subtitle">实际项目案例</h3>
          <div className="aicoding-case">
            <h4>AR-HUD 智能导航系统</h4>
            <p>
              这是 AI 协作最深的一个项目。<strong>搭建框架</strong>阶段，FastAPI + WebSocket 的双通道架构是和 Claude Code 反复讨论确定的——REST 做意图识别和推荐请求，WebSocket 长连接处理 Unity 实时位置上报和导航推送。编写 <strong>CLAUDE.md</strong> 让 AI 理解项目全貌（文件职责、环境配置、数据流、通信协议），后续每次对话都能直接进入具体问题。
            </p>
            <p>
              关键卡点基本都是这样解决的：A* 路径规划写完发现部分路点图不连通 → 跟 AI 一起分析 waypoints.json 邻接表 → 定位到 RoadScanner 扫描参数问题 → 调整 gridSize 和 linkDist → 重新扫描导出 → 验证通过。Unity C# WebSocket 客户端（System.Net.WebSockets）之前没写过 → AI 帮我理清异步接收循环、主线程调度和断线重连的套路 → 在本地跑通后针对实际场景调整。macOS 的 AR 透明 overlay 最头疼——PyObjC 框架文档少，基本是跟 AI 对着 Apple 开发者文档一行行试出来的。
            </p>
          </div>
          <div className="aicoding-case">
            <h4>RAG 智能文档问答系统</h4>
            <p>
              第一天<strong>搭建框架</strong>：AI 帮我串起 LangChain 文档加载器 → 递归分块器 → Ollama Embedding → Chroma 向量存储的完整链路。第二天<strong>实现与验证</strong>：接入 DeepSeek API 流式输出，Streamlit 搭界面。然后反复<strong>修改迭代</strong>：分块策略的 chunk_size 和 overlap 调了几版，每次都是我看了检索结果后决定怎么改，AI 帮我改代码。
            </p>
          </div>
          <div className="aicoding-case">
            <h4>本项目网站</h4>
            <p>
              就是你现在看到的这个页面。<strong>搭建框架</strong>：先用 V0 生成初版 React 页面 → <strong>实现</strong>：在 Claude Code 下从头重写，调整布局、配色、内容 → <strong>验证修改</strong>：反复调整直到满意。从零到当前版本，全程 AI 驱动。
            </p>
          </div>
        </div>

        <div className="aicoding-note">
          <p>
            我的经验是：AI 帮我把"从 0 到 1"加速了很多，但最终做判断、定方案、验证结果的还是自己。它有时候给出的方案看起来合理但实际跑不通，这时候需要自己去翻源码和文档。现在的我已经非常习惯把 AI 作为开发流程的一部分：<strong>先讨论方向 → 确定方案 → 分模块实现 → 验证 → 修改 → 循环</strong>。
          </p>
        </div>
      </section>
      </div>

      {/* ═══════════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════════ */}
      <div className="snap-panel fit">
      <section className="contact" id="contact">
        <div className="contact-bg"><div className="contact-glow" /></div>
        <div className="contact-content">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h2 className="contact-title">Let's work<br />together</h2>
          <div className="contact-info">
            <a href="mailto:1158444038@qq.com" className="contact-link">
              <span className="contact-label">Email</span>
              <span className="contact-value">1158444038@qq.com</span>
            </a>
            <div className="contact-link">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+86 15731131126</span>
            </div>
            <div className="contact-link">
              <span className="contact-label">Location</span>
              <span className="contact-value">广东省深圳市</span>
            </div>
          </div>
          <p className="contact-footer">© 2026 乔家桢</p>
        </div>
      </section>
      </div>
    </div>
  )
}

export default App
