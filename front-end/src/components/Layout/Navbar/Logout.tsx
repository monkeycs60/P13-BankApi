import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { usePostProfileMutation } from '../../../redux/apiSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfos } from '../../../redux/userSlice';
import { z } from 'zod';

export const Logout = () => {
	return (
		<>
			<div>
				<CgProfile size={20} />
				<Link className="main-nav-item" to="/sign-in">
					<MdLogout size={20} />
					<p>Sign Out</p>
				</Link>
			</div>
		</>
	);
};
