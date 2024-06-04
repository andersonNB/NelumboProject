import { useEffect, useState, memo } from 'react';
import { Col, Input, Row } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import Cards from '../Cards/Cards';
import useInfoUser from '../../hooks/useInfoUser';

const CustomInput = styled(Input)`
	width: 563px;
	height: 44px;
	background: #ffffff 0% 0% no-repeat padding-box;
	border: 1px solid #d8e0e9;
	border-radius: 24px;
	opacity: 1;
`;

const ContentHome = () => {
	const [infoUser, setinfoUser] = useState([]);

	const { getInfoUser, infoUser: responseData } = useInfoUser();

	useEffect(() => {
		const resolveInfoUser = async () => {
			const response = await getInfoUser();
			setinfoUser(response.items);
		};

		resolveInfoUser();
	}, []);

	const filterInfoUser = async (text) => {
		const { value } = text.target;
		if (value.length === 0) return setinfoUser(responseData.items);
		const response = await infoUser?.filter((user) => user.firstName.toUpperCase().includes(value.toUpperCase()));
		setinfoUser(response);
	};

	return (
		<div>
			<Row>
				<Col span={24}>
					<CustomInput onChange={filterInfoUser} placeholder='Basic usage' prefix={<SearchOutlined />} />
				</Col>
				{infoUser?.length > 0 &&
					infoUser.map((user, index) => (
						<Col key={index}>
							<Cards {...user} />
						</Col>
					))}
			</Row>
		</div>
	);
};

export default memo(ContentHome);
