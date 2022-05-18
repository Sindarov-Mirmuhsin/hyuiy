import '../Footer/footer.css';

const Footer = () => {
	return (
		<ul className='footer'>
			<li className='footer__box'>
				<li className='footer__item footer__item--right'>
					<p className='footer__text'>Unresolved tickets</p>
					<a className='footer__link' href='#link'>
						View details
					</a>
				</li>
				<li className='footer__item footer__item--bootom'>
					<p className='footer__text footer__text--left'>Group: </p>
					<strong className='footer__suport'>Support</strong>
				</li>
				<li className='footer__item'>
					<p className='footer__text'>Waiting on Feature Request</p>
					<strong className='footer__num'>4238</strong>
				</li>
				<li className='footer__item footer__item--top'>
					<p className='footer__text'>Awaiting Customer Response</p>
					<strong className='footer__num'>1005</strong>
				</li>
				<li className='footer__item footer__item--top'>
					<p className='footer__text'>Awaiting Developer Fix</p>
					<strong className='footer__num'>914</strong>
				</li>
				<li className='footer__item footer__item--top'>
					<p className='footer__text'>Pending</p>
					<strong className='footer__num'>281</strong>
				</li>
			</li>

			<li className='footer__box'>
				<li className='footer__item footer__item--right'>
					<p className='footer__suptext'>Tasks</p>
					<a className='footer__link'>View all</a>
				</li>
				<li className='footer__item footer__item--bootom'>
					<p className='footer__suport'>Today</p>
				</li>
				<li className='footer__item'>
					<p className='footer__subtext'>Create new task</p>
					<span className='footer__plus'>+</span>
				</li>
				<li className='footer__item footer__item--top'>
					<div className='footer__inner'>
						<input className='footer__check' type='checkbox' />
						<p className='footer__title'>Finish ticket update</p>
					</div>
					<p className='footer__urgent'>Urgent</p>
				</li>
				<li className='footer__item footer__item--top'>
					<div className='footer__inner'>
						<input className='footer__check' type='checkbox' />
						<p className='footer__title'>Create new ticket example</p>
					</div>
					<p className='footer__new'>New</p>
				</li>
				<li className='footer__item footer__item--top'>
					<div className='footer__inner'>
						<input className='footer__check' type='checkbox' />
						<p className='footer__title'>Update ticket report</p>
					</div>
					<p className='footer__default'>Default</p>
				</li>
			</li>
		</ul>
	);
};

export default Footer;
