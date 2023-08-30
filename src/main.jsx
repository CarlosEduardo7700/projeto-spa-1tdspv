import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx';
import Produtos from './components/Produtos.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Error from './components/Error.jsx';

const hauter = createBrowserRouter([
  {path:"/", element: <App/>, errorElement:<Error/>, 
  children: [
    {path: "/", element: <Home/>},
    {path: "/produtos", element: <Produtos/>},
    {path: "/produtos/editar/:id", element: <EditarProduto/>},
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={hauter}/>
  </React.StrictMode>,
)
