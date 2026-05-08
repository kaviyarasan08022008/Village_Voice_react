import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PainLayout() {
  return (
    <div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
