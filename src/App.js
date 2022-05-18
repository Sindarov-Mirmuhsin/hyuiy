import Nav from './Components/Nav/Nav';
import Tickets from './Components/Tickets/Tickets';
import { Routes, Route } from 'react-router-dom';
import './Assets/images/icons/main.css';
import Overwiewj from './Components/Overview/Overwiewj';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Nav />
				<Routes>
					<Route path='/' element={<Overwiewj />}/>
					<Route path='/tickets' element={<Tickets />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
