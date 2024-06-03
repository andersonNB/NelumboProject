import { Layout, Menu } from "antd";



const { Header } = Layout;
const Navbar = ({itemsMenu}) => {
  return (
    <Header
				style={{
					display: 'flex',
					alignItems: 'center',
					backgroundColor: '#0149BE',
				}}
			>
				<div className='demo-logo' />
				<Menu
					mode='horizontal'
					defaultSelectedKeys={['2']}
					items={itemsMenu}
					style={{
						flex: 1,
						minWidth: 0,
						backgroundColor: '#0149BE',
						color: 'yellow',
						justifyContent: 'space-between',
					}}
				/>
			</Header>
  )
}

export default Navbar