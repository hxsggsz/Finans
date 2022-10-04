import styled from "styled-components";
import Image from 'next/image';


export const HeaderStyle = styled.header`
   width: 100%;
   height: 95vh;
   background: #F5BB00;
   
nav, ul {
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   padding: 10px;
}

li {
   margin: 3px 10px;
   padding: 2vh;
   color: white;
   font-size: 4vh;
   position: relative;
   overflow: hidden;
}

li::before {
   content: "";
   top: 60px;
   right: 100px;
   width: 100px;
   height: 3px;
   background: currentColor;
   margin: 0 auto;
   position: absolute;
   transform: scaleX(0);
   transition: transform 250ms ease; 
}

li:hover::before {
   width: 100%;
   height: 3px;
   margin: 0 auto;
   display: block;
   transform: scaleX(2.5);
}
`;

export const Section = styled.section`
   h1, p {
      color: #f5f5f5;
      font-size: 50px;

      top: 200px;
      margin: auto 3rem;
      display: block;
      position: absolute;
   }
   h1 {
      width: 30%;
   }
   p {
      top:350px;
      width: 45%;
      
      font-size: 30px;
   }

   span {
      color: #DCDCDC;
      font-style: italic;
      font-size: 32px;
   }
`;

export const Picture = styled.image`
      width: 100%;
      
      bottom: 15px;
      left: 45rem;
      position: absolute;
`;