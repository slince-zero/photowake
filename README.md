# PhotoWake

PhotoWake 是一个现代化的 Web 应用程序，采用前后端分离架构设计。

## 预览

![bg](/imgs/bg.png)

## 技术栈

### 前端 (Frontend)

- Next.js 15.0.4 (使用 App Router)
- React 19
- TypeScript
- TailwindCSS
- Clerk (身份认证)【目前已经移除】
- next-intl (国际化)
- Zustand (状态管理)

### 后端 (Backend)

- NestJS
- TypeScript
- ConfigModule (配置管理)

### 基础设施

- Docker & Docker Compose
- Nginx (反向代理)
- GitHub Actions (CI/CD)

### 已实现功能 & 后续计划

- 已实现功能

  - 👉 素材管理
  - 👻 素材选择生成头像
  - 👹 随机生成头像

- 后续计划
  - 头像下载
  - 头像分享
  - 增加各种素材
  - 加入 AI 生成头像

## 项目结构

```
.
├── web/                # 前端项目
├── server/            # 后端项目
├── nginx.conf         # Nginx配置
├── docker-compose.yml # Docker编排配置
└── .github/workflows  # CI/CD配置
```

## 快速开始

### 开发环境

1. 克隆项目

```bash
git clone https://github.com/slince-zero/photowake.git
cd photowake
```

2. 启动前端开发服务器

```bash
cd web
pnpm install
pnpm dev
```

3. 启动后端服务器

```bash
cd server
pnpm install
pnpm start:dev
```

### 使用 Docker 部署

使用 Docker Compose 启动所有服务：

```bash
docker-compose up -d
```

## 主要功能配置

### Clerk 身份认证配置

- 登录页面位于 `web/app/login/[[...rest]]/page.tsx`
- 使用 Clerk 推荐的标准配置方式。

### 国际化配置 (next-intl)

1. 按照[官方文档](https://next-intl.dev/)配置：

   - messages/
   - i18n/
   - middleware.ts

2. 注意事项：
   - Next.js 15.0.4 需要处理异步路由参数。
   - 配置完之后，项目会有一个错误，Route "/[locale]" used `params.locale`. `params` should be awaited before using its properties。这个错误是 Next.js 15.0.4 版本中的一个新要求。错误信息表示在使用动态路由参数 params.locale 之前需要先等待（await）它。这是因为在服务器组件中，params 是一个异步对象。

- 使用以下命令修复 params 异步问题：
  ```bash
  npx @next/codemod@canary next-async-request-api .
  ```
- 键名长度需要适中以确保正常翻译。

## 端口配置

- 前端: 3000
- 后端: 3080
- Nginx: 80

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 许可证

本项目采用 [MIT](./LICENSE) 开源协议。

这意味着你可以：
- ✅ 自由使用
- ✅ 自由修改
- ✅ 自由分发
- ✅ 商业使用

唯一的要求是在使用时保留原始许可证和版权信息。
