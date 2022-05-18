import Left from '../AllTickets/Images/left.png';
import Right from '../AllTickets/Images/right.png';
import Vector from '../AllTickets/Images/vector.png';

import './pagination.css';

export default function Pagination() {
	return (
		<div className='pagination'>
			<div className='pagination__inner'>
				<p className='pagination__text'>Rows per page:</p>
				<strong className='pagination__num'>8</strong>
				<img className='pagination__img' src={Vector} alt='Vector' />
			</div>
			<div className='pagination__inner'>
				<p className='pagination__text pagination__text--right'>1-8 of 1240</p>
				<span className='pagination__box'>
					<img src={Left} alt='icon' />
					<img src={Right} alt='icon' />
				</span>
			</div>
		</div>
	);
}
