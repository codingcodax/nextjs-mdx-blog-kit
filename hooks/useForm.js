import { useState } from 'react';

const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e) =>
		setValues({ ...values, [e.target.id]: e.target.value });

	return [values, handleChange];
};

export default useForm;
