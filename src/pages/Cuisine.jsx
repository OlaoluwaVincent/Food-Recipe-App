import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/loading';
import { config } from '../config';

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();
	///
	const getCuisine = async (name) => {
		const check = localStorage.getItem('ppular');
		if (check && check !== undefined) {
			setCuisine(JSON.parse(check));
		} else {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config}&cuisine=${name}`
			);
			const recipes = await data.json();
			setCuisine(recipes.results);
		}
	};

	useEffect(() => {
		getCuisine(params.type);
	}, [params.type]);
	////////
	/////////

	return !cuisine ? (
		<Loading />
	) : (
		<div
			className='cuisine cuisine--grid'
			animate={{ opacity: 1 }}
			initial={{ opacitiy: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{cuisine.map((item) => {
				return (
					<div className='cuisine--grid-card' key={item.id}>
						<Link className='link' to={`/recipe/${item.id}`}>
							<img src={item.image} alt='' />
							<h4>{item.title}</h4>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Cuisine;
