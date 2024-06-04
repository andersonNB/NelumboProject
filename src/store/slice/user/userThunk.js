import { getInfoUsers } from "../../../services/users/userServices";
import { setInfoUser } from "./userSlice";

export const tgetUserInfo = () => async (dispatch) => {
	try {
		const res =  await getInfoUsers();
		// console.log(res)
        dispatch(setInfoUser(res));
        return res
		
	} catch (e) {
		// dispatch(setIsLogin(false));
		if (e.error === 400) return alert('Sin info de momento');
	}
};