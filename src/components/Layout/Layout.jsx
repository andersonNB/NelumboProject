import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Col, Layout, Menu, Rate, Row, theme } from 'antd';
import ContentHome from '../ContentHome/ContentHome';

const { Content, Sider } = Layout;

const arrayChecks = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OPPp', 'Sony', 'OnePlus'];

const itemsSubMenu = [
	{
		text: 'Home',
	},
	{
		text: 'Celulares',
	},
	{
		text: 'Motocicletas',
	},
	{
		text: 'Tus préstamos',
	},
	{
		text: 'Tiendas',
	},
	{
		text: 'Tracking',
	},
	{
		text: 'Club Macropay',
	},
];

const items2 = [
	{
		text: <h4 style={{ color: '#0149BE' }}>Marcas</h4>,
		icon: UserOutlined,
		children: [{ key: '1', label: <Checkbox.Group options={arrayChecks} defaultValue={['Apple']} /> }],
	},
	{ text: <h4 style={{ color: '#0149BE' }}>Precio</h4>, icon: LaptopOutlined },
	{
		text: <h4 style={{ color: '#0149BE' }}>Reviews</h4>,
		icon: NotificationOutlined,
		children: [{ key: 2, label: <Rate allowHalf defaultValue={2.5} /> }],
	},
	{ text: <h4 style={{ color: '#0149BE' }}>Memoria</h4>, icon: NotificationOutlined },
	{ text: <h4 style={{ color: '#0149BE' }}>Rango</h4>, icon: NotificationOutlined },
	{ text: <h4 style={{ color: '#0149BE' }}>Cámara</h4>, icon: NotificationOutlined },
].map(({ text, icon, children }, index) => {
	const key = String(index + 1);
	return {
		key: `sub${key}`,
		// icon: React.createElement(icon),
		label: text,
		children: children,
	};
});

const LayoutComponent = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Row style={{ padding: 10, marginBottom: 4, backgroundColor: 'white', boxShadow: '6px 0px 8px #ccc' }}>
				{itemsSubMenu.map((item, index) => (
					<Col span={2} key={index}>
						{item.text}
					</Col>
				))}
			</Row>
			<Layout>
				<Sider
					width={200}
					style={{
						background: colorBgContainer,
					}}
				>
					<Menu
						mode='inline'
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{
							height: '100%',
							borderRight: 0,
						}}
						items={items2}
					/>
				</Sider>
				<Layout>
					<Content
						style={{
							// padding: 24,
							margin: 0,
							minHeight: 280,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<ContentHome />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};
export default LayoutComponent;
