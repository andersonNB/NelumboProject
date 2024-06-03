import { Navigate, createBrowserRouter ,  } from 'react-router-dom';
import HomePage from "../views/HomePage";
import DetailsUser from "../views/DetailUser/DetailsUser";


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/detailUser/:id',
		element: <DetailsUser />,
	},
	{
		path: '*',
		element: <Navigate to="/" />,
	}
]);	

export default router;
