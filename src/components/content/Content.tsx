import { FirstContent } from '.'
import Image from 'next/image'
import { motion } from 'framer-motion'
import saiba from '../../assets/pictures/saiba.png'

export const Content: React.FC = () => {
   return (
      <FirstContent>
         <h1>Neque porro quisquam</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sodales magna, vitae lacinia magna. Praesent semper felis orci, in sodales ipsum vehicula id.</p>
         <motion.div 
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true, amount:0.8}}
         ><Image src={saiba} /></motion.div>
      </FirstContent>
   )
}