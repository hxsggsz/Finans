import styled from "styled-components";

export const HeaderStyle = styled.header`
   background: #FFD639;
   width: 100%;
   height: 97vh;
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

   border: 1px solid red;
   h1 {
      font-size: 58px;
   }

   p, span {
      font-size: 32px;   
   }
`;