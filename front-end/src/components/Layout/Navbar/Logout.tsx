import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '../../../hooks/useAuth';

export const Logout = () => {
	const { user } = useAuth();
	return (
		<>
			<div className="nav-logout-container">
				<Link className="nav-user-info" to="/profile">
					<CgProfile size={30} className="icon-responsive" />
					<p className='nav-username'>{user.firstName}</p>
				</Link>
				<Link className="main-nav-item" to="/sign-in">
					<MdLogout size={30} className="icon-responsive" />
					<p>Sign Out</p>
				</Link>
			</div>
		</>
	);
};
