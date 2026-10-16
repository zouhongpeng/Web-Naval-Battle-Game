# 项目上下文

## 项目概览

- 项目名：Web 海战游戏——3D 多人舰船对战。
- 当前进度：阶段〇已完成，包含 React 3D 海洋场景、占位舰船与港口 UI 骨架。
- 技术栈：Vite 7、React 19、TypeScript 5、Three.js、@react-three/fiber、@react-three/drei、Tailwind CSS 3、Express、Socket.IO、better-sqlite3。
- 包管理器：仅允许使用 pnpm，禁止 npm 或 yarn。

## 常用命令

- 安装依赖：`pnpm install`
- 新增依赖：`pnpm add <package>`
- 新增开发依赖：`pnpm add -D <package>`
- 开发服务：`pnpm run dev`
- 类型检查：`pnpm run ts-check`
- ESLint：`pnpm run lint:build`
- Stylelint：`pnpm run lint:style`
- 生产构建：`pnpm run build`
- 生产启动：`pnpm run start`

## 目录结构

```text
├── client/                    # 前端应用根目录（Vite root）
│   ├── index.html             # HTML 入口
│   └── src/
│       ├── components/        # React 界面组件
│       ├── game/              # Three.js / R3F 游戏场景组件
│       ├── ui/                # UI 数据、Token 关联样式与展示辅助
│       ├── App.tsx            # 应用根组件
│       ├── index.css          # Tailwind 入口与全局样式
│       └── index.tsx          # React 挂载入口
├── server/                    # Express 服务端
│   ├── routes/                # REST API 路由
│   ├── server.ts              # HTTP 服务入口
│   └── vite.ts                # Vite 中间件 / 静态资源集成
├── shared/                    # 前后端共享类型定义
│   └── ship.ts                # 舰船数据契约
├── scripts/                   # 沙箱构建与启动脚本
├── DESIGN.md                  # 视觉与交互设计规范
├── tailwind.config.js         # Tailwind 配置
├── tsconfig.json              # TypeScript 配置
├── vite.config.ts             # Vite root、构建目录与 HMR 配置
└── package.json               # 依赖与脚本
```

## 架构约定

- 前端源码统一放在 `client/src/`，不要在项目根目录重新创建 `src/`。
- Vite 的 root 是 `client/`，生产构建输出到项目根目录 `dist/`。
- 前后端共享枚举与接口类型放入 `shared/`，从 `client/src/` 引用时使用 `../../../shared/...`。
- 3D 场景放入 `client/src/game/`，HUD、港口、卡片等界面放入 `client/src/components/`。
- 当前阶段使用基础几何体作为舰船占位模型；阶段一之后再实现航行、射击、同步和战斗逻辑。
- Socket.IO 与 SQLite 已安装，但阶段〇尚未接入运行时逻辑；阶段三再接入 WebSocket，阶段六再落地持久化。

## 视觉规范

- 设计规范以 `DESIGN.md` 为准，任何 UI、3D 配色、动效或响应式调整前必须先阅读。
- 主背景使用深海蓝 `#0A1628`，面板使用海军蓝 `#122240`，强调色使用冰蓝 `#4A9EFF`。
- UI 字体使用系统无衬线字体栈，数值与数据标签使用等宽字体栈。
- 禁止花哨渐变、卡通化、高饱和霓虹和过度发光。

## 编码规范

- TypeScript 保持 `strict` 模式；禁止隐式 `any` 和 `as any`。
- React 19 项目中不默认依赖全局 `JSX.Element`；函数组件可省略返回类型由 TS 推断。
- React 17+ 不需要为 JSX 显式导入 React；只有用到 `useState`、`useRef` 等 Hook 时才导入对应 API。
- 所有函数参数、回调、事件对象、Express `req`/`res` 和 catch 错误必须有明确类型或完成类型收窄。
- 代码中标点符号使用半角，字符串内中文文本除外。
- 新增文件后及时清理未使用导入和过期占位文件。

## 验证要求

- 交付前使用 test_run 执行静态检查；存在 API 路由时，必须同时冒烟测试全部接口。
- 当前 REST 接口：
  - `GET /api/hello`
  - `POST /api/data`
  - `GET /api/health`
- HTTP 200 不等于业务通过，还要检查响应 JSON 或 Header 是否符合预期。
- 测试或服务异常时优先查看完整报错和日志，修复后重新运行失败项，禁止跳过验证。
