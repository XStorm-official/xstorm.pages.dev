"use client";

import React from 'react'
import dynamic from 'next/dynamic'

const AboutUsContent = dynamic(() => import('./AboutUsContent'), { ssr: false })

export default function AboutPage() {
  return <AboutUsContent />
}