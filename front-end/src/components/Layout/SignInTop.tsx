import { useAuth } from '../../hooks/useAuth';

const SignInTop = () => {
	const { user } = useAuth();

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
					<button className="">Save</button>
					<button className="" onClick={cancelChange}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignInTop;
