import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiNigeria } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Category = () => {
	return (
		<section className='category'>
			<div className='category--content'>
				<Link
					className='category--link'
					to={'/food-recipe-app/cuisine/Italian'}
				>
					<FaPizzaSlice />
					<h4>Italian</h4>
				</Link>
				<Link
					className='category--link'
					to={'/food-recipe-app/cuisine/American'}
				>
					<FaHamburger />
					<h4>American</h4>
				</Link>
				<Link
					className='category--link'
					to={'/food-recipe-app/cuisine/Thai'}
				>
					<GiNoodles />
					<h4>Thai</h4>
				</Link>
				<Link
					className='category--link'
					to={'/food-recipe-app/cuisine/African'}
				>
					<GiNigeria />
					<h4>African</h4>
				</Link>
			</div>
		</section>
	);
};

export default Category;
