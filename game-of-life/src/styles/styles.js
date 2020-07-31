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
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      width: 200px;
      margin: 5% 0;
    }
  }
`;

export const JumboCard = styled.div`
   {
   color 'black';
    width: 50%
    height: 100%;
    background: lightgrey;
    box-shadow: 2px 2px 2px 5px grey;
 
  }
`;
