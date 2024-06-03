import { useDispatch, useSelector } from 'react-redux';
import { tgetUserInfo } from '../store/slice/user/userThunk';

const useInfoUser = () => {
	const dispatch = useDispatch();
	const {infoUser} = useSelector((state) => state.USER);

	const getInfoUser = async () => {
		const res = await dispatch(tgetUserInfo());
		// console.log(res);
		return res;
	};

	return {
		//atributos
		infoUser,
		//metodos
		getInfoUser,
	};
};

export default useInfoUser;
