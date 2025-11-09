import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DauGraph() {
  // mock data for last 7 days
  const data = [
    { day: 'mon', users: 850 },
    { day: 'tue', users: 920 },
    { day: 'wed', users: 1100 },
    { day: 'thu', users: 1050 },
    { day: 'fri', users: 1234 },
    { day: 'sat', users: 980 },
    { day: 'sun', users: 890 },
  ]

  const max = Math.max(...data.map(d => d.users))

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          dau last 7 days
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between h-24 gap-2">
          {data.map((item) => (
            <div key={item.day} className="flex flex-col items-center flex-1 gap-2">
              <div className="w-full bg-primary rounded-t" style={{ height: `${(item.users / max) * 100}%` }} />
              <span className="text-xs text-muted-foreground">{item.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
