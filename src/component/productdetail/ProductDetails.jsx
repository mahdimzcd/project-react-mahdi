import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DUMMY_PRODUCTS from "../../data/ProductData";


const Productdetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const product = DUMMY_PRODUCTS.find((product) => String(product.id) === id);

    if(!product){
        
        return(
            <div className="flex flex-col text-xl gap-4">
                <p className=" text-red-600"> محصول شما یافت نشد - 404 </p>
                <button className="border-none shadow-[2px_2px_5px_2px_rgba(0,0,0,0.1)] bg-[rgba(89,232,201,0.651)]"  onClick={() => {navigate("/products");}}>  بازگشت به فروشگاه </button>
            </div>
        );
    }

    return (
        <div className="border rounded-[10px] flex items-start relative p-[60px] gap-[70px] shadow-[2px_6px_5px_rgba(0,0,0,0.2)]">
            <h1 className="block top-0 absolute text-[15px]" >ProductDetails:{id}</h1>
            
            <div className="max-w-64 relative">
                <img src={product.imageUrl} className="w-full rounded-xl" />
                {product.isNew && <span className="absolute top-0 left-0 inline-block p-[15px_3px] bg-[rgb(101,222,170)] text-white text-[15px] rounded-[25px_0px_20px_0px] "> جدید  </span>}
            </div>
            
            <div className="flex flex-col gap-6 rtl ">
                <p>  نام محصول: {product.name}  </p>
                <p>  قیمت: {product.price} </p>
                <button className="border-none text-white rounded-md bg-[rgba(179,190,121)]">   افزودن به سبد خرید </button>
            </div>

            <button className="absolute bottom-2.5 left-auto
             rounded-[20px] shadow-[2px_2px_9px_2px_rgba(0,0,0,0.1)] bg-[#ffffff]"  onClick={() => {navigate("/products");}}>  بازگشت  </button>
           
        </div>
    );
}

export default Productdetail

