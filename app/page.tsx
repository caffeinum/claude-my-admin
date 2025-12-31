'use client'

import dynamic from 'next/dynamic'
import { DauCounter } from '@/widgets/dau-counter'
import { DauGraph } from '@/widgets/dau-graph'
import { TopUsers } from '@/widgets/top-users'
import { Chat } from '@/components/chat'

const ResponsiveGridLayout = dynamic(
  () => import('react-grid-layout').then((mod) => {
    const { Responsive, WidthProvider } = mod
    return WidthProvider(Responsive)
  }),
  { ssr: false }
)

export default function DashboardPage() {
  const layout = {
    lg: [
      { i: 'about-app', x: 0, y: 0, w: 4, h: 2 },
      { i: 'general-settings', x: 0, y: 2, w: 1, h: 1 },
      { i: 'appearance-settings', x: 0, y: 3, w: 1, h: 1 },
      { i: 'dau-counter', x: 1, y: 2, w: 1, h: 1 },
      { i: 'dau-graph', x: 1, y: 3, w: 2, h: 1 },
      { i: 'database-server', x: 2, y: 2, w: 1, h: 1 },
      { i: 'web-server', x: 3, y: 2, w: 1, h: 1 },
      { i: 'app-info', x: 3, y: 3, w: 1, h: 1 },
      { i: 'top-users', x: 0, y: 4, w: 2, h: 2 },
    ],
    md: [
      { i: 'about-app', x: 0, y: 0, w: 2, h: 2 },
      { i: 'general-settings', x: 0, y: 2, w: 1, h: 1 },
      { i: 'appearance-settings', x: 1, y: 2, w: 1, h: 1 },
      { i: 'dau-counter', x: 0, y: 3, w: 1, h: 1 },
      { i: 'dau-graph', x: 1, y: 3, w: 1, h: 1 },
      { i: 'database-server', x: 0, y: 4, w: 1, h: 1 },
      { i: 'web-server', x: 1, y: 4, w: 1, h: 1 },
      { i: 'app-info', x: 0, y: 5, w: 1, h: 1 },
      { i: 'top-users', x: 1, y: 5, w: 1, h: 2 },
    ],
    sm: [
      { i: 'about-app', x: 0, y: 0, w: 1, h: 2 },
      { i: 'general-settings', x: 0, y: 2, w: 1, h: 1 },
      { i: 'appearance-settings', x: 0, y: 3, w: 1, h: 1 },
      { i: 'dau-counter', x: 0, y: 4, w: 1, h: 1 },
      { i: 'dau-graph', x: 0, y: 5, w: 1, h: 1 },
      { i: 'database-server', x: 0, y: 6, w: 1, h: 1 },
      { i: 'web-server', x: 0, y: 7, w: 1, h: 1 },
      { i: 'app-info', x: 0, y: 8, w: 1, h: 1 },
      { i: 'top-users', x: 0, y: 9, w: 1, h: 2 },
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
            {/* about app */}
            <div key="about-app" className="w-full h-full">
              <div className="bg-white rounded-sm border border-[#ddd] overflow-hidden h-full">
                <div className="bg-gradient-to-b from-[#e74c3c] to-[#c0392b] text-white px-4 py-3 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📊</span>
                    <span>About myAdmin Dashboard</span>
                  </div>
                </div>
                <div className="p-6 overflow-auto h-[calc(100%-48px)]">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 What is myAdmin?</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        myAdmin is a modern, full-featured admin dashboard built with Next.js 15 and PostgreSQL.
                        It provides real-time monitoring and management of your application&apos;s metrics, users, and database operations
                        through an intuitive drag-and-drop interface.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-blue-50 border border-blue-200 rounded p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-lg">🎨</span>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-800">Drag-and-Drop Widgets</h4>
                              <p className="text-xs text-gray-600 mt-1">Customize your dashboard layout with responsive grid system powered by react-grid-layout</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-lg">📈</span>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-800">Real-Time Analytics</h4>
                              <p className="text-xs text-gray-600 mt-1">Monitor daily active users (DAU), track user engagement with interactive graphs and counters</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-lg">🗄️</span>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-800">PostgreSQL Integration</h4>
                              <p className="text-xs text-gray-600 mt-1">Type-safe database queries using Drizzle ORM with support for multiple environments</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-lg">💬</span>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-800">AI-Powered Chat</h4>
                              <p className="text-xs text-gray-600 mt-1">Built-in chat assistant using Vercel AI SDK for instant help and insights</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-pink-50 border border-pink-200 rounded p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-lg">👥</span>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-800">User Management</h4>
                              <p className="text-xs text-gray-600 mt-1">View top users, analyze activity patterns, manage subscriptions and payments</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-lg">🎛️</span>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-800">Multi-Environment</h4>
                              <p className="text-xs text-gray-600 mt-1">Seamlessly switch between production, staging, and development databases</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">🛠️ Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-black text-white text-xs rounded-full">Next.js 15</span>
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">React 19</span>
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">TypeScript</span>
                        <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">PostgreSQL</span>
                        <span className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full">Drizzle ORM</span>
                        <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">TailwindCSS</span>
                        <span className="px-3 py-1 bg-pink-500 text-white text-xs rounded-full">shadcn/ui</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded p-4">
                      <h3 className="text-sm font-semibold text-gray-800 mb-2">🚀 Getting Started</h3>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Customize your dashboard by dragging and resizing widgets</li>
                        <li>• Switch databases using the dropdown in general settings</li>
                        <li>• Monitor user activity with real-time DAU metrics</li>
                        <li>• Use the chat assistant (bottom-right) for help and insights</li>
                        <li>• Export/import data using the navigation menu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
