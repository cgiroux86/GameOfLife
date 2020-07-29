import styled from "styled-components";
export const Card = styled.div`
   {
    color: "black";
    width: 90%;
    display: flex;
    justify-content: space-between;
    background: lightgrey;
    margin: 15% 0;
    @media (max-width: 768px) {
      width: 200px;
      background: lightgrey;
      margin: 2% 0;
    }
  }
`;

export const JumboCard = styled.div`
   {
   color 'black';
    width: 50%
    height: 100%;
    background: lightgrey
 
  }
`;
