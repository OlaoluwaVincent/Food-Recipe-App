import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
	////////////
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/food-recipe-app/searched/${input}`);

		setInput('');
	};

	///////////////
	return (
		<form onSubmit={handleSubmit} className='search search--form'>
			<div className='content'>
				<FaSearch />
				<input
					onChange={(e) => setInput(e.target.value)}
					type='text'
					value={input}
					className='content--input'
				/>
			</div>
		</form>
	);
};

export default Search;
