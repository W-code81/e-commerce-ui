import { ProductList } from "../components/ProductList";

async function ProductPage({ searchParams }: { searchParams: Promise<{ category: string }> }) {
    const category = (await searchParams)?.category;
    return (
        <div className="">
            <ProductList category={category} params="productpage"/>
        </div>
    )
}

export default ProductPage