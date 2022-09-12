import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
	return (
		<Player
			src={'https://assets5.lottiefiles.com/packages/lf20_kxsd2ytq.json'}
			autoplay={true}
			loop={true}
			style={{ width: '100px', height: '100px' }}
		/>
	);
};

export default Loading;
