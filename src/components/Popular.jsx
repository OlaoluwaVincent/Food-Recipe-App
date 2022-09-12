import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { config } from '../config';

const Popular = () => {
	// ///////
	const [popular, setpopular] = useState([]);
	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		// Get the item from the Local Storage
		// Parse converts stings to an Array
		const check = localStorage.getItem('popular');
		if (check && check !== undefined) {
			setpopular(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${config}&number=10`
			);
			const data = await api.json();
			// Set the response data to the local storage
			// Stringify converts Array to stings as Local Storage only store strings
			localStorage.setItem('popular', JSON.stringify(data.recipes));
			setpopular(data.recipes);
		}
	};
	return (
		<div className='popular popular--wrapper'>
			<h3>Popular Meals</h3>
			<Splide
				options={{
					perPage: innerWidth < 601 ? 3 : 4,
					arrows: true,
					pagination: false,
					drag: 'free',
					gap: innerWidth < 601 ? '1rem' : '3rem',
				}}
			>
				{popular
					? popular.map((recipe) => {
							return (
								<SplideSlide key={recipe.id}>
									<div className='popular--card'>
										<Link
											className='link'
											to={`/recipe/${recipe.id}`}
										>
											<p>{recipe.title}</p>
											<img
												src={recipe.image}
												alt='{recipe.title}'
											/>
											<div className='popular--gradient'></div>
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

export default Popular;
