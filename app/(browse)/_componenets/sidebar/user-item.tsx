"use client"

import { LiveBadge } from '@/components/live-badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import UserAvatar from '@/components/user-avatar';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface UserItemProps {
    username: string;
    imageUrl: string;
    isLive?: boolean;
}

const UserItem = ({username, imageUrl, isLive}: UserItemProps) => {

    const pathname = usePathname();

    const { collapsed } = useSidebar((state) => state);

    const href = `/${username}`;
    const isActive = pathname === href;

  return (
    <Button asChild variant="ghost" className={cn("w-full h-12", collapsed ? "justify-center" : "justify-start", isActive && "bg-accent",)}>
        <Link
            href={href}
        >
            <div className={cn("flex items-center w-full gap-x-4", collapsed && "justify-center",)}>
                <UserAvatar 
                    imageUrl={imageUrl}
                    isLive={isLive}
                    username={username}
                />
                {!collapsed && (
                    <p className="truncate">
                        {username}
                    </p>
                )}
                {!collapsed && isLive && (
                    <LiveBadge className="ml-auto" />
                )}
            </div>
        </Link>
    </Button>
  )
}

export default UserItem

export const UserItemSkeleton = () => {
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            <Skeleton 
                className="min-h-[32px] min-w-[32px] rounded-full"
            />
            <div className="flex-1">
                <Skeleton 
                    className="h-6"
                />
            </div>
        </li>
    )
}