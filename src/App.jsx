import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import Navbar from './components/Navbar/Navbar';
import { itemsMenu } from './constants/constants';
import styled from 'styled-components';

const Circle = styled.div`
	height: 190px;
	position: absolute;
	right: -55px;
	top: -55px;
	width: 190px;
	z-index: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
	transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
	color: white;
	border-radius: 50%;
	background: transparent linear-gradient(180deg, #FFD300 0%, #B89E22 100%) 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;

	& > h2 {
		padding-bottom: 18%;
	}
`;

function App() {
	return (
		<>
			<Navbar itemsMenu={itemsMenu} />
			<RouterProvider router={router} />
			<Circle>
				<h3>COMPRA A</h3>
				<h2>CRÉDITO</h2>
			</Circle>
		</>
	);
}

export default App;
