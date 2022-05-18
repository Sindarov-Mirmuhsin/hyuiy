import AllTickets from "../AllTickets/AllTickets";
import Main from "../Main/Main";
import "./tickets.css"

const Tickets = () => {
	return (
		<nav className='nav-list'>
			<Main title='Tickets' />
			<AllTickets />
		</nav>
	);
	}
	
	export default Tickets;