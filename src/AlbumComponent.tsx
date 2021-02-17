import { ReactText } from "react";
import styled from "styled-components";
import foto from './Foto.jpeg';

export const COVER_SIZE = 400;

const Cover = styled.div`
widht: ${COVER_SIZE}px;
height: ${COVER_SIZE}px;
box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;

export const Album: React.FC = () => {
return (
	<Cover>
		<img
			src={foto} style={{height: COVER_SIZE, width: COVER_SIZE}}/>
	</Cover>
); 
};