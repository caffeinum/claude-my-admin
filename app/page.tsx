'use client'

import { DauCounter } from '@/widgets/dau-counter'
import { DauGraph } from '@/widgets/dau-graph'
import { TopUsers } from '@/widgets/top-users'
import { Chat } from '@/components/chat'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

export default function DashboardPage() {
  const layout = {
    lg: [
      { i: 'general-settings', x: 0, y: 0, w: 1, h: 1 },
      { i: 'appearance-settings', x: 0, y: 1, w: 1, h: 1 },
      { i: 'dau-counter', x: 1, y: 0, w: 1, h: 1 },
      { i: 'dau-graph', x: 1, y: 1, w: 2, h: 1 },
      { i: 'database-server', x: 2, y: 0, w: 1, h: 1 },
      { i: 'web-server', x: 3, y: 0, w: 1, h: 1 },
      { i: 'app-info', x: 3, y: 1, w: 1, h: 1 },
      { i: 'top-users', x: 0, y: 2, w: 2, h: 2 },
    ],
    md: [
      { i: 'general-settings', x: 0, y: 0, w: 1, h: 1 },
      { i: 'appearance-settings', x: 1, y: 0, w: 1, h: 1 },
      { i: 'dau-counter', x: 0, y: 1, w: 1, h: 1 },
      { i: 'dau-graph', x: 1, y: 1, w: 1, h: 1 },
      { i: 'database-server', x: 0, y: 2, w: 1, h: 1 },
      { i: 'web-server', x: 1, y: 2, w: 1, h: 1 },
      { i: 'app-info', x: 0, y: 3, w: 1, h: 1 },
      { i: 'top-users', x: 1, y: 3, w: 1, h: 2 },
    ],
    sm: [
      { i: 'general-settings', x: 0, y: 0, w: 1, h: 1 },
      { i: 'appearance-settings', x: 0, y: 1, w: 1, h: 1 },
      { i: 'dau-counter', x: 0, y: 2, w: 1, h: 1 },
      { i: 'dau-graph', x: 0, y: 3, w: 1, h: 1 },
      { i: 'database-server', x: 0, y: 4, w: 1, h: 1 },
      { i: 'web-server', x: 0, y: 5, w: 1, h: 1 },
      { i: 'app-info', x: 0, y: 6, w: 1, h: 1 },
      { i: 'top-users', x: 0, y: 7, w: 1, h: 2 },
    ],
  }

  return (
    <div className="min-h-screen bg-dot-pattern flex">
      {/* sidebar */}
      <aside className="w-60 bg-[#f8f8f8]/95 backdrop-blur-sm border-r border-[#ddd] flex flex-col">
        <div className="p-4 border-b border-[#ddd]">
          <h1 className="text-2xl font-bold">
            <span className="text-[#e74c3c]">my</span>
            <span className="text-[#f39c12]">Admin</span>
          </h1>
        </div>
        
        <div className="p-3">
          <div className="text-xs font-semibold text-gray-600 mb-2">recent</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">
              <span>📊</span>
              <span>dashboard</span>
            </div>
          </div>
        </div>
        
        <div className="p-3 border-t border-[#ddd]">
          <div className="text-xs font-semibold text-gray-600 mb-2">databases</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">
              <span>🗄️</span>
              <span>production</span>
            </div>
            <div className="flex items-center gap-2 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">
              <span>🗄️</span>
              <span>staging</span>
            </div>
            <div className="flex items-center gap-2 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">
              <span>🗄️</span>
              <span>development</span>
            </div>
          </div>
        </div>
      </aside>

      {/* main content */}
      <div className="flex-1">
        {/* header */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-[#ddd]">
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="text-gray-600">🖥️ server: {process.env.POSTGRES_HOST || 'localhost'}</span>
          </div>
          
          {/* navigation tabs */}
          <nav className="flex gap-4 px-4 border-t border-[#ddd]">
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-blue-500 text-blue-600">
              📊 databases
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              📝 sql
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              📈 status
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              👥 users
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              📤 export
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              📥 import
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              ⚙️ settings
            </button>
          </nav>
        </header>

        {/* content area with infinite canvas */}
        <main className="p-6">
          <ResponsiveGridLayout
            className="layout"
            layouts={layout}
            breakpoints={{ lg: 1200, md: 996, sm: 768 }}
            cols={{ lg: 4, md: 2, sm: 1 }}
            rowHeight={200}
            isDraggable={true}
            isResizable={true}
          >
            {/* general settings */}
            <div key="general-settings" className="w-full h-full">
              <div className="bg-white rounded-sm border border-[#ddd] overflow-hidden h-full">
                <div className="bg-gradient-to-b from-[#aaa] to-[#999] text-white px-4 py-2 font-semibold text-sm">
                  general settings
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-700">🗄️ database:</span>
                    <select className="border border-[#ccc] rounded px-2 py-1 text-xs">
                      <option>production</option>
                      <option>staging</option>
                      <option>development</option>
                    </select>
                  </div>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    🔧 more settings
                  </button>
                </div>
              </div>
            </div>

            {/* appearance settings */}
            <div key="appearance-settings" className="w-full h-full">
              <div className="bg-white rounded-sm border border-[#ddd] overflow-hidden h-full">
                <div className="bg-gradient-to-b from-[#aaa] to-[#999] text-white px-4 py-2 font-semibold text-sm">
                  appearance settings
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-700">🌐 language:</span>
                    <select className="border border-[#ccc] rounded px-2 py-1 text-xs">
                      <option>english</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-700">🎨 theme:</span>
                    <select className="border border-[#ccc] rounded px-2 py-1 text-xs">
                      <option>light</option>
                      <option>dark</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* dau counter */}
            <div key="dau-counter" className="w-full h-full">
              <DauCounter />
            </div>

            {/* dau graph */}
            <div key="dau-graph" className="w-full h-full">
              <DauGraph />
            </div>

            {/* database server */}
            <div key="database-server" className="w-full h-full">
              <div className="bg-white rounded-sm border border-[#ddd] overflow-hidden h-full">
                <div className="bg-gradient-to-b from-[#aaa] to-[#999] text-white px-4 py-2 font-semibold text-sm">
                  database server
                </div>
                <div className="p-4">
                  <ul className="space-y-1 text-xs">
                    <li><strong>server:</strong> {process.env.POSTGRES_HOST || 'localhost'} via tcp/ip</li>
                    <li><strong>type:</strong> postgresql</li>
                    <li><strong>ssl:</strong> disabled</li>
                    <li><strong>database:</strong> {process.env.POSTGRES_DATABASE || 'postgres'}</li>
                    <li><strong>user:</strong> {process.env.POSTGRES_USER || 'postgres'}</li>
                    <li><strong>driver:</strong> postgres.js 3.4.5</li>
                    <li><strong>orm:</strong> drizzle 0.28.6</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* web server */}
            <div key="web-server" className="w-full h-full">
              <div className="bg-white rounded-sm border border-[#ddd] overflow-hidden h-full">
                <div className="bg-gradient-to-b from-[#aaa] to-[#999] text-white px-4 py-2 font-semibold text-sm">
                  web server
                </div>
                <div className="p-4">
                  <ul className="space-y-1 text-xs">
                    <li><strong>runtime:</strong> node.js 24.5.0</li>
                    <li><strong>framework:</strong> next.js 15.1.6</li>
                    <li><strong>package manager:</strong> npm 11.5.1</li>
                    <li><strong>react:</strong> 19.0.0</li>
                    <li><strong>typescript:</strong> 5.2.2</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* app info */}
            <div key="app-info" className="w-full h-full">
              <div className="bg-white rounded-sm border border-[#ddd] overflow-hidden h-full">
                <div className="bg-gradient-to-b from-[#aaa] to-[#999] text-white px-4 py-2 font-semibold text-sm">
                  myAdmin
                </div>
                <div className="p-4">
                  <ul className="space-y-1 text-xs">
                    <li><strong>version:</strong> 0.0.0</li>
                    <li><strong>name:</strong> claude-my-admin</li>
                    <li><a href="https://github.com/caffeinum/admin-panel" className="text-blue-600 hover:text-blue-800">github repository</a></li>
                    <li><a href="https://github.com/caffeinum/admin-panel#readme" className="text-blue-600 hover:text-blue-800">documentation</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* top users */}
            <div key="top-users" className="w-full h-full">
              <TopUsers />
            </div>
          </ResponsiveGridLayout>
        </main>
      </div>
      
      <div className="fixed bottom-6 right-6 w-96 h-[500px] z-50">
        <Chat />
      </div>
    </div>
  )
}
