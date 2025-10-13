import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {toggleTheme} from "../../redux/./features/themSlice/themeSlice"


function ThemeToggle() {

    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <button onClick={() => dispatch(toggleTheme())} 
        className="px-6 py-3 rounded bg-blue-500 text-white"
         > 
        {darkMode ? 'light' : 'dark'}
         </button>
    )

}
export default ThemeToggle


// return (
//         <button onClick={() => dispatch(toggleTheme())} 
//         className={`px-4 py-2 rounded-lg font-medium transition ${
//             darkMode ? "bg-green-500 text-gray-900" : "bg-gray-800 text-white"
//         }`} > 
        
//          </button>
//     )