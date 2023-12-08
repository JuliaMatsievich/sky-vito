import { AddIconSvg } from '../iconsSvg/addIcon'
import { HomeIconSvg } from '../iconsSvg/homeIcon'
import { ProfileIconSvg } from '../iconsSvg/profileIcon'
import * as S from './footer.styles'

export const Footer = () => {
	return (
		<>
		<S.FooterContainer>
			<HomeIconSvg/>
			<AddIconSvg/>
			<ProfileIconSvg/>
		</S.FooterContainer>
		</>
	)
}