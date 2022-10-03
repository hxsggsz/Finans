import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/pictures/logo.png"
import { Container } from "./Container"


export const Header: React.FC = () => {
   return (
      <Container>
         <div>
            <nav>
                  <Link href='/'><a><Image alt='logo' src={logo} /></a></Link>
               <ul>
                  <a href='https://www.linkedin.com/in/victor-hugo-994967241/' ><li>Linkedin</li></a>
                  <a href='https://www.github.com/hxsggsz' ><li>GitHub</li></a>
               </ul>
            </nav>
         </div>
      </Container>
   )
}