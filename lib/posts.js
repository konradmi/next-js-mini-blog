import { readdir, readFile } from 'fs/promises'
import { marked } from 'marked'

export const getPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8')
  const html = marked(source)
  return {
    body: html
  }
}

export const getSlugs = async () => {
  const files = await readdir('content/posts')
  return files.filter(file => file.endsWith('.md')).map(file => file.slice(0, -3))
}

