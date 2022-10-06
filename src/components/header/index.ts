import styled from "styled-components";

export const HeaderStyle = styled.header`
   background: #FFD639;
   width: 99vw;
   height: 100vh;
   overflow: hidden;
`;

export const NavStyle = styled.nav`
   width: 97%;
   height: 13%;
   padding: 5px;
   margin-left: 30px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   ul, li { 
      margin: 10px;
      display: flex;
      font-size: 30px;
      color: #f5f5f5;
      overflow: hidden;
      position: relative
   }

   li::after {
      content: '';
      width: 120px;
      height: 3px;
      position: absolute;

      align-self: end;
      justify-content: left;
      align-items: center;
      
      background: currentColor;

      transform: scaleX(0);
      transition: transform 250ms ease-in; 
   }

   li:hover::after {
      width: 100%;
      display: block;
      transform: scaleX(3);
      
   }
`;

export const TextStyle = styled.div`
   color: #f5f5f5;

   margin: 30px 30px;
   width: 40vw;
   height: 40vh;

   display: flex;
   align-items: center;
   flex-direction: column;

   h1 {
      font-size: 58px;
   }

   p {
      font-size: 32px;   
   }
`;

export const ClockStyle = styled.div`
   width: 30vw;
   min-width: 20vw;

   
`;

export const WomanStyle = styled.div`
   width: 30vw;

   display: flex;
   justify-content: center;

   right: 0;
   bottom: 0;
   position: absolute;
`;