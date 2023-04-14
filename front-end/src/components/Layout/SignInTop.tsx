import { useAuth } from '../../hooks/useAuth';
import { usePutProfileMutation } from '../../redux/apiSlice';
import { useDispatch } from 'react-redux';
import { updateUserInfos } from '../../redux/userSlice';

const SignInTop = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();
	const [putProfile, { isLoading }] = usePutProfileMutation();

	const displayEdition = () => {
		const form = document.querySelector('.form-update');
		const editedArea = document.querySelector('.edited-area');
		//add invisible class to edited area
		editedArea?.classList.add('invisible');
		// remove it from form
		form?.classList.remove('invisible');
	};

	const cancelChange = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		const form = document.querySelector('.form-update');
		const editedArea = document.querySelector('.edited-area');
		//add invisible class to edited area
		editedArea?.classList.remove('invisible');
		// remove it from form
		form?.classList.add('invisible');
	};

	const handleSave = async (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		const form = document.querySelector('.form-update');
		const firstNameInput = form?.querySelector(
			'input[type="text"]:nth-child(1)'
		) as HTMLInputElement;
		const lastNameInput = form?.querySelector(
			'input[type="text"]:nth-child(2)'
		) as HTMLInputElement;
		const editedArea = document.querySelector('.edited-area');

		if (firstNameInput && lastNameInput) {
			const updatedUser = {
				...user,
				firstName: firstNameInput.value,
				lastName: lastNameInput.value,
			};
			try {
				await putProfile(updatedUser).unwrap();
				// Update the local user state
				dispatch(updateUserInfos(updatedUser));

				editedArea?.classList.remove('invisible');
				form?.classList.add('invisible');
			} catch (error) {
				console.error('Failed to update user profile', error);
			}
		}
	};

	return (
		<div className="header">
			<h2>Welcome back</h2>
			<div className="edited-area">
				<h2>
					{user.firstName} {user.lastName}!
				</h2>
				<button className="edit-button" onClick={displayEdition}>
					Edit Name
				</button>
			</div>
			<form action="" className="form-update invisible">
				<div className="update-form-inputs">
					<input type="text" defaultValue={user.firstName} />
					<input type="text" defaultValue={user.lastName} />
				</div>
				<div className="update-form-buttons">
					<button className="" onClick={handleSave}>Save</button>
					<button className="" onClick={cancelChange}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignInTop;
