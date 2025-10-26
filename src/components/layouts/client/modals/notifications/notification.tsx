import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ButtonWithPopup } from '../../header-button/ButtonWithPopup'
import { Bell } from 'lucide-react'
import { useState } from 'react'
import { INotification } from '@/interfaces/INotification'
import NotificationItem from './notification-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function QuickNotification() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notification, setNotification] = useState<INotification[]>([
    {
      content: 'Khuyến mãi giảm giá 20% chỉ trong hôm nay!',
      time: new Date(Date.now() - 60 * 1000),
    },
    {
      content: 'Khuyến mãi giảm giá 20% chỉ trong hôm nay!',
      time: new Date(Date.now() - 5 * 60 * 1000),
    },
    {
      content: 'Khuyến mãi giảm giá 20% chỉ trong hôm nay!',
      time: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      content: 'Khuyến mãi giảm giá 20% chỉ trong hôm nay!',
      time: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      content: 'Khuyến mãi giảm giá 20% chỉ trong hôm nay!',
      time: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      content: 'Khuyến mãi giảm giá 20% chỉ trong hôm nay!',
      time: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
  ])
  return (
    <ButtonWithPopup
      count={notification.length}
      buttonClassName="hover:bg-gray-100 transition-colors duration-200"
      popupContent={
        <Card className="w-80 max-h-100 overflow-hidden border-0 bg-white rounded-xl gap-0 p-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <CardHeader className="px-4 py-4 border-b [.border-b]:pb-0 border-gray-100">
            <CardTitle className="font-semibold text-gray-900 text-base flex items-center gap-2 h-8">
              <Bell className="h-4 w-4" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-72 overflow-y-auto custom-scrollbar">
              <ul className="divide-y divide-gray-50">
                {notification && notification.length > 0 ? (
                  notification.map((item, index) => (
                    <li
                      className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
                      key={`${item.content} - ${index}`}
                    >
                      <NotificationItem props={item} />
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-8 text-center text-gray-500 text-sm">
                    <Bell className="h-4 w-4" />
                    No notifications
                  </li>
                )}
              </ul>
            </div>
            <div className="flex items-center justify-center border-t border-gray-100 p-3">
              <Button
                variant="default"
                className="w-full bg-black text-white rounded px-3 py-1 shadow-md hover:bg-black/90"
                asChild
              >
                <Link href={'/'}>View my notification</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      }
    >
      <Bell className="h-6 w-6" />
    </ButtonWithPopup>
  )
}
