import { Sequence } from "remotion"
import { Scene1 } from "./Scene1"
import { Scene2 } from "./Scene2"
import { Scene3 } from "./Scene3"

export const Main: React.FC <{
	topsongname: string;
	topsongartistname: string;
}> = ({topsongname, topsongartistname}) => {
  return(
	<>
		<Sequence from={0} durationInFrames={195}>
			<Scene1/>
		</Sequence>
		<Sequence from={195} durationInFrames={345}>
			<Scene2/>
		</Sequence>
		<Sequence from={345} durationInFrames={435}>
			<Scene3 topsongname={topsongname} topsongartistname={topsongartistname}/>
		</Sequence>
	</>
  )
}