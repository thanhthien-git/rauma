'use client'

import * as React from 'react'
import { Bell, Frame, Map, PieChart, ShoppingBag, SquarePercent, Tickets, User } from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Sale Zone',
      url: '#',
      icon: SquarePercent,
      isActive: true,
    },
    {
      title: 'Notifications',
      url: '/user/notification',
      icon: Bell,
    },
    {
      title: 'My Account',
      url: '/user/account',
      icon: User,
      items: [
        {
          title: 'Profile',
          url: '/user/account',
        },
        {
          title: 'Addresses',
          url: '/user/account/addresses',
        },
        {
          title: 'Change Password',
          url: '#',
        },
        {
          title: 'Personal Information',
          url: '#',
        },
      ],
    },
    {
      title: 'My Purchase',
      url: '/user/purchase',
      icon: ShoppingBag,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
    {
      title: 'My Vouchers',
      url: '/user/voucher',
      icon: Tickets,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],

  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" className="top-[--header-height] h-full" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
