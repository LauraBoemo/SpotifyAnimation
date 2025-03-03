import {interpolate, spring} from 'remotion'
import styled from 'styled-components'
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion"
import { Gradient } from './Gradient';
import { Album } from './AlbumComponent';
import { COVER_SIZE } from './AlbumComponent';

const CIRCLE_SIZE = 500;

// style.div é uma div estilizada pelo style-components, é um jeito de escrver css dentro de um arquivo .js
const Circle = styled.div`
  height: ${CIRCLE_SIZE}px;
	width: ${CIRCLE_SIZE}px;
	border-radius: ${CIRCLE_SIZE/2}px;
	overflow: hidden;
	position: absolute;
`;

const Title = styled.div`
font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: white;
font-size: 50px;
font-weight: 600;
text-align: center;
position: absolute;
top: 300px;
width: 100%;
text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
padding-left: 50px;
padding-right: 50px;;
`

export const Scene3 : React.FC <{
	topsongname: string;
	topsongartistname: string;
}> = ({topsongname, topsongartistname}) => { //=> Isso é um componente!
  const frame = useCurrentFrame();
  const {width, height, fps} = useVideoConfig();
  const progress = spring({frame,fps, config:{damping:200}});
  const scale = interpolate(progress, [0,1], [4,1]);
  const coveropacity = interpolate(progress, [0.7, 1], [0, 1]);
  const coverscale = interpolate(progress, [0.6, 1], [0.7, 1]);
	const UPSTART = 60;
	const upanimation = spring({frame: frame -  UPSTART, fps, config: {damping: 200,},});
	const contenttranslation = interpolate(upanimation, [0, 1], [0, 150]);
	const textopacity = (() => {
		if(frame < UPSTART){
			return interpolate(progress, [0.9, 1], [0,1]);
		}
		return interpolate(upanimation, [0, 1], [1, 0]);
	})();
	const bottomtextopacity = spring({
		frame: frame - UPSTART- 15,
		fps,
		config:{mass:0.45}
	})
	const artisttextopacity = spring({
		frame: frame - UPSTART- 43,
		fps,
		config:{mass:0.45}
	})

  return(
	<AbsoluteFill style={{background: '#4e00f9',}}>
		<AbsoluteFill style={{transform: `translateY(${-contenttranslation}px)`}}>
			<Title style={{opacity: textopacity}}>Teste rápido<br/>Valeu!</Title>
			<Title style={{top: 1030, fontSize: 25, opacity: bottomtextopacity }}>{topsongartistname}</Title>
			<Title style={{top: 1100, fontSize: 40, opacity: artisttextopacity}}>;){topsongname}</Title>
			<Circle 
				style={{
      opacity: progress,
      left: width/2 - CIRCLE_SIZE / 2, 
      top: height/2 - CIRCLE_SIZE/2 + 100,
      transform: `scale(${scale})`,
				}}
			> 
				<Gradient height={CIRCLE_SIZE}/>
			</Circle>
			<div style={{
      left: width/2 - COVER_SIZE / 2, 
      top: height/2 - COVER_SIZE /2 + 100,
      position: 'absolute',
      opacity: coveropacity,
      transform: `scale(${coverscale})`,
			}}
			>
				<Album />
			</div>
		</AbsoluteFill>
	</AbsoluteFill>
  )
}