import Image from 'next/image';
import { HeaderStyle, NavStyle, TextStyle} from '.';
import logo from '../../assets/pic/logo.png';
import mulher from '../../assets/pic/capa-mulher.png';

export const Header: React.FC = () => {
   return (
      <HeaderStyle>
            <NavStyle>
                  <a href='/'><Image alt='logo' src={logo} /></a>
               <ul>
                  <a href='https://www.linkedin.com/in/victor-hugo-994967241/' rel='noreferrer' target='_blank' ><li>Linkedin</li></a>
                  <a href='https://www.github.com/hxsggsz' rel='noreferrer' target='_blank' ><li>GitHub</li></a>
               </ul>
            </NavStyle>

            <TextStyle>
               <h1>Suas contas, descomplicadas</h1>
               <p>Usado por mais de 1 Milhão de pessoas, o Finans é uma ferramenta online para facilitar a sua vida financeira.</p>
            </TextStyle>

               {/* <div>
                  <Image alt='mulher' src={mulher}/>
               </div> */}
      </HeaderStyle>
   );
};