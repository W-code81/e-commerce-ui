import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart, ShoppingCartIcon } from "lucide-react";
import BrandLogo from "./BrandLogo";

function Navbar() {
    return (
        <>
            <nav className="w-full flex items-center justify-between py-4  border-b border-gray-200">

                {/* Left */}
                <BrandLogo/>

                {/* Right */}
                <div className="flex gap-4 items-center justify-center">
                    <SearchBar/>

                    <Link href='/'>
                        <Home className="w-5 h-5 text-gray-600" />
                    </Link>
                    
                    <Bell className="w-5 h-5 text-gray-600" />

                    <Link href='/cart' className="relative">
                        <ShoppingCartIcon className="w-5 h-5 text-gray-600" />
                    </Link>

                    <Link href= '/login'>
                        Sign In
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar