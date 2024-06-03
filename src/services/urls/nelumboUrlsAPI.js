export const env = 'dev';

const URLS = {
	dev: import.meta.env.VITE_API_URL,
};

const URL_DEFAULT = 'http://localhost:3030/';

const nelumboUrlsAPI = URLS[env] || URL_DEFAULT;

export default nelumboUrlsAPI;
