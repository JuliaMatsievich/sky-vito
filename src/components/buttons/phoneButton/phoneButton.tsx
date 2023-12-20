import { useState } from 'react';
import * as S from './phoneButton.styles'

interface IUserPhone {
	phone: string
}

export const PhoneButton = ({phone} : IUserPhone) => {

	const [isShow, setIsShow] = useState(false)
	
	const handleShowPhone = () => {
		setIsShow(!isShow)
	}

	return (
		<>
		<S.PhoneBtn onClick={handleShowPhone}>
			Телефон <br/>
			{isShow ? `${phone}`: `${phone.slice(0,5)} ХХХ ХХ ХХ` }
		</S.PhoneBtn>
		</>
	)
}