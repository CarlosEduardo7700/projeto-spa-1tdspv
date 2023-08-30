import reactLogo from "./assets/react.svg"
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

export default function App() {

  let reactLogoTextoAlt = "Logo do react";

  return (
    <>
      <div>
        <Cabecalho/>

        <Conteudo reactLogoProps={reactLogo} reactLogoTextoAltProps={reactLogoTextoAlt}/>
        
        <Rodape/>
      </div>
    </>
  )
}
