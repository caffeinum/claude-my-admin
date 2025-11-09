import { DauCounter } from '@/widgets/dau-counter'
import { DauGraph } from '@/widgets/dau-graph'
import { TopUsers } from '@/widgets/top-users'

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8 bg-dot-pattern">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">monitor your app metrics</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* 1x1 widget */}
        <div className="col-span-1 row-span-1">
          <DauCounter />
        </div>
        
        {/* 2x1 widget */}
        <div className="col-span-1 md:col-span-2 row-span-1">
          <DauGraph />
        </div>
        
        {/* 1x2 widget */}
        <div className="col-span-1 row-span-2">
          <TopUsers />
        </div>
      </div>
    </div>
  )
}
