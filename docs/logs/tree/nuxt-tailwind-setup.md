# Nuxt 4 TailwindCSS 配置与高级示例

Date: 2025-12-12 20:05

## Actions

1. 配置 TailwindCSS 集成到 Nuxt 4：
   - 在 `nuxt.config.ts` 中新增全局样式引入：`css: ['~/assets/css/tailwind.css']`。
   - 调整 i18n 语言目录配置为 `langDir: 'locales'`，与 `i18n/locales` 结构对齐。

2. 新增 Tailwind 基础样式入口：
   - 创建 `app/assets/css/tailwind.css`，包含 `@tailwind base; @tailwind components; @tailwind utilities;` 三个指令，交由 Nuxt 模块注入构建管线。

3. 定制 Tailwind 主题与设计令牌：
   - 新建 `tailwind.config.ts`：
     - 开启 `darkMode: 'class'`。
     - 在 `theme.extend.colors.brand` 下映射项目中的多套主题色（pink/blue/purple/green/yellow/cyan/red）。
     - 定义 `shadow-card` 作为统一卡片阴影效果，方便在组件中复用。

4. 落地 Tailwind 高级示例页面：
   - 新建页面 `app/pages/tailwind.vue`，展示多个高级用法场景：
     - 响应式两列布局：使用 `grid`、`md:grid-cols-[1.2fr_minmax(0,1fr)]` 等类构建主内容区 + 侧边栏结构。
     - 复杂按钮交互：组合 `bg-gradient-to-r`、`hover:brightness-110`、`focus-visible:ring` 等类实现主次按钮样式与无障碍焦点态。
     - 表单美化：基于原生 `<input>`、`<textarea>`，通过 `focus:border-brand`、`focus:ring-brand/60` 等类实现统一表单视觉与交互反馈。
     - 卡片与分组交互：利用 `group`、`group-hover:` 等模式，实现卡片整体 hover 时内部图标与文字同时联动变化。
     - 颜色系统展示：使用 `bg-brand`、`bg-brand-blue` 等类展示与配置中映射的主题色，帮助验证设计令牌是否生效。

5. 更新结构注册表：
   - 在 `docs/structure.md` 中新增「Styling (TailwindCSS)」小节：
     - 记录模块 `@nuxtjs/tailwindcss`。
     - 登记配置文件 `tailwind.config.ts` 与全局样式入口 `app/assets/css/tailwind.css`。
     - 标注演示页面 `app/pages/tailwind.vue` 作为 Tailwind 高级示例入口。

6. 构建与验证：
   - 运行 `pnpm build`，确认项目在引入 Tailwind 配置与新页面后能够正常构建，输出中包含 Tailwind 相关 chunk，说明集成成功。

