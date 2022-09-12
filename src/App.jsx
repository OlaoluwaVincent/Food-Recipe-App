import Pages from './pages/Pages.jsx';
import Category from './components/Category.jsx';
import { HashRouter } from 'react-router-dom';
import Search from './components/Search.jsx';
import Header from './components/Header.jsx';
function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Header />
				<Search />
				<Category />
				<Pages />
			</HashRouter>
		</div>
	);
}

export default App;
