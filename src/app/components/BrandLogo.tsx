import Image from "next/image"
import Link from "next/link"

interface BrandLogoProps {
    variant?: 'light' | 'dark'
}

function BrandLogo({ variant }: BrandLogoProps) {

    return (
        <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="TrendLama" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9" />
            <p className={`hidden md:block text-md font-medium tracking-wider ${variant === 'light' ? 'text-white' : 'text-gray-800'}`}>TrendLama</p>
        </Link>
    )
}

export default BrandLogo