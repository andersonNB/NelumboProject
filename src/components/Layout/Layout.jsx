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
		key: 1,
		text: <h4 style={{ color: '#0149BE' }}>Marcas</h4>,
		icon: UserOutlined,
		children: [{ key: 2, label: <Checkbox.Group options={arrayChecks} defaultValue={['Apple']} /> }],
	},
	{ text: <h4 style={{ color: '#0149BE' }}>Precio</h4>, icon: LaptopOutlined },
	{
		text: <h4 style={{ color: '#0149BE' }}>Reviews</h4>,
		icon: NotificationOutlined,
		children: [{ key: 3, label: <Rate allowHalf defaultValue={2.5} /> }],
	},
	{ text: <h4 style={{ color: '#0149BE' }}>Memoria</h4>, icon: NotificationOutlined },
	{ text: <h4 style={{ color: '#0149BE' }}>Rango</h4>, icon: NotificationOutlined },
	{ text: <h4 style={{ color: '#0149BE' }}>Cámara</h4>, icon: NotificationOutlined },
].map(({ text, children }, index) => {
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
						defaultSelectedKeys={['sub1']}
						defaultOpenKeys={['sub1','sub2','sub3','sub4','sub5','sub6']}
						style={{
							height: '100%',
							borderRight: 0,
						}}
						items={items2}
						expandIcon={null}
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
