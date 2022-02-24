import styled from "styled-components";
import { Card, Divider, Typography } from "@mui/material";

export const ProductDetailContainer = styled(Card)`
  padding: 25px;
  max-width: 1000px;
  max-height: 1000px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const BookDetailContainer = styled.div`
  justify-content: space-between;
`;
export const TitleDescPriceContainer = styled.div`
  display: block;
  margin-left: 12px;
  text-align: start;
`;
export const AmountAddContainer = styled.div`
  display: flex;
  justify-content: start;
  position: absolute;
  bottom: 25px;
  margin-left: 12px;
`;
export const BookInfoContainer = styled.div`
  margin-left: 12px;
  text-align: start;
  margin-top: 10px;
`;
export const BookInfoText = styled(Typography)`
  font-family: Verdana,serif;
  font-size: 16px;
  font-style: italic;
`;
export const Title = styled.div`
  font-size: 20px;
  color: #000080;
  margin-bottom: 20px;
  font-family: "Verdana", serif;
  text-align: start;
`;
export const Price = styled.div`
  font-size: 25px;
  //margin-right: 5px;
  color: #000080;
  font-family: "Arial", serif;
`;
export const Description = styled.div`
  font-size: 17px;
  font-family: "Arial", serif;
  margin-top: 20px;
  text-align: justify;
`;
export const Image = styled.img`
  width: auto;
  height: 450px;
  border-radius: 5px;
`;
export const DividerStyle = styled(Divider)`
  margin-top: 10px;
`;
