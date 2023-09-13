import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Error from './routes/Error.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos.jsx';

const router = createBrowserRouter([
  {path:"/", element: <App/>, 
    children: [
      {path: "/", element: <Home/>},
      {path: "/produtos", element: <Produtos/>},
      {path: "/editar/produtos/:id", element: <EditarProduto/>},
      {path: "/excluir/produtos/:id", element: <ExcluirProdutos/>},
      {path: "*", element: <Error/>}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
