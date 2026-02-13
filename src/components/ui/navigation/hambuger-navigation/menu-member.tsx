import { Button } from '@/components/ui/button'

export default function MenuMember() {
  return (
    <div className="px-6 py-6 border-t text-sm text-gray-600">
      <p className="mb-3 text-xl">
        Join RAUMA - Discover top products, fresh ideas, and stories that inspire.
      </p>
      <div className="flex gap-3">
        <Button className="rounded-full px-4 py-2 text-lg">Join Us</Button>
        <Button variant="outline" className="rounded-full px-4 py-2 text-lg">
          Sign In
        </Button>
      </div>
    </div>
  )
}
