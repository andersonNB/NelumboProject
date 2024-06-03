import { useEffect, useState, memo } from 'react';
import { getInfoUsers } from '../../services/users/userServices';
import { Col, Row } from 'antd';
import Cards from '../Cards/Cards';
import useInfoUser from "../../hooks/useInfoUser";

const ContentHome = () => {
	const [infoUser, setinfoUser] = useState([]);

    const {getInfoUser} = useInfoUser();

	useEffect(() => {
		const resolveInfoUser = async () => {
			const response = await getInfoUser();
			setinfoUser(response);
		};

		resolveInfoUser();
	}, []);


	return (
		<div>
			<Row>
				{infoUser?.items?.length > 0 &&
					infoUser.items.map((user, index) => (
						<Col key={index}>
							<Cards {...user} />
						</Col>
					))}
			</Row>
		</div>
	);
};

export default memo(ContentHome);
