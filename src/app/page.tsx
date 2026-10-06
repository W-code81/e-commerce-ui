import Image from "next/image"
import { ProductList } from "./components/ProductList"

//nextjs pages uses searchParams as a prop to get the query string from the url but use client components uses useSearchParams hook to get the query string from the url
const Homepage = async ({searchParams} : {searchParams: Promise<{category: string}>}) => {

  const category = (await searchParams)?.category

  return (
    <div className=''>
      <div className="relative aspect-3/1 mb-12">
        <Image src='/featured.png' alt='Featured Product' fill/>
      </div>

      <ProductList category={category} params="homepage"/>
    </div>
  )
}

export default Homepage