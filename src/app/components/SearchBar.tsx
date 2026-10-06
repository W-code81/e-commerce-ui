import { Search } from "lucide-react";

function SearchBar() {
    return (
        <div className="hidden sm:flex items-center gap-2 ring-1 ring-gray-200 rounded-md px-2 py-1 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Search className="w-4 h-4 text-gray-500" />
            <input id="search" type="text" placeholder="Search..." className="text-sm outline-0" />

        </div>
    );
}

export default SearchBar;