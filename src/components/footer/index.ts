import styled from "styled-components";

export const FooterStyle = styled.section`
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   
   background: rgb(232, 232, 232);
   border: 1px solid rgba(0, 0, 0, 0.2);
   box-shadow: 1px -10px 60px 1px rgba(0, 0, 0, 0.2);
`;

export const TextStyle = styled.section`
   font-size: 15px;
`;

export const IconStyle = styled.section`
 .devicon-linkedin-plain, .devicon-github-original {
   color: #000;
   margin: 10px;
 }

 .devicon-linkedin-plain:hover, .devicon-github-original:hover {
      color: #fff;
      
      border-radius: 50%;
      background: #111112;
   }
`;