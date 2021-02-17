import {Composition} from 'remotion';
import { Main } from './Main';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition id="Main" component={Main} width={720} height={1280} durationInFrames={270+210} fps={30} defaultProps={{topsongname: 'Laaaaaaurinha', topsongartistname: 'Laulau'}} />
		</>
		);
};
