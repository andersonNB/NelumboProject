import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.svg';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const itemsMenu = [
	{
		key: '1',
		label: (
			<Row style={{ backgroundColor: 'greenyellow', width: '100%' }}>
				<Col span={12}></Col>
			</Row>
		),
	},
	{
		key: '2',
		label: (
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
		),
	},
];
