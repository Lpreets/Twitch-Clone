import Image from 'next/image'
import { Poppins }from "next/font/google"

import { cn } from "@/lib/utils";
import Link from 'next/link';

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="bg-white rounded-full p-1 mr-10 lg:mr-0 lg:shrink shrink-0">
                    <Image 
                        src="/spooky.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </div>
                <div className={cn("hidden lg:block", font.className)}>
                    <p className="text-lg font-semibold">
                        Twitch Clone
                    </p>
                    <p className="text-cs text-muted-foreground ">Let&apos;s play</p>
                </div>
            </div>
        </Link>
    )
}