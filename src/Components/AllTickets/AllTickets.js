import Img from '../AllTickets/Images/img.png';
import Img2 from '../AllTickets/Images/img2.png';
import Img3 from '../AllTickets/Images/img3.png';
import Img4 from '../AllTickets/Images/img4.png';
import Img5 from '../AllTickets/Images/img5.png';
import Img6 from '../AllTickets/Images/img6.png';
import Img7 from '../AllTickets/Images/img7.png';
import Img8 from '../AllTickets/Images/img8.png';
import Vertical from '../AllTickets/Images/vertical.png';
import Sort from '../AllTickets/Images/sort.png';
import Filter from '../AllTickets/Images/filter.png';
import './allTickets.css';
import Pagination from '../Pagination/Pagination';

const AllTickets = () => {
	return (
		<div className='all-tickets'>
			<div className='tickets'>
				<h2 className='tickets__title'>All tickets</h2>
				<span className='tickets__box'>
					<img className='tickets__img' src={Sort} alt='Sort' />
					<p className='tickets__text'>Sort</p>
				</span>
				<span className='tickets__box--right '>
					<img className='tickets__img' src={Filter} alt='Filter' />
					<p className='tickets__text'>Filter</p>
				</span>
			</div>
			<ol className='all-tickets__list'>
				<li className='all-tickets__item all-tickets__item--top'>
					<p className='all-tickets__text'>Ticket details</p>
					<p className='all-tickets__text--left'>Customer name</p>
					<p className='all-tickets__text--right'>Date</p>
					<p className='all-tickets__text--bottom'>Priority</p>
				</li>
				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img} alt='person image' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>Contact Email not Linked</h3>
						<span className='all-tickets__type'>Updated 1 day ago</span>
					</span>
					<span className='all-tickets__box'>
						<strong className='all-tickets__name'>Tom Cruise</strong>
						<span className='all-tickets__type'>on 24.05.2019</span>
					</span>
					<span className='all-tickets__box all-tickets__box--left'>
						<time className='all-tickets__time'>May 26, 2019</time>
						<span className='all-tickets__type'>6:30 PM</span>
					</span>
					<button className='all-tickets__btn' type='button'>
						High
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>

				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img2} alt='person image' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>
							Adding Images to Featured Posts
						</h3>
						<span className='all-tickets__type'>Updated 1 day ago</span>
					</span>
					<span className='all-tickets__box '>
						<strong className='all-tickets__name'>Matt Damon</strong>
						<span className='all-tickets__type'>on 24.05.2019</span>
					</span>
					<span className='all-tickets__box all-tickets__box--left'>
						<time className='all-tickets__time'>May 26, 2019</time>
						<span className='all-tickets__type'>8:00 AM</span>
					</span>
					<button
						className='all-tickets__btn all-tickets__btn--yellow'
						type='button'>
						low
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>

				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img3} alt='person image' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>
							When will I be charged this month?
						</h3>
						<span className='all-tickets__type'>Updated 1 day ago</span>
					</span>
					<span className='all-tickets__box'>
						<strong className='all-tickets__name'>Robert Downey</strong>
						<span className='all-tickets__type'>on 24.05.2019</span>
					</span>
					<span className='all-tickets__box all-tickets__box--left'>
						<time className='all-tickets__time'>May 26, 2019</time>
						<span className='all-tickets__type'>7:30 PM</span>
					</span>
					<button className='all-tickets__btn' type='button'>
						High
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>

				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img4} alt='person image' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>Payment not going through</h3>
						<span className='all-tickets__type'>Updated 2 days ago</span>
					</span>
					<span className='all-tickets__box'>
						<strong className='all-tickets__name'>Christian Bale</strong>
						<span className='all-tickets__type'>on 24.05.2019</span>
					</span>
					<span className='all-tickets__box  all-tickets__box--left'>
						<time className='all-tickets__time'>May 25, 2019</time>
						<span className='all-tickets__type'>5:00 PM</span>
					</span>
					<button
						className='all-tickets__btn all-tickets__btn--green'
						type='button'>
						Normal
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>

				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img5} alt='person image' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>Unable to add replies</h3>
						<span className='all-tickets__type'>Updated 2 days ago</span>
					</span>
					<span className='all-tickets__box'>
						<strong className='all-tickets__name'>Henry Cavil</strong>
						<span className='all-tickets__type'>on 24.05.2019</span>
					</span>
					<span className='all-tickets__box all-tickets__box--left'>
						<time className='all-tickets__time '>May 25, 2019</time>
						<span className='all-tickets__type'>4:00 PM</span>
					</span>
					<button className='all-tickets__btn' type='button'>
						High
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>

				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img6} alt='person image' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>Downtime since last week</h3>
						<span className='all-tickets__type'>Updated 3 days ago</span>
					</span>
					<span className='all-tickets__box'>
						<strong className='all-tickets__name'>Chris Evans</strong>
						<span className='all-tickets__type'>on 23.05.2019</span>
					</span>
					<span className='all-tickets__box all-tickets__box--left'>
						<time className='all-tickets__time '>May 25, 2019</time>
						<span className='all-tickets__type'>2:00 PM</span>
					</span>
					<button
						className='all-tickets__btn all-tickets__btn--green'
						type='button'>
						Normal
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>

				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img7} alt='' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>Referral Bonus</h3>
						<span className='all-tickets__type'>Updated 4 day ago</span>
					</span>
					<span className='all-tickets__box'>
						<strong className='all-tickets__name'>Sam Smith</strong>
						<span className='all-tickets__type'>on 22.05.2019</span>
					</span>
					<span className='all-tickets__box all-tickets__box--left'>
						<time className='all-tickets__time'>May 25, 2019</time>
						<span className='all-tickets__type'>11:30 AM</span>
					</span>
					<button
						className='all-tickets__btn all-tickets__btn--yellow'
						type='button'>
						low
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>

				<li className='all-tickets__item'>
					<img className='all-tickets__img' src={Img8} alt='' />
					<span className='all-tickets__box'>
						<h3 className='all-tickets__title'>How do I change my password?</h3>
						<span className='all-tickets__type'>Updated 6 days ago</span>
					</span>
					<span className='all-tickets__box'>
						<strong className='all-tickets__name'>Steve Rogers</strong>
						<span className='all-tickets__type'>on 21.05.2019</span>
					</span>
					<span className='all-tickets__box all-tickets__box--left'>
						<time className='all-tickets__time '>May 24, 2019</time>
						<span className='all-tickets__type'>1:00 PM</span>
					</span>
					<button
						className='all-tickets__btn all-tickets__btn--green'
						type='button'>
						Normal
					</button>
					<img className='all-tickets__icon' src={Vertical} alt='Vertical' />
				</li>
				<Pagination />
			</ol>
		</div>
	);
};

export default AllTickets;
