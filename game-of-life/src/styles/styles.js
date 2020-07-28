import styled from "styled-components";
export const Card = styled.div`
   {
    color: "black";
    width: 90%;
    display: flex;
    justify-content: space-between;
    background: grey;
    margin: 7% 0;
    @media (max-width: 768px) {
      width: 100%;
      background: lightgrey;
      margin: 0;
      flex-wrap: wrap;
    }
  }
`;

export const JumboCard = styled.div`
   {
   color 'black';
    width: 50%
    height: 100%;
    background: grey
 
  }
`;
