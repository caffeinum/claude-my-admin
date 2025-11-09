import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DauCounter() {
  // mock data - replace with actual query
  const dau = 1234

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          daily active users
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{dau.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground mt-2">
          +12% from yesterday
        </p>
      </CardContent>
    </Card>
  )
}
