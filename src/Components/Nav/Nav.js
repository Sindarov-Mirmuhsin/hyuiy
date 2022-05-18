import {
	Logo,
	Overview,
	Tickets,
	Ideas,
	Constacts,
	Agents,
	Articles,
	Settings,
	Subscription,
} from '../../Assets/images/icons/Icons';
import { NavLink } from 'react-router-dom';

import '../Nav/nav.css';

const Nav = () => {
	return (
		<div className='nav'>
			<div className='box'>
				<Logo />
				<p className='title'>Dashboard Kit</p>
			</div>

			<NavLink className='inner' to='/'>
				<Overview />
				<p className={'text'}>Overview</p>
			</NavLink>
			<NavLink className='inner' to='/tickets'>
				<Tickets />
				<p className={'text'}>Tickets</p>
			</NavLink>
			<NavLink className='inner' to='/ideas'>
				<Ideas />
				<p className={'text'}>Ideas</p>
			</NavLink>
			<NavLink className='inner' to='/contacts'>
				<Constacts />
				<p className={'text'}>Contacts</p>
			</NavLink>
			<NavLink className='inner' to='/agents'>
				<Agents />
				<p className={'text'}>Agents</p>
			</NavLink>
			<NavLink className='inner' to='/articles'>
				<Articles />
				<p className={'text'}>Articles</p>
			</NavLink>
			<NavLink className='inner inner__sub' to='/settings'>
				<Settings />
				<p className={'text'}>Settings</p>
			</NavLink>
			<NavLink className='inner' to='/subscription'>
				<Subscription />
				<p className={'text'}>Subscription</p>
			</NavLink>
		</div>
	);
};

export default Nav;
