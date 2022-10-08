import styled from "styled-components";

interface Menu {
   show: boolean
}

export const HeaderStyle = styled.header`
   width: 100%;
   height: 100vh;
   
   overflow: hidden;

   background: #FFD639;
   box-shadow: -10px 10px 20px 1px rgba(0, 0, 0, 0.2);
`;

export const NavStyle = styled.nav<Menu>`
   width: 100%;
   max-width: 19vw;
   margin: 30px;

   top: 0;
   right: 0;
   position: absolute;

   display: flex;
   justify-content: end;
   
   
   ul { 
      
      display: flex;
      font-size: 30px;
      position: relative
   }

   li {
      color: #fff;
      margin: 10px;
   }

      @media (max-width: 770px) {
         ul {
            display: ${({ show }: Menu ) => show ? 'flex' : 'none'}; 
            margin-top: 30px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            top: 0;
            right: 0;
            position: absolute;
         }
      }

   li::after {
      content: '';
      height: 3px;
      width: 110px;
      display: flex;
      
      background: currentColor;

      transform: scaleX(0);
      transition: transform 250ms ease-in; 
   }

   li:hover::after {
      transform: scaleX(1);
      
   }
`;

export const TextStyle = styled.div`
   color: #fff;

   margin: 30px 30px;
   width: 40vw;
   height: 40vh;

   display: flex;
   align-items: center;
   flex-direction: column;

   @media (max-width: 768px) {
      margin: 30px 100px;
      width: 60vw;
   }

   h1 {
      font-size: 58px;
   }

   p {
      font-size: 32px;   
   }

   @media (max-width: 425px) {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 30px 10px;

      h1 {
         font-size: 42px;
      }
   }
`;

export const ClockStyle = styled.div`
   width: 20vw;
   min-width: 10vw;
   margin-top: 80px;

   @media (max-width: 1075px) {
      opacity: 0;
   }
`;

export const WomanStyle = styled.div`
   width: 30vw;

   display: flex;
   justify-content: center;

   right: 0;
   bottom: 0;
   position: absolute;
   
   @media (max-width: 768px) {
      display: none;
   }
`;

export const IconMenustyle = styled.section`
   display: none;

   @media (max-width: 768px) {
      margin: 30px;
      display: flex;
      align-items: center;

      right: 0;
      bottom: 210px;
      position: absolute;
   }
`;