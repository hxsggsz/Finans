import styled from "styled-components";


export const FirstContent = styled.section`
   &::before {
      content: '';
      height: 20rem;
      display: block;
   }

   h1, p {
      width: 30%;
      display: flex;
      justify-content: center;
      position: absolute;
      left: 5rem;
      
   }

   h1 {
      position: relative;
      
   }

   div {
      display: flex;
      justify-content: end;
      position: relative;
      width: 50%;
      height: 50%;
      left: 50rem;
      bottom: 15rem;
   }
`; 