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
				<Route
					path='/olaoluwavincent.github.io/Food-Recipe-App'
					element={<Home />}
				/>
				<Route
					exact
					path='/food-recipe-app/cuisine/:type'
					element={<Cuisine />}
				/>
				<Route
					exact
					path='/food-recipe-app/Searched/:search'
					element={<Searched />}
				/>
				<Route
					exact
					path='/food-recipe-app/Recipe/:id'
					element={<Recipe />}
				/>
			</Routes>
		</AnimatePresence>
	);
}

export default Pages;
