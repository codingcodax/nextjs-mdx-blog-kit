import { useState } from 'react';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';

import useForm from '@/hooks/useForm';
import useColorModeValues from '@/hooks/useColorModeValues';
import { ErrorMessage, SuccessMessage } from './Messages';

const ContactForm = () => {
	const [values, handleChange] = useForm({
		name: '',
		email: '',
		message: '',
	});
	const [formState, setFormState] = useState({ state: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);

	const {
		headingSecondaryColor,
		glassBgOne,
		glassBgTwo,
		glassBoxShadow,
		glassBorder,
	} = useColorModeValues();

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
				<FormLabel color={headingSecondaryColor}>Name</FormLabel>
				<Input
					mb={4}
					type='name'
					value={values.name}
					onChange={handleChange}
					isRequired
					autoComplete='name'
					placeholder='jimmy'
					bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
					boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
					borderRadius='20px'
					border={`1px solid ${glassBorder}`}
					_hover={{ bgColor: glassBgTwo }}
				/>
			</FormControl>

			<FormControl id='email'>
				<FormLabel color={headingSecondaryColor}>Email</FormLabel>
				<Input
					mb={4}
					type='email'
					value={values.email}
					onChange={handleChange}
					isRequired
					autoComplete='email'
					placeholder='jimmy@choo.com'
					bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
					boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
					borderRadius='20px'
					border={`1px solid ${glassBorder} !important`}
					_hover={{ bgColor: glassBgTwo }}
				/>
			</FormControl>

			<FormControl id='message'>
				<FormLabel color={headingSecondaryColor}>Message</FormLabel>
				<Textarea
					mb={4}
					h='8rem'
					type='text'
					value={values.message}
					onChange={handleChange}
					isRequired
					placeholder='type your message...'
					bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
					boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
					borderRadius='20px'
					border={`1px solid ${glassBorder} !important`}
					_hover={{ bgColor: glassBgTwo }}
				/>
			</FormControl>

			<Button
				w='100%'
				type='submit'
				isLoading={isLoading}
				loadingText='sending...'
				bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
				boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
				borderRadius='20px'
				border={`1px solid ${glassBorder} !important`}
				_hover={{ bgColor: glassBgTwo }}
			>
				Send
			</Button>

			{formState.state === 'success' && (
				<SuccessMessage mt={4}>{formState.message}</SuccessMessage>
			)}
			{formState.state === 'error' && (
				<ErrorMessage mt={4}>{formState.message}</ErrorMessage>
			)}
		</form>
	);
};

export default ContactForm;
