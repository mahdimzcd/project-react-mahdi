import './App.css'
import router from './roter/router'
import {RouterProvider}  from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeToggle from './component/themeToggle/ThemeToggle';



const queryClient = new 
QueryClient();


function App() {
  
   return(
    <QueryClientProvider client={queryClient}>
      <div className='products-container'>
         <RouterProvider router={router}/>
         <div className=' absolute top-4 left-12'>
         <ThemeToggle/>
         </div>
         </div>
         </QueryClientProvider>
       );

}

export default App


// const AppContent = () => {
// const darkMode = useSelector((state) => state.theme.darkMode);
// return (
//   <dive className={darkMode ? 'dark' : ''}>
//     <ThemeToggle/>
//   </dive>
// )
// }