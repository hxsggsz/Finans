import Link from 'next/link';
import Image from 'next/image';
import { HeaderStyle, Section} from '.';
import logo from '../../assets/pic/logo.png';
import mulher from '../../assets/pic/capa-mulher.png';

export const Header: React.FC = () => {
   return (
      <HeaderStyle>
            <nav>
                  <Link href='/'><a><Image alt='logo' src={logo} /></a></Link>
               <ul>
                  <a href='https://www.linkedin.com/in/victor-hugo-994967241/' rel='noreferrer' target='_blank' ><li>Linkedin</li></a>
                  <a href='https://www.github.com/hxsggsz' rel='noreferrer' target='_blank' ><li>GitHub</li></a>
               </ul>
            </nav>

            <Section>
               <h1>Suas contas, descomplicadas</h1>
               <p>Usado por mais de 1 Milhão de pessoas, o Finans é uma ferramenta online para facilitar a sua vida <span>Finan</span>ceira.</p>
               <div>
                  <Image alt='mulher' src={mulher}/>
               </div>
            </Section>
      </HeaderStyle>
   );
};