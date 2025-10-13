import React ,{useEffect, useState} from 'react';
import {Link}  from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ProductCard = ({id,name,price,imageUrl,isNew,discount,deleteProduct})=>{

    const [isAdded, setIsAdded] = useState(false);

let clidButton;
if(isAdded === false){
    clidButton = (<button className="border-none bg-[rgb(172,190,121)] transition-colors duration-150 ease-in-out text-white" onClick={ ()=> setIsAdded(true)}> افزودن به سبد خرید </button>);
}

else{
    clidButton = (
        <button className="border-none text-white cursor-default bg-[rgb(113,208,113)]"> اضافه شد </button>
    )
}

    const handleDelete = () =>{
        deleteProduct(id)
    }

    const darkMode = useSelector((state) => state.theme.darkMode);

return(
    <div className= {darkMode ? "bg-slate-900 text-white border-none rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-5 m-[30px] flex-col gap-2 relative" : "border rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-5 m-[30px] flex-col gap-2 relative"}>
        <img src={imageUrl}  className="w-[190px] h-[200px] mb-4 rounded-lg "/>
        <h2> <Link to={`/products/${id}`} className={darkMode ? "m-0 text-[18px]" : "m-0 text-[18px] text-[#000000] pb-2"}> {name}  </Link>  </h2>
        <p className="mt-1 font-bold"> {price} تومان </p>
        {isNew && <span className="bg-[rgb(101,222,170)] rounded-[20px_0_25px_0]
         inline-block text-gray-50 text-[15px] font-[tahoma] absolute top-0 left-0 py-3.5 px-[3px] shadow-[0_2px_6px_rgba(0,0,0,0.2)]"> جدید  </span>}
        {clidButton}
        {discount > 0 && <span className="text-[#fff] rounded-2xl bg-[linear-gradient(135deg,#ff4d4d,#ff1a1a)] p-[4px_6px] font-bold absolute top-0 right-0 shadow-[0_2px_6px_rgba(0,0,0,0.2)]"> {discount}% </span>}
        
        <button className={darkMode ? "bg-[rgba(113,113,113,0.88)] ml-auto p-1.5 w-[120px]" : "bg-[rgba(0,0,0,0.059)] ml-auto p-1.5 w-[120px]"} onClick={handleDelete} deleteProduct={deleteProduct}>  حذف محصول  </button>
    
    </div>
)
};

export default ProductCard