import React from 'react'
import Portfolio from '../components/Portfolio'
import { getProjects, getServices } from '../lib/api'

export default async function Page() {
  const projects = await getProjects()
  const services = await getServices()

  return <Portfolio projects={projects} services={services} />
}