import ArgentBankLogo from '../../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';

export const Navbar = () => {
	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img
					className="main-nav-logo-image"
					src={ArgentBankLogo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div className="wrap-header-connect">
				{/* <Login /> */}
			<Logout />	
			</div>
		</nav>
	);
};
