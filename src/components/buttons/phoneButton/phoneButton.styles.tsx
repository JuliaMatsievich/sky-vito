import styled from "styled-components";
import { buttonColor } from "../../../styles/commonStyles.styles";
import { $phoneWidth } from "../../../styles/variables";


export const PhoneBtn = styled.button`
  ${buttonColor}
  padding: 10px 37px;
  margin-bottom: 34px;
  line-height: 150%;
  font-size: 14px;
  width: 214px;
  height: 62px;
  grid-area: 2 / 2 / 3 / 3;
  @media (max-width: ${$phoneWidth}) {
    width: 100%;
    margin-bottom: 30px;
    grid-area: 3 / 1;
  }
`;