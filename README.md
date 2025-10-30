# 房贷计算器 Web 应用

这是一个基于 Next.js 14 构建的现代化房贷计算器应用，使用 TypeScript、Tailwind CSS 和 shadcn/ui 组件库开发。

## 🚀 主要功能

- **房贷计算** - 精确计算等额本息还款方式
- **实时计算** - 输入参数即时计算月供和总还款
- **美观界面** - 使用 shadcn/ui 组件库的现代化设计
- **响应式布局** - 适配桌面和移动设备

## 💰 计算参数

- **贷款总额** - 房屋总价减去首付后的贷款金额
- **首付金额** - 购房时支付的首付款
- **贷款利率** - 年化利率（如 4.5%）
- **贷款年限** - 还款期限（10-30年）

## 📊 计算结果

- **每月还款** - 等额本息月供金额
- **总还款额** - 贷款期间总还款金额
- **总支付利息** - 贷款期间支付的利息总额
- **还款总额** - 包含首付的总购房成本

## 🛠️ 技术栈

- **框架**: Next.js 14.0.0 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **包管理**: npm

## 📦 项目依赖

### 核心依赖
- `next` - Next.js 框架
- `react` - React 库
- `typescript` - TypeScript 支持

### UI 组件
- `@radix-ui/react-slot` - Radix UI 基础组件
- `class-variance-authority` - 样式变体管理
- `clsx` - CSS 类名工具
- `tailwind-merge` - Tailwind 类名合并

### 开发工具
- `tailwindcss` - CSS 框架
- `autoprefixer` - CSS 前缀自动添加
- `postcss` - CSS 处理工具
- `eslint` - 代码质量检查

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
├── app/                    # App Router 目录
│   ├── globals.css        # 全局样式和 CSS 变量
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 房贷计算器主页面
├── components/            # 组件目录
│   └── ui/                # shadcn/ui 组件
│       ├── button.tsx     # 按钮组件
│       ├── card.tsx       # 卡片组件
│       ├── input.tsx      # 输入框组件
│       └── label.tsx      # 标签组件
├── lib/                   # 工具函数
│   └── utils.ts           # 通用工具函数
├── public/                # 静态资源
├── package.json           # 项目配置
├── next.config.js        # Next.js 配置
├── tailwind.config.js    # Tailwind CSS 配置
├── tsconfig.json         # TypeScript 配置
├── components.json       # shadcn/ui 配置
└── README.md             # 项目说明
```

## 🎯 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查

## 💡 使用示例

默认预设了一个示例计算：
- 贷款总额：1,000,000 元
- 首付金额：200,000 元
- 贷款利率：4.5%
- 贷款年限：30 年

点击"计算月供"按钮即可看到详细的还款计算结果。

## 🔧 计算公式

应用使用标准的等额本息还款公式：

```
每月还款 = [贷款本金 × 月利率 × (1+月利率)^还款月数] ÷ [(1+月利率)^还款月数-1]
```

其中：
- 月利率 = 年利率 ÷ 12
- 还款月数 = 贷款年限 × 12

## 🌟 功能特色

1. **实时计算** - 参数变更时自动重新计算
2. **格式化显示** - 金额使用人民币格式化
3. **响应式设计** - 完美适配各种屏幕尺寸
4. **现代化 UI** - 基于 shadcn/ui 的优雅界面
5. **类型安全** - 使用 TypeScript 确保代码质量

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署，支持 CI/CD

### 其他平台

- Netlify
- Railway
- 自有服务器

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 📞 联系

如有问题或建议，请通过项目 Issues 页面联系。