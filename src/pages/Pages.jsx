import Home from './Home.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine.jsx';
import Searched from './Searched.jsx';
import Recipe from './Recipe.jsx';
import { AnimatePresence } from 'framer-motion';

function Pages() {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/cuisine/:type' element={<Cuisine />} />
				<Route path='/Searched/:search' element={<Searched />} />
				<Route path='/Recipe/:id' element={<Recipe />} />
			</Routes>
		</AnimatePresence>
	);
}

export default Pages;
