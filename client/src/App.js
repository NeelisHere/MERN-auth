import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/',
		element: <Home />
	}
])

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
