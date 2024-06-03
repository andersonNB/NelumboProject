import axios from 'axios';
import nelumboUrlsAPI from '../urls/nelumboUrlsAPI';

const usersBaseURL = axios.create({
	baseURL: nelumboUrlsAPI,
});

usersBaseURL.interceptors.request.use((config) => {
	//Con este interceptor cada petición que hagamos tendra el token
	config.headers = {
		...config.headers,
		Authorization:
			'Bearer ' +
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6MTMwLCJ1c2VybmFtZSI6InJhZmFlbEBnbWFpbC5jb20iLCJyb2xlSWQiOjEsInVzZXJUeXBlSWQiOjF9LCJqdGkiOiJkZWNmMzI2Zi0yMDY2LTRiZjUtOGU2Mi1mOTJlYmFmMGJmNWMiLCJpYXQiOjE3MTc0NDQ0MTYsImV4cCI6MTcxNzQ4NzYxNn0.d-wl2JoSfG2NhYQG3wV874UVCf62naQPvp_HOmSRxVI',
	};

	return config;
});

export default usersBaseURL;
