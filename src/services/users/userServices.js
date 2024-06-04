import usersBaseURL from "../wrappers/users";


const getInfoUsers = async () => {
	try {
		const { data } = await usersBaseURL.get('users/detailed?page=1&size=20');
        // console.log({data})
		return data;
	} catch (error) {
		console.error(error);
	}
};

export { getInfoUsers };