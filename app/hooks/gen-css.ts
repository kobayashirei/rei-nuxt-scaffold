import { promises as fs } from 'node:fs'
import { join } from 'node:path'
// import { generateColorCSS } from './app/utils/gen-css'
import { appearanceConfig } from '@/config/config'

const nuxtAppDir = (dir: string) => {
  return join('app/', dir)
}

const colors = appearanceConfig.colors

const css = generateColorCSS(colors)
const output = join(process.cwd(), nuxtAppDir('assets/styles/theme-colors.css'))

// 确保目录存在
await fs.mkdir(join(process.cwd(), nuxtAppDir('assets')), { recursive: true })
await fs.writeFile(output, css, 'utf-8')

console.log('✨ theme-colors.css 已生成:', output)