const { FORMSPREE_ENDPOINT } = process.env;

const contact = async (req, res) => {
	const { name, email, message } = JSON.parse(req.body);

	if (!name || !email || !message) {
		return res.status(400).json({
			success: false,
			message: 'Please fill all the required fields!',
		});
	}

	try {
		const url = `https://formspree.io/f${FORMSPREE_ENDPOINT}`;

		const body = JSON.stringify({
			name,
			email,
			message,
		});

		const options = {
			body,
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		};

		const response = await fetch(url, options);

		if (response.status >= 400) {
			const text = await response.text();
			return res.status(400).json({
				success: false,
				message: text,
			});
		}

		return res.status(201).json({
			success: true,
			message: 'Your message was sent successfully!',
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Unable to sent your mail. Sorry.',
		});
	}
};

export default contact;
