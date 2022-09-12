import { HashRouter } from 'react-router-dom';
import Search from './components/Search';
import Pages from './pages/Pages';
import Category from './components/Category';
import Header from './components/Header';
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
