import {createBrowserRouter} from 'react-router-dom';
import ProductList from '../component/ProductList';
import Productdetail from '../component/productdetail/ProductDetails';
import HomePage from "../page/Homepage";
import ProductsLayout from '../component/Layout/ProductsLayout/ProductsLayout';

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "/products/:id", element: <Productdetail/>},
    {
        path:"/products", element:<ProductsLayout/>,
        children:[
            {path:"/products", element:<ProductList/>},
              
        ],
    },
]);

export default router;

