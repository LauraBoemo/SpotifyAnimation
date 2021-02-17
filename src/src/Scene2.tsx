import {interpolate, spring} from 'remotion'
import styled from 'styled-components'
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion'
import { Bar } from './Bar';

const TITLE_OFFSET = 100;
const FONT_SIZE = 50;

const Title = styled.div`
font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: white;
font-size: ${FONT_SIZE}px;
top: ${TITLE_OFFSET}px;
font-weight: 600;
text-align: center;
position: absolute;
width: 100%;
text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
padding-left: 50px;
padding-right: 50px;;
`

export const Scene2: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const moveup = spring({
		frame,
		fps,
		config: {
			damping: 150,
		},
	});
	const translateY = interpolate(moveup, [0,1], [height / 2 - TITLE_OFFSET - FONT_SIZE, 0])
  return(
	<AbsoluteFill style={{backgroundColor: "#d4148e"}}>
		<AbsoluteFill style={{transform: `translateY(${translateY}px)`}}>
			<Title>Estudo Animação Rankeada</Title>
			<div style={{height: 290}}/>
			<Bar color="#b2fef5" endWidth={width / 2} rank={1} genre="Primeiro Lugar"/>
			<Bar color="#d5f772" endWidth={width / 2 - 40} rank={2} genre="Segundo Lugar"/>
			<Bar color="#4e00f9" endWidth={width / 2 - 80} rank={3} genre="Terceiro Lugar"/>
			<Bar color="#141416" endWidth={width / 2 - 120} rank={4} genre="Quarto Lugar"/>
			<Bar color="#fefefe" endWidth={width / 2 - 160} rank={5} genre="Quinto Lugar"/>
		</AbsoluteFill>
	</AbsoluteFill>
  );
};