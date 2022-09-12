import Pages from './pages/Pages.jsx';
import Category from './components/Category.jsx';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search.jsx';
import Header from './components/Header.jsx';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
