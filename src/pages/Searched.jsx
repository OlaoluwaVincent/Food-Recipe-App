import { config } from '../config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/loading';

const Searched = () => {
	/////////
	const [search, setSearched] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		// const check = localStorage.getItem('popular');
		// setSearched(JSON.parse(check));

		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config}&query=${name}`
		);
		const recipes = await data.json();
		setSearched(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	//////////////
	return !search ? (
		<Loading />
	) : (
		<section>
			<div className='cuisine cuisine--grid'>
				{search.map((res) => {
					return (
						<div className='cuisine--grid-card' key={res.id}>
							<Link
								to={`/food-recipe-app/recipe/${res.id}`}
								className='link'
							>
								<img src={res.image} alt='not available' />
								<h4>{res.title}</h4>
								<p>{res.details}</p>
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Searched;
