<script setup lang="ts">
const cards = [
  {
    title: '响应式布局',
    description: '使用网格系统快速构建多列布局，自动适配不同屏幕尺寸。',
  },
  {
    title: '交互状态',
    description: '通过 hover、focus-visible、active 等状态类构建精细交互。',
  },
  {
    title: '渐变与阴影',
    description: '组合渐变背景与自定义阴影，打造视觉层次感。',
  },
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 pb-16">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-16 text-slate-100">
      <header class="space-y-4">
        <p class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          TailwindCSS Advanced Demo
        </p>
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="space-y-3">
            <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">
              原子化样式下的高级界面组合
            </h1>
            <p class="max-w-2xl text-sm text-slate-300">
              本页面展示在 Nuxt 4 中使用 TailwindCSS 构建复杂布局、交互与视觉效果的几种常见模式，所有样式均由原子类组合而成。
            </p>
          </div>
          <div class="flex gap-3">
            <button class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand via-brand-blue to-brand-purple px-4 py-2 text-xs font-medium text-white shadow-card transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
              <span class="h-2 w-2 rounded-full bg-white/80" />
              主要操作按钮
            </button>
            <button class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
              次要操作
            </button>
          </div>
        </div>
      </header>

      <section class="grid gap-6 md:grid-cols-[1.2fr_minmax(0,1fr)]">
        <div class="space-y-6">
          <div class="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-card ring-1 ring-slate-800/80">
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-sm font-semibold text-slate-50">布局示例：响应式内容区</h2>
              <span class="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700">md:grid-cols-[1.2fr,1fr]</span>
            </div>
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <div class="flex flex-col justify-between rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-800">
                <div class="space-y-2">
                  <p class="text-xs font-medium uppercase tracking-wide text-slate-400">内容区域</p>
                  <p class="text-sm text-slate-100">
                    使用 <span class="rounded bg-slate-800 px-1.5 py-0.5 text-[11px] font-mono text-emerald-300">flex</span>
                    与 <span class="rounded bg-slate-800 px-1.5 py-0.5 text-[11px] font-mono text-emerald-300">gap</span>
                    组合，实现信息块的快速编排。
                  </p>
                </div>
                <div class="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span class="rounded-full bg-slate-900 px-2 py-1 ring-1 ring-slate-700">flex</span>
                  <span class="rounded-full bg-slate-900 px-2 py-1 ring-1 ring-slate-700">items-center</span>
                  <span class="rounded-full bg-slate-900 px-2 py-1 ring-1 ring-slate-700">justify-between</span>
                  <span class="rounded-full bg-slate-900 px-2 py-1 ring-1 ring-slate-700">space-y-2</span>
                </div>
              </div>
              <div class="flex flex-col justify-between rounded-xl bg-slate-900/40 p-4 ring-1 ring-slate-800">
                <div class="space-y-2">
                  <p class="text-xs font-medium uppercase tracking-wide text-slate-400">侧边栏</p>
                  <p class="text-sm text-slate-100">
                    借助 <span class="rounded bg-slate-800 px-1.5 py-0.5 text-[11px] font-mono text-emerald-300">minmax</span>
                    与自定义网格列，构建随视口变化的侧边信息区。
                  </p>
                </div>
                <div class="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                  <span class="rounded-lg bg-slate-900 px-2 py-1 text-center ring-1 ring-slate-700">sticky</span>
                  <span class="rounded-lg bg-slate-900 px-2 py-1 text-center ring-1 ring-slate-700">top-24</span>
                  <span class="rounded-lg bg-slate-900 px-2 py-1 text-center ring-1 ring-slate-700">md:hidden</span>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-slate-900/60 p-6 ring-1 ring-slate-800">
            <h2 class="text-sm font-semibold text-slate-50">表单示例：无样式表单快速美化</h2>
            <form class="mt-5 grid gap-4 md:grid-cols-2">
              <label class="space-y-1 text-xs font-medium text-slate-200">
                <span>邮箱</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  class="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-brand focus:ring-2 focus:ring-brand/60"
                >
              </label>
              <label class="space-y-1 text-xs font-medium text-slate-200">
                <span>昵称</span>
                <input
                  type="text"
                  placeholder="Arishi Rei"
                  class="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/60"
                >
              </label>
              <label class="md:col-span-2 space-y-1 text-xs font-medium text-slate-200">
                <span>个性签名</span>
                <textarea
                  rows="3"
                  placeholder="使用 TailwindCSS 构建你的下一款产品界面。"
                  class="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/60"
                />
              </label>
              <div class="md:col-span-2 flex items-center justify-between pt-2 text-xs text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="inline-flex h-5 w-9 items-center rounded-full bg-slate-800 p-0.5">
                    <span class="h-4 w-4 translate-x-0 rounded-full bg-emerald-400 transition" />
                  </span>
                  <span>实时预览开启</span>
                </div>
                <button
                  type="button"
                  class="inline-flex items-center gap-1 rounded-lg bg-emerald-500 px-3 py-1.5 text-[11px] font-medium text-emerald-950 shadow-sm transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80"
                >
                  提交表单
                </button>
              </div>
            </form>
          </div>
        </div>

        <aside class="space-y-4 md:sticky md:top-24">
          <div class="rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800">
            <h2 class="text-sm font-semibold text-slate-50">模式速览</h2>
            <p class="mt-2 text-xs text-slate-300">
              下面这些卡片展示了在真实项目中高频使用的组合方式，你可以将其抽取为可复用组件。
            </p>
            <div class="mt-4 grid gap-3">
              <article
                v-for="card in cards"
                :key="card.title"
                class="group flex cursor-pointer flex-col gap-2 rounded-xl bg-slate-900/70 p-3 text-xs text-slate-200 ring-1 ring-slate-800 transition hover:bg-slate-900 hover:text-slate-50 hover:ring-brand/80">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-medium">
                    {{ card.title }}
                  </h3>
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] text-slate-300 ring-1 ring-slate-700 transition group-hover:bg-brand group-hover:text-slate-950 group-hover:ring-brand/90">
                    +
                  </span>
                </div>
                <p class="text-[11px] text-slate-300 group-hover:text-slate-100">
                  {{ card.description }}
                </p>
              </article>
            </div>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 ring-1 ring-slate-800">
            <h2 class="text-sm font-semibold text-slate-50">颜色系统映射</h2>
            <p class="mt-2 text-xs text-slate-300">
              Tailwind 的 <span class="rounded bg-slate-800 px-1.5 py-0.5 text-[11px] font-mono text-emerald-300">theme.extend.colors</span>
              已映射到项目中的主题色配置，可在全局统一使用。
            </p>
            <div class="mt-4 grid grid-cols-3 gap-3 text-[11px] text-slate-200">
              <div class="flex flex-col items-center gap-1">
                <span class="h-10 w-10 rounded-full bg-brand shadow-card" />
                <span>brand</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="h-10 w-10 rounded-full bg-brand-blue shadow-card" />
                <span>brand-blue</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="h-10 w-10 rounded-full bg-brand-purple shadow-card" />
                <span>brand-purple</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="h-10 w-10 rounded-full bg-brand-green shadow-card" />
                <span>brand-green</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="h-10 w-10 rounded-full bg-brand-yellow shadow-card" />
                <span>brand-yellow</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="h-10 w-10 rounded-full bg-brand-cyan shadow-card" />
                <span>brand-cyan</span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  </div>
</template>

