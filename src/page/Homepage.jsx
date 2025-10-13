import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {

    const darkMode = useSelector((state) => state.theme.darkMode);
    return (
        <div className={darkMode ? "bg-slate-600" : ""}>
            <h1 className="text-4xl cursor-pointer
            border shadow-[2px_6px_8px_rgba(0,0,0,0.2)]
            p-[10px] rounded-xl">
                <Link to={`/products`} >  لیست محصولات </Link>
            </h1>
        </div>

    );
}

export default HomePage;
