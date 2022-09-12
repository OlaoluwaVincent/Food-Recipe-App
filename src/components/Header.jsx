import React from 'react';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

const Header = () => {
	return (
		<nav className='Header header--nav'>
			<GiKnifeFork />
			<Link to={'/'} className='header--nav-link'>
				Ola's Menu
			</Link>
		</nav>
	);
};

export default Header;
