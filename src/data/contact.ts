// The Contact section: intro line and the channel list.

export const contact = {
	intro:
		'I’m open to internships, new-grad roles, and interesting problems in applied ML and data engineering. ' +
		'The fastest way to reach me is email.',
	channels: [
		{ label: 'Email', value: 'atharvan3@gmail.com', href: 'mailto:atharvan3@gmail.com', icon: 'mail' },
		{
			label: 'LinkedIn',
			value: 'atharva-nilawar',
			href: 'https://www.linkedin.com/in/atharva-nilawar-369514221/',
			icon: 'linkedin',
		},
		{ label: 'GitHub', value: 'ArthurXXIV', href: 'https://github.com/ArthurXXIV', icon: 'github' },
		{ label: 'Kaggle', value: 'atharvanilawar', href: 'https://www.kaggle.com/atharvanilawar', icon: 'kaggle' },
		{ label: 'Location', value: 'Los Angeles, CA', href: null, icon: 'pin' },
	],
} as const;
