import { useEffect, useState } from "react";
function useProductsFilter(initialProducts){
    const [products, setProducts] = useState(initialProducts);
    const [filter, setFilter] = useState('');
    
    useEffect(()=>{
        if(filter){
            setProducts(initialProducts.filter((item) => 
                item.name.toLowerCase().includes(filter.toLowerCase())))
        }else {
            setProducts(initialProducts)
        }
    }, [initialProducts, filter])


    return {filter, setFilter, products};
}

export default useProductsFilter
