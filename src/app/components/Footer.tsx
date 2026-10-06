import Link from "next/link"
import BrandLogo from "./BrandLogo"

function Footer() {
    const currentYear = new Date().getFullYear()

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ]
    return (
        <>
            <div className="mt-16 flex flex-col items-center justify-between gap-8 md:gap-0 md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
                <div className="flex flex-col gap-4 items-center md:item-start">
                    <BrandLogo variant="light" />
                    <p className="text-gray-400 text-sm">©{currentYear} TrendLama</p>
                    <p className="text-gray-400 text-sm">All right reserved.</p>
                </div>

                <div className="flex flex-col gap-4 text-sm items-center md:items-start bg-gray-800">

                    <p className="text-sm text-amber-50">Links</p>

                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-300">
                            {link.name}
                        </Link>
                    ))}

                </div>

                 <div className="flex flex-col gap-4 text-sm items-center md:items-start bg-gray-800">

                    <p className="text-sm text-amber-50">Links</p>

                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-300">
                            {link.name}
                        </Link>
                    ))}

                </div>

                 <div className="flex flex-col gap-4 text-sm items-center md:items-start bg-gray-800">

                    <p className="text-sm text-amber-50">Links</p>

                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-300">
                            {link.name}
                        </Link>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Footer