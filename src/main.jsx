import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Error from './routes/Error.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos.jsx';

const hauter = createBrowserRouter([
  {path:"/", element: <App/>, errorElement:<Error/>, 
  children: [
    {path: "/", element: <Home/>},
    {path: "/produtos", element: <Produtos/>},
    {path: "/editar/produtos/:id", element: <EditarProduto/>},
    {path: "/excluir/produtos/:id", element: <ExcluirProduto/>},
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={hauter}/>
  </React.StrictMode>,
)
