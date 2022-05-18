import "../Trends/trends.css"

const Trends = () => {
	return (
		<section className='trend'>
			<div className='trend__inner'>
				<div className='trend__box'>
					<h3 className='trend__title'>Today’s trends</h3>
					<span className='trend__time'>as of 25 May 2019, 09:41 PM</span>
				</div>

				<ul className='trend-list'>
					<li className='trend-list__item'>
						<p className='trend-list__text'>Today</p>
					</li>
					<li className='trend-list__item'>
						<p className='trend-list__text'>Yesterday</p>
					</li>
				</ul>
			</div>

			<ul className='trend__list'>
				<li className='trend__item'>
					<p className='list__text'>Resolved</p>
					<span className='list__number'>449</span>
				</li>
				<li className='trend__item'>
					<p className='list__text'>Received</p>
					<span className='list__number'>426</span>
				</li>
				<li className='trend__item'>
					<p className='list__text'>Average first response time</p>
					<span className='list__number'>33m</span>
				</li>
				<li className='trend__item'>
					<p className='list__text'>Average response time</p>
					<span className='list__number'>3h 8m</span>
				</li>
				<li className='trend__item'>
					<p className='list__text'>Resolution within SLA</p>
					<span className='list__number'>94%</span>
				</li>
			</ul>
		</section>
	);
};

export default Trends;
