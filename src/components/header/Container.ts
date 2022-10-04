import styled from "styled-components";


export const Container = styled.section`
   width: 100%;
   height: 100vh;
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
   top: 65px;
   right: 100px;
   width: 100px;
   height: 3px;
   background: currentColor;
   margin: 0 auto;
   position: absolute;
   display: block;
   transform: scaleX(0);
   transition: transform 250ms ease; 
}

li:hover::before {
   width: 100%;
   height: 3px;
   margin: 0 auto;
   background: currentColor;
   display: block;
   transform: scaleX(2.5);
}
`;