import { useEffect, useState } from "react"


const useSingleproduct = () => {
    const[singleProduct,setSingleProduct] = useState(null);
  useEffect(()=>{
    fetchSingleProduct();
  },[])

  const fetchSingleProduct  =  async() =>{
    const data = await fetch("https://fakestoreapi.com/products/");
    const jsonData = data.json();
    console.log(jsonData);
    setSingleProduct(jsonData);
  }
  
  return singleProduct;
}

export default useSingleproduct
