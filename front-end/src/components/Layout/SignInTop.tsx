import { useAuth } from '../../hooks/useAuth';
import { usePutProfileMutation } from '../../redux/apiSlice';
import { useDispatch } from 'react-redux';
import { updateUserInfos } from '../../redux/userSlice';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const nameSchema = z.object({
	firstName: z
		.string()
		.min(2, 'Le prénom doit contenir au moins 2 caractères.')
		.max(20, 'Le prénom doit contenir au plus 20 caractères.')
		.nonempty('Le prénom ne peut pas être vide.')
		.regex(/^[a-zA-Z]+$/, {
			message: 'Le prénom ne doit contenir que des lettres.',
		}),
	lastName: z
		.string()
		.min(2, 'Le nom doit contenir au moins 2 caractères.')
		.max(20, 'Le nom doit contenir au plus 20 caractères.')
		.nonempty('Le nom ne peut pas être vide.')
		.regex(/^[a-zA-Z]+$/, {
			message: 'Le nom ne doit contenir que des lettres.',
		}),
});

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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(nameSchema),
		defaultValues: {
			firstName: user.firstName,
			lastName: user.lastName,
		},
	});

	const handleSave = async (data: { firstName: string; lastName: string }) => {
		// event.preventDefault();
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
			<form
				action=""
				className="form-update invisible"
				onSubmit={handleSubmit(handleSave)}
			>
				<div className="update-form-inputs">
					<input
						type="text"
						defaultValue={user.firstName}
						{...register('firstName')}
					/>
					<input
						type="text"
						defaultValue={user.lastName}
						{...register('lastName')}
					/>
				</div>
				<div className="update-form-buttons">
					<button className="" type="submit">
						Save
					</button>
					<button className="" onClick={cancelChange}>
						Cancel
					</button>
				</div>
				<div className="input-error-message">
					{errors.firstName && <p>{errors.firstName.message}</p>}
					{errors.lastName && <p>{errors.lastName.message}</p>}
				</div>
			</form>
		</div>
	);
};

export default SignInTop;
