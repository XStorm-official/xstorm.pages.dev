import fs from 'fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), 'data')

export async function getProjects() {
  const filePath = path.join(dataDirectory, 'projects.json')
  const fileContents = await fs.promises.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function getServices() {
  const filePath = path.join(dataDirectory, 'services.json')
  const fileContents = await fs.promises.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}