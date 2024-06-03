import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import Navbar from './components/Navbar/Navbar';
import { itemsMenu } from './components/const/constants';
function App() {
	return (
		<>
			<Navbar itemsMenu={itemsMenu} />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
