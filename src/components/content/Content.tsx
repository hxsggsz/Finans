import { FirstContent, Picture, Section } from '.'
import Image from 'next/image'
import { motion } from 'framer-motion'
import saiba from '../../assets/pic/saiba.png'
import suporte from '../../assets/pic/suporte.png'

export const Content: React.FC = () => {
   return (
      <>
         <FirstContent>
            <motion.div 
               initial={{x: -200, opacity: 0}}
               whileInView={{x: 0, opacity: 1}}
               viewport={{once: true, amount:1}}
               transition={{delay: 0.3}}
            >
               <section>
                  <h1>Neque porro quisquam</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sodales magna, vitae lacinia magna. Praesent semper felis orci, in sodales ipsum vehicula id.</p>
               </section>
            </motion.div>

            <motion.div 
               initial={{x: 100, opacity: 0}}
               whileInView={{x: 0, opacity: 1}}
               viewport={{once: true, amount:0.6}}
            ><Image alt='saiba mais' src={saiba} /></motion.div>

         </FirstContent>
         <div>
         <Section>
            <motion.div
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true, amount:1}}
            >
               <h1>Neque porro quisquam</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sodales magna, vitae lacinia magna. Praesent semper felis orci, in sodales ipsum vehicula id.</p>
            </motion.div>
         </Section>

         <Picture>
            <motion.div
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true, amount:0.3}}
            >
               <Image alt='suporte' src={suporte} />
            </motion.div>
         </Picture>
         </div>
      </>
   )
}