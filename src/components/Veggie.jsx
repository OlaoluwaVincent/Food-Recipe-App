import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { config } from '../config';

const Veggie = () => {
	// ///////
	const [veggie, setVeggie] = useState([]);
	//
	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		// Get the item from the Local Storage
		// Parse converts stings to an Array
		const check = localStorage.getItem('veggie');
		if (check && check !== undefined) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${config}&number=9&tags=vegetarian`
			);
			const data = await api.json();
			// Set the response data to the local storage
			// Stringify converts Array to stings as Local Storage only store strings
			localStorage.setItem('veggie', JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};

	return (
		<div className=' veggie veggie--wrapper'>
			<h3>Vegeterian Meals</h3>
			<Splide
				options={{
					perPage: innerWidth <= 600 ? 2 : 3,
					arrows: false,
					pagination: true,
					drag: 'free',
					gap: innerWidth <= 600 ? '2rem' : '3rem',
				}}
			>
				{veggie
					? veggie.map((recipe) => {
							return (
								<SplideSlide key={recipe.id}>
									<div className='veggie--card'>
										<Link
											to={`/food-recipe-app/recipe/${recipe.id}`}
											className='link'
										>
											<p>{recipe.title}</p>
											<img
												src={recipe.image}
												alt='{recipe.title}'
											/>
											<div className='veggie--gradient'></div>
										</Link>
									</div>
								</SplideSlide>
							);
					  })
					: null}
			</Splide>
		</div>
	);
};

export default Veggie;
