import { AbsoluteFill, Sequence, useVideo, useVideoConfig } from "remotion"
import { FourFaces } from "./FourFaces";
import { Gradient } from "./Gradient";
import Foto01 from './Foto01.jpg'
import foto02 from './foto02.jpg'
import foto03 from './foto03.jpg'
import foto04 from './foto04.jpg'
import { GradientCircle } from "./GradientCircle";
import { Wrapped } from "./Wrapped";

export const Scene1: React.FC = () => {
	const{height, durationInFrames} = useVideoConfig();
  return (
	<AbsoluteFill>
		<Gradient height={height}/>
		<FourFaces image={Foto01}/>
		<Sequence durationInFrames={Infinity} from={30}>
			<FourFaces image={foto02}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={60}>
			<FourFaces image={foto03}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={90}>
			<FourFaces image={foto04}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={120}>
			<GradientCircle/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={160}>
			<Wrapped/>
		</Sequence>
	</AbsoluteFill>
 );
};

