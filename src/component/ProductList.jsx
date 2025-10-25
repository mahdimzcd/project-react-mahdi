import React from "react"
import ProductCard from "./ProductCard";
import { useEffect,useState } from "react";
import "../component/loader.css";
import ProductForm from "./ProductForm/ProductForm";
import axios from "axios";
import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";



const fetchProducts = async () => {
    const response = await axios.get('https://68da085190a75154f0dbaf13.mockapi.io/product');
   
    return response.data;
};

const deleteProductAPI = async (id) => {
    const response = await axios.delete(`https://68da085190a75154f0dbaf13.mockapi.io/product/${id}`);
    return response.data;
};


const ProductList = () =>{
const queryClient = useQueryClient();
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    // const [products, setProducts] = useState([]);
    const [formModal, setFormModal] = useState(false);

    
    const {  data: products,isError, isLoading } = useQuery({
             queryKey: ["products"],
             queryFn: fetchProducts,
        });


        const deleteMutation = useMutation ({
            mutationFn: deleteProductAPI,
           onSuccess: () => {
             queryClient.invalidateQueries({queryKey:["products"]});
        },})

        const deleteProduct = (id) => {
            deleteMutation.mutate(id);
        };

    // useEffect(() => {
    //     fetchProducts(); 
    // }, []);

    if(isLoading){
        return  <dive className="flex flex-col items-center" > 
            <span className="loader"> </span>
            <h1 className="text-[red] m-0">  Loading...  </h1> 
            </dive>
    }
    if(isError){
        return <h1 className="text-[rgb(94,127,215)] m-0">  Is not loading ! </h1>
    }
    


    const openModal = () =>{
        setFormModal(true);
    }
    const closeModal = () =>{
        setFormModal(false);
    }
    
// const darkMode = useSelector((state) => state.theme.darkMode);
    
    return(
        <div>
            <button className="btnNewproduct" onClick={openModal}>  افزودن محصول جدید  </button>
            {products.map(product => ( 
                 <ProductCard  deleteProduct={deleteProduct} 
                 key={product.id} 
                 id={product.id}
                 name={product.name} 
                 price={product.price} 
                 imageUrl={product.imageUrl}
                 isNew={product.isNew}  
                 discount={product.discount} />))}
                 {formModal && <ProductForm onClick={closeModal} />}
        </div>
    );

}
export default ProductList





//  const fetchProducts = async () => {
//         setIsLoading(true);
//         try{


//         const response = await axios.get('https://68da085190a75154f0dbaf13.mockapi.io/product');

//             if(!response.ok){
//                 setIsError(true);
//             }

//             const data = await response.data;
//             setProducts(data);

//             setIsError(false);
//         }
//         catch(error){
//             console.log(error);
//             setIsError(true);
//         }
//         finally{
//             setIsLoading(false);
//             }

//     //    setTimeout(() => {
//     //     setIsLoading(false);
//     //    },500);
    
//     // }


// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import "../component/loader.css";
// import ProductForm from "./ProductForm/ProductForm";
// import axios from "axios";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// const fetchProducts = async () => {
//     const response = await fetch('https://68da085190a75154f0dbaf13.mockapi.io/product');
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json(); // ✅ this is important
// };

// const deleteProductAPI = async (id) => {
//     const response = await axios.delete(`https://68da085190a75154f0dbaf13.mockapi.io/product/${id}`);
//     return response.data;
// };

// const ProductList = () => {
//     const [formModal, setFormModal] = useState(false);
//     const queryClient = useQueryClient();

//     const { data: products, isLoading, isError } = useQuery({
//         queryKey: ["products"],
//         queryFn: fetchProducts,
//     });

//     const deleteMutation = useMutation({
//         mutationFn: deleteProductAPI,
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['products'] }); // ✅ refetch products after deletion
//         },
//     });

//     const deleteProduct = (id) => {
//         deleteMutation.mutate(id);
//     };

////////////////////////////////////////////////////////////////////////////

//     const openModal = () => {
//         setFormModal(true);
//     };

//     if (isLoading) {
//         return (
//             <div className="flex flex-col items-center">
//                 <span className="loader"></span>
//                 <h1 className="text-[red] m-0">Loading...</h1>
//             </div>
//         );
//     }

//     if (isError) {
//         return <h1 className="text-[rgb(94,127,215)] m-0">Error loading data!</h1>;
//     }

//     return (
//         <div>
//             <button className="btnNewproduct" onClick={openModal}>
//                 افزودن محصول جدید
//             </button>

//             {products && products.map(product => (
//                 <ProductCard
//                     deleteProduct={deleteProduct}
//                     key={product.id}
//                     id={product.id}
//                     name={product.name}
//                     price={product.price}
//                     imageUrl={product.imageUrl}
//                     isNew={product.isNew}
//                     discount={product.discount}
//                 />
//             ))}

//             {formModal && <ProductForm />}
//         </div>
//     );
// };

// export default ProductList;




    // const deleteProduct = async (id) => {

    //     setIsLoading(true);

    // const response = await axios.delete(`https://68da085190a75154f0dbaf13.mockapi.io/product/${id}`);

    //     setProducts(products.filter((item)  => item.id !== id));
    //     setIsLoading(false);

    // };