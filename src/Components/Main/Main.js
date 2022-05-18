import {Lupa, Bell,} from "../../Assets/images/icons/Icons"
import img from "./images/m.png"
import "./main.css"
const Main = ({title}) => {
	return (
		<div className='our'>
			<h1 className='our__title'>{title}</h1>
			<div className='our__box'>
				<div className='elements'>
					<Lupa />
					<strong className='bell'>
						<Bell />
					</strong>
				</div>
				<div className='info'>
					<p className='info__text'>Jones Ferdinand</p>
					<img className='info__img' src={img} alt='person image' />
				</div>
			</div>
		</div>
	);
};

export default Main;