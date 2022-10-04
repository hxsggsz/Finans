import { FirstContent } from '.'
import Image from 'next/image'
import saiba from '../../assets/pictures/saiba.png'

export const Content: React.FC = () => {
   return (
      <FirstContent>
         <h1>Neque porro quisquam est qui dolorem ipsum</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sodales magna, vitae lacinia magna. Praesent semper felis orci, in sodales ipsum vehicula id.</p>

         <div><Image src={saiba} /></div>
      </FirstContent>
   )
}