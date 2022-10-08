import styled from "styled-components";


export const FirstContent = styled.section`
   margin: 200px 100px;

   display: flex;
   align-items: center;
   justify-content: space-around;
`;  

export const TextStyle = styled.section`
   width: 40vw;
   height: 40vh;
   margin-right: 20px;
   display: flex;
   text-align: center;
   flex-direction: column;
   justify-content: center;

   background: rgba(232, 232, 232 0.7);
   border-radius: 10px;
   box-shadow: -10px 10px 20px 1px rgba(0, 0, 0, 0.2);
   border: 1px solid rgba(0, 0, 0, 0.2);

   @media (max-width: 425px) {
      width: 100vw;
      height: 50vh;
   }
`;

export const ImageStyle = styled.section`
   @media (max-width: 425px) {
      display: none;
   }
`;

export const SecondContentStyle = styled.section`
   margin: 200px 100px;

   display: flex;
   align-items: center;
   justify-content: space-around;
`;

export const Picture = styled.div`

`;
