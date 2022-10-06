import styled from "styled-components";

export const HeaderStyle = styled.header`
   width: 100%;
   height: 95vh;
   background: #F5BB00;
   box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.2);
   
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
   top: 65px;
   right: 150px;
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
   transform: scaleX(3);
}

@media (max-width: 1440px) {
   li::before {
      top: 3rem;
      width: 10rem;
   }

   li:hover::before {
      width: 10rem;
   }
}
`;

export const Section = styled.article`
   h1, p {
      color: #f5f5f5;
      font-size: 40px;
      min-width: 20rem;
      max-width: 40rem;
      top: 200px;
      margin: auto 3rem;
      display: block;
      position: absolute;
   }

   p {
      top: 350px;
      font-size: 30px;
   }

   span {
      color: #DCDCDC;
      font-style: italic;
      font-size: 32px;
   }

   div {
      right: 15rem;
      top: -32px;
      display: flex;
      position: relative;
      justify-content: end;
   }
   @media (max-width: 1350px) {
      font-size: 20px;
      div {
         top: -2.5rem;
         right: 0;
         position: relative;
         transform: scale(0.9);
      }
   }
`;