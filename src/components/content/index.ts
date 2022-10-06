import styled from "styled-components";


export const FirstContent = styled.section`
   &::before {
      content: '';
      height: 25rem;
      display: block;
   }

   h1, p {
      width: 30%;
      height: 30%;
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

   @media (max-width: 1440px) {
      h1, p {
         top: 13rem;
         left: -45rem;
         width: 30rem;
         height: 30px;
         position: relative;
      }

      div {
         width: 45%;
         height: 45%;
         left: 40rem;
      }
   }
`; 

export const Section = styled.section`
   width: 30rem;
   height: 130px;
   margin: 10rem 10rem;

   display: flex;
   justify-content: end;
   flex-direction: column;
   
   right: 0;
   position: absolute;

   h1 {
      margin-left: 6rem;
   }
`;

export const Picture = styled.div`
   width: 75%;
   height: 75%;

   right: 10rem;
   position: relative;
`;
