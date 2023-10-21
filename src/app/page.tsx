'use client'

import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    redirect("https://www.fernandobereza.tech/ServerRender")
  }, [])

  return (
    <main/>
  )
}
