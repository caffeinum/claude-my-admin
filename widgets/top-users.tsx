import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TopUsers() {
  // mock data - replace with actual query
  const topUsers = [
    { name: 'alice', usage: 1450, avatar: '👤' },
    { name: 'bob', usage: 1230, avatar: '👤' },
    { name: 'charlie', usage: 980, avatar: '👤' },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          top users by usage
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topUsers.map((user, idx) => (
            <div key={user.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{user.avatar}</div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">rank #{idx + 1}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{user.usage}</p>
                <p className="text-xs text-muted-foreground">actions</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
