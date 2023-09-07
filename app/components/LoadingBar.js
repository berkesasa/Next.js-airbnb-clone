'use client'
import { useEffect } from 'react'
import ProgressBar from '@badrap/bar-of-progress'
import { usePathname, useSearchParams } from 'next/navigation'

const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
})

export default function NavigationEvents() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        progress.start();
        setTimeout(() => {
            progress.finish();
        }, 500);

    }, [pathname, searchParams])

    return null
}