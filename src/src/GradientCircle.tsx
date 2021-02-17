import {spring} from 'remotion'
import { AbsoluteFill, useCurrentFrame, useVideo, useVideoConfig } from "remotion"
import { Gradient } from './Gradient';

export const GradientCircle: React.FC = () => {
  const frame = useCurrentFrame();
  const{height, width, fps} = useVideoConfig();
  const size = height * 1.5
  const progress = spring({
    frame,
    fps,
    config: {
      mass: 4,
      damping: 1000,
    }
  });
  return(
	<AbsoluteFill>
		<div style={{height: size, overflow:'hidden', borderRadius:height/2, width: size, left: -(size-width)/2, top: -(size-height)/2, position: 'absolute', transform: `scale(${progress})`, opacity: progress}}>
			<Gradient />
		</div>
	</AbsoluteFill>
  )
}