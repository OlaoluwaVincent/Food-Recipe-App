import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../config';

const Recipe = () => {
	///////////////
	const params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState('instructions');

	const fecthDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${config}`
		);
		const dataDetails = await data.json();
		setDetails(dataDetails);
	};
	useEffect(() => {
		fecthDetails(params.id);
	}, [params.id]);
	////////////////
	return (
		<div className='recipe recipe--detailwrapper'>
			<div>
				<h1 className='recipe-title'>{details.title}</h1>
				<img src={details.image} alt={details.title} />
			</div>

			<div className='recipe--info'>
				<div className='recipe--flex'>
					<button
						className={`recipe--button ${
							activeTab === 'instructions' ? 'active' : ''
						}`}
						onClick={() => setActiveTab('instructions')}
					>
						Instructions
					</button>
					<button
						className={`recipe--button ${
							activeTab === 'ingredients' ? 'active' : ''
						}`}
						onClick={() => setActiveTab('ingredients')}
					>
						Ingredients
					</button>
				</div>
				{activeTab === 'instructions' && (
					<div>
						<p
							dangerouslySetInnerHTML={{
								__html: details.summary,
							}}
						></p>
						<h4>Steps</h4>
						<p
							dangerouslySetInnerHTML={{
								__html: details.instructions,
							}}
						></p>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details.extendedIngredients.map((ingredient) => {
							return (
								<li key={ingredient.id}>
									{ingredient.original}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Recipe;
