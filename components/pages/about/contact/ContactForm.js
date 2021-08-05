import { useState } from 'react';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';

import { useForm } from '@/hooks/useForm';

const ContactForm = () => {
	const [values, handleChange] = useForm({
		name: '',
		email: '',
		message: '',
	});
	const [formState, setFormState] = useState({ state: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const options = {
			body: JSON.stringify(values),
			method: 'POST',
		};

		console.log(values, JSON.stringify(values), options);

		const res = await fetch('/api/contact/', options);

		const { success, message } = await res.json();

		if (!success) {
			setFormState({
				state: 'error',
				message,
			});
			setIsLoading(false);

			return;
		}

		setFormState({
			state: 'success',
			message,
		});
		setIsLoading(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl id='name'>
				<FormLabel>Name</FormLabel>
				<Input
					mb={4}
					type='name'
					value={values.name}
					onChange={handleChange}
					isRequired
					autoComplete='name'
					borderRadius='sm'
					placeholder='jimmy'
				/>
			</FormControl>

			<FormControl id='email'>
				<FormLabel>Email</FormLabel>
				<Input
					mb={4}
					type='email'
					value={values.email}
					onChange={handleChange}
					isRequired
					autoComplete='email'
					borderRadius='sm'
					placeholder='jimmy@choo.com'
				/>
			</FormControl>

			<FormControl id='message'>
				<FormLabel>Message</FormLabel>
				<Textarea
					mb={4}
					h='8rem'
					type='text'
					value={values.message}
					onChange={handleChange}
					isRequired
					borderRadius='sm'
					placeholder='type your message...'
				/>
			</FormControl>

			<Button
				w='100%'
				// variant='primary'
				type='submit'
				isLoading={isLoading}
				loadingText='sending...'
			>
				Send
			</Button>

			{formState.state === 'success' && <p mt={4}>{formState.message}</p>}
			{formState.state === 'error' && <p mt={4}>{formState.message}</p>}
		</form>
	);
};

export default ContactForm;
