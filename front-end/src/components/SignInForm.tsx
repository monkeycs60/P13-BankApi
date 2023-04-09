import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const SignInForm = () => {
	const schema = z.object({
		username: z.string().min(3).max(20),
		password: z.string().min(8).max(20),
	});

	type SignInForm = z.infer<typeof schema>;

	const { register, handleSubmit, formState: { errors }
  } = useForm<SignInForm>({
		resolver: zodResolver(schema),
	});

	const onValid = (data: SignInForm) => {
		console.log(data);
	};

	const onInvalid = (errors: any) => {
		console.log(errors);
	};

	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit(onValid, onInvalid)}>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" {...register('username')} />
					{errors.username && (
						<p className="input-error-message">
							{errors.username.message}
						</p>
					)}
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" {...register('password')} />
					{errors.password && (
						<p className="input-error-message">
							{errors.password.message}
						</p>
					)}
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<button className="sign-in-button">Sign In</button>
			</form>
		</section>
	);
};
