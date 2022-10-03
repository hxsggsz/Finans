import styled from "styled-components";


export const Container = styled.section`
   width: 218.5vh;
   height: 100vh;
   background: #F5BB00;
   
nav, ul {
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   padding: 10px;
}

li {
   margin: 2px;
   padding: 2vh;
   color: white;
   font-size: 4vh;
   position: relative;
   overflow: hidden;
}

li::before {
   content: "";
   width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease-in; 
}

li:hover::before {
   background: #F5F5F5;
   transform: scaleX(1);
   transform-origin: left;
   
}

`;