import reactLogo from "./assets/react.svg"
import Cabecalho from "./components/Cabecalho";

export default function App() {

  let reactLogoTextoAlt = "Logo do react";

  return (
    <>
      <div>
        <Cabecalho/>

        <section>
          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, blanditiis eius animi autem dolorum alias.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, blanditiis eius animi autem dolorum alias.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, blanditiis eius animi autem dolorum alias.</p>
          
            <img src={reactLogo} alt={reactLogoTextoAlt} />
          </div>
        </section>
        
        <footer>
          <div>
            <ul>
              <li><a href="#">GitHUb</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Twiter</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
