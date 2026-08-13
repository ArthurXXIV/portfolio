// The 'Hi, I'm' block at the top of the page: name, role, availability,
// contact links, and the resume file. Rendered by Hero.astro.

export const profile = {
	name: 'Atharva Nilawar',
	tagline: 'Applied Data Scientist',
	blurb:
		'I build data systems people actually use: retrieval platforms over messy enterprise documents, and ' +
		'pipelines that turn two-week reporting cycles into one-hour ones.',
	location: 'Los Angeles, CA',
	// Rendered as a terminal-style readout under the job title: a dim label in
	// the left column, the value in the right. US recruiters screen on these
	// first, so every value is set at full text contrast.
	availability: [
		{ label: 'Status', value: 'Open to full-time roles and Spring 2027 co-op' },
		{ label: 'Graduating', value: 'May 2027' },
		{ label: 'Work mode', value: 'Relocate / Hybrid / Remote' },
	],
	email: 'atharvan3@gmail.com',
	phone: '+1 213-214-7679',
	links: {
		linkedin: 'https://www.linkedin.com/in/atharva-nilawar-369514221/',
		github: 'https://github.com/ArthurXXIV',
		kaggle: 'https://www.kaggle.com/atharvanilawar',
	},
	// Place the PDF in public/ and keep this path in sync.
	resume: '/Atharva_Nilawar_Resume.pdf',
} as const;
