import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row } from 'antd';
import logo from "../../assets/logo.svg";
import styled from "styled-components";

const { Header } = Layout;


const Image = styled.img`
	width: 203px;
	height: 45px;
	background: ${props =>`transparent url(${logo}) 47% 50% no-repeat padding-box`};
	opacity: 1;
	border: none; 
	padding: 0; 
	margin: 0; 
`;
const Navbar = () => {
	return (
		<Header
			style={{
				display: 'flex',
				alignItems: 'center',
				backgroundColor: '#0149BE',
				justifyContent: 'space-between',
				padding: '0 10%',
			}}
		>			
			<Image style={{width: '203px', height: '45px'}} />			
			<Row gutter={24}>
				<Col span={12}>
					<Button
						style={{ backgroundColor: '#FFD300', height: 50, width: 140, color: '#0149BE', borderStyle: 'none' }}
						block
					>
						Crear Tu Cuenta
					</Button>
				</Col>
				<Col span={12}>
					<Button
						style={{
							backgroundColor: 'transparent',
							height: 50,
							width: 140,
							color: '#FFD300',
							borderStyle: 'none',
						}}
						block
					>
						Iniciar Sesión
						<ShoppingCartOutlined
							style={{ color: 'black', borderRadius: '10px', backgroundColor: '#ccc', padding: '5px' }}
						/>
					</Button>
				</Col>
			</Row>
		</Header>
	);
};

export default Navbar;
