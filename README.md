# Next.js Web 应用

这是一个基于 Next.js 14 构建的现代化 Web 应用程序，使用 TypeScript 和 Tailwind CSS 开发。

## 🚀 特性

- **Next.js 14** - 最新的 React 全栈框架
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **App Router** - Next.js 13+ 的新路由系统
- **ESLint** - 代码质量检查

## 📦 技术栈

- **框架**: Next.js 14.0.0
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **包管理**: npm
- **开发工具**: ESLint

## 🛠️ 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
next-web/
├── app/                 # App Router 目录
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局组件
│   └── page.tsx        # 首页组件
├── public/             # 静态资源
├── package.json        # 项目配置
├── next.config.js      # Next.js 配置
├── tailwind.config.js  # Tailwind CSS 配置
├── tsconfig.json       # TypeScript 配置
└── README.md          # 项目说明
```

## 🎯 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查

## 🌟 下一步

这个项目是一个基础的 Next.js 模板，你可以：

1. 添加新的页面和组件
2. 集成数据库和 API 路由
3. 添加身份验证功能
4. 部署到 Vercel 或其他平台

## 📄 许可证

MIT License