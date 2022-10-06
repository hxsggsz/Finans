import Image from 'next/image';
import { HeaderStyle, NavStyle, TextStyle, ClockStyle, WomanStyle } from '.';
import logo from '../../assets/pic/logo.png';
import mulher from '../../assets/pic/capa-mulher.png';
import economize from '../../assets/pic/economize.png';
import { MotionConfig, motion } from 'framer-motion';

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

            <WomanStyle>
               <Image src={mulher} alt='mulher' />
            </WomanStyle>

            <ClockStyle>
               <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{opacity: 1, rotate: [0, 360], scale: 1 }}
               transition={{delay: 0.5, duration: 0.5}}
               >
                  <Image src={economize} alt='relógio' />
               </motion.div>
            </ClockStyle>

      </HeaderStyle>
   );
};