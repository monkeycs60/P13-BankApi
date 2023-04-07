import ArgentBankLogo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

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
				<Link className="main-nav-item" to="/sign-in">
					<i className="fa fa-user-circle"></i>
					<p>Sign In</p>
				</Link>
			</div>
		</nav>
	);
};
