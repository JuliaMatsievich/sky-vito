import styled from "styled-components";
import { $phoneWidth } from "../../styles/variables";

export const FooterContainer =styled.footer`
	display: none;

	@media(max-width: ${$phoneWidth}){
		height: 54px;
		padding: 6px 55px;
		display: flex;
		align-items: center;
		gap: 55.77px;
		justify-content: center;
	}
`

