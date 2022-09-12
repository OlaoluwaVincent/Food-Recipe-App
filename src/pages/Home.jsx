import Veggie from '../components/Veggie.jsx';
import Popular from '../components/Popular';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacitiy: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<Veggie />
			<Popular />
		</motion.div>
	);
};

export default Home;
