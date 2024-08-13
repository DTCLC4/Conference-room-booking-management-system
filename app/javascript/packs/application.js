import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Bootstrap CSS và JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from '../components/Home';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />{' '}
			<Route path="login" element={<LoginForm />} />{' '}
			<Route path="register" element={<RegisterForm />} />{' '}
		</Routes>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('react-root');
	const root = ReactDOM.createRoot(container);
	root.render(<App />);
});
