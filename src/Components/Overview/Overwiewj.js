import Main from '../Main/Main';
import Numbers from '../Numbers/Numbers';
import Trends from '../Trends/Trends';
import Footer from '../Footer/Footer';

const Overwiewj = () => {
	return (
		<div className='Main'>
			<Main title='Overview' />
			<Numbers />
			<Trends />
			<Footer />
		</div>
	);
};

export default Overwiewj;
