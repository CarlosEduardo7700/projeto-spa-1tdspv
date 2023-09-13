import reactLogo from "./assets/react.svg";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

import {Outlet} from "react-router-dom"

export default function App() {

  let reactLogoTextoAlt = "Logo do react";

  return (
    <>
      <div>
        <Cabecalho/>
        {/* <Conteudo reactLogoProps={reactLogo} reactLogoTextoAltProps={reactLogoTextoAlt}/> */}
        <Outlet/>
        <Rodape/>
      </div>
    </>
  )
}
