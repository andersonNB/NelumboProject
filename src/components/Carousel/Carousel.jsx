import { Carousel } from 'antd';
import iconUser from '../../assets/iconUser.svg';

const contentStyle = {
	margin: 0,
	height: '100%',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};
const CarouselComponent = () => (
	<>
		<Carousel arrows dotPosition='left' infinite={false} style={{ width: '100%', height: '100%' }}>
			<div>
				<img style={contentStyle} src={iconUser} alt='logo default' width={100} height={100} />
			</div>
			<div>
				<img style={contentStyle} src={iconUser} alt='logo default' width={100} height={100} />
			</div>
			<div>
				<img style={contentStyle} src={iconUser} alt='logo default' width={100} height={100} />
			</div>
			<div>
				<img style={contentStyle} src={iconUser} alt='logo default' width={100} height={100} />
			</div>
		</Carousel>
	</>
);
export default CarouselComponent;
