'use client'

import { DauCounter } from '@/widgets/dau-counter'
import { DauGraph } from '@/widgets/dau-graph'
import { TopUsers } from '@/widgets/top-users'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

export default function DashboardPage() {
  const layout = {
    lg: [
      { i: 'dau-counter', x: 0, y: 0, w: 1, h: 1 },
      { i: 'dau-graph', x: 1, y: 0, w: 2, h: 1 },
      { i: 'top-users', x: 3, y: 0, w: 1, h: 2 },
    ],
    md: [
      { i: 'dau-counter', x: 0, y: 0, w: 1, h: 1 },
      { i: 'dau-graph', x: 1, y: 0, w: 1, h: 1 },
      { i: 'top-users', x: 0, y: 1, w: 1, h: 2 },
    ],
    sm: [
      { i: 'dau-counter', x: 0, y: 0, w: 1, h: 1 },
      { i: 'dau-graph', x: 0, y: 1, w: 1, h: 1 },
      { i: 'top-users', x: 0, y: 2, w: 1, h: 2 },
    ],
  }

  return (
    <div className="min-h-screen p-8 bg-dot-pattern">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">monitor your app metrics</p>
      </div>
      
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 4, md: 2, sm: 1 }}
        rowHeight={200}
        isDraggable={true}
        isResizable={true}
      >
        <div key="dau-counter">
          <DauCounter />
        </div>
        <div key="dau-graph">
          <DauGraph />
        </div>
        <div key="top-users">
          <TopUsers />
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}
