import "../Numbers/numbers.css"

const Numbers = () => {
  return (
		<ul className='Overview'>
			<li className='Overview__box'>
				<p className='Overview__title'>Unresolved</p>
				<span className='Overview__number'>60</span>
			</li>
			<li className='Overview__box'>
				<p className='Overview__title'>Overdue</p>
				<span className='Overview__number'>16</span>
			</li>
			<li className='Overview__box'>
				<p className='Overview__title'>Open</p>
				<span className='Overview__number'>43</span>
			</li>
			<li className='Overview__box'>
				<p className='Overview__title'>On hold</p>
				<span className='Overview__number'>64</span>
			</li>
		</ul>
	);
}

export default Numbers;