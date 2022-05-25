import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useUpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        const url = `https://polar-coast-97656.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [product, setProduct];
}
export default useUpdateProduct;