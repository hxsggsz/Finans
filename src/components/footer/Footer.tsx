import { FooterStyle, TextStyle, IconStyle } from "."

export const Footer: React.FC = () => {
   return (
      <FooterStyle>
         <TextStyle>
            <h2>Feito por Victor Hugo</h2>
         </TextStyle>

         <IconStyle>
            <a href="https://www.linkedin.com/in/victor-hugo-994967241/" rel="noreferrer" target="_blank"><i className="devicon-linkedin-plain"></i></a>
            <a href="https://github.com/hxsggsz" rel="noreferrer" target="_blank"><i className="devicon-github-original"></i></a>
         </IconStyle>
      </FooterStyle>
   )
}