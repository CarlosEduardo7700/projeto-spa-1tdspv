import "./Rodape.scss"
import { AiFillGithub as GitHub, AiFillTwitterCircle as Twitter, AiFillRedditCircle as Reddit} from 'react-icons/ai'

export default function Rodape() {

    return (
        <>
            <footer className="rodape">

                <ul>
                    <li><a href="#"><GitHub/></a></li>
                    <li><a href="#"><Twitter/></a></li>
                    <li><a href="#"><Reddit/></a></li>
                </ul>
                
            </footer>
        </>
    )
}