import { FirstContent, TextStyle, ImageStyle, SecondContentStyle } from '.'
import Image from 'next/image'
import { motion } from 'framer-motion'
import saiba from '../../assets/pic/saiba.png'
import suporte from '../../assets/pic/suporte.png'

export const Content: React.FC = () => {
   return (
      <>
         <FirstContent>
            <motion.div
               initial={{x: -100, opacity: 0, scale: 0.5}}
               whileInView={{x: 0, opacity: 1, scale: 1}}
               whileHover={{ scale: 1.1}}
               viewport={{once: true, amount: 0.5}}
            >
               <TextStyle>
                  <h1>Neque porro quisquam</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sodales magna, vitae lacinia magna. Praesent semper felis orci, in sodales ipsum vehicula id.</p>
               </TextStyle>
            </motion.div>

            <motion.div 
               initial={{x: 100, opacity: 0}}
               whileInView={{x: 0, opacity: 1}}
               viewport={{once: true, amount:0.5}}
            >
               <ImageStyle><Image alt='saiba mais' src={saiba} /></ImageStyle>
            </motion.div>
         </FirstContent>
         
         <SecondContentStyle>
            <motion.div
               initial={{x: -50, opacity: 0}}
               whileInView={{x: 0, opacity: 1}}
               viewport={{once: true, amount:0.5}}
            >
               <ImageStyle><Image alt='suporte' src={suporte} /></ImageStyle>
            </motion.div>

            <motion.div
               initial={{x: 100, opacity: 0, scale: 0.5}}
               whileInView={{x: 0, opacity: 1, scale: 1}}
               whileHover={{ scale: 1.1}}
               viewport={{once: true, amount: 0.5}}
            >
               <TextStyle>
                  <h1>Neque porro quisquam</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sodales magna, vitae lacinia magna. Praesent semper felis orci, in sodales ipsum vehicula id.</p>
               </TextStyle>
            </motion.div>
         </SecondContentStyle>
      </>
   )
}