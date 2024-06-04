import { Avatar, List } from 'antd';
import styled from 'styled-components';

const data = Array.from({
	length: 4,
}).map((_, i) => ({
	avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
}));

const Container = styled(List)`
	.ant-list-items {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.ant-avatar {
		width: 127px;
		height: 127px;
		overflow: inherit;
	}
	.ant-list-item-meta {
		margin-block-end: 0 !important;
	}

	.ant-list-item {
		padding: 5px 24px;
	}
`;
const CarouselCustom = () => (
	<Container
		itemLayout='vertical'
		size='large'
		dataSource={data}
		renderItem={(item) => (
			<List.Item key={item.title}>
				<List.Item.Meta avatar={<Avatar src={item.avatar} />} />
				{item.content}
			</List.Item>
		)}
	/>
);
export default CarouselCustom;
