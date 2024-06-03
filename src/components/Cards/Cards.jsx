import { Card } from 'antd';
import { useNavigate } from "react-router-dom";
import iconUser from "../../assets/iconUser.svg"

const Cards = (user = []) => {

	const navigate = useNavigate();

	const showDetailsInfoUser = () => {
		navigate(`/detailUser/${user.id}`);
	}


	return (
		<Card
			title={`${user.firstName} ${user.lastName}`}
			bordered={false}
			style={{
				width: 300,
				height: 400,
				margin: 10,
				border: '1px solid #ccc',
				boxShadow: '5px 10px 5px #ccc',
				cursor: 'pointer',
			}}


			onClick={()=>showDetailsInfoUser(user.id)}
		>
			<img src={iconUser} alt="imagen de prueba" height={150} width={150} />
			<p>{user.role}</p>
		</Card>
	);
};

export default Cards;
