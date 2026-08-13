// The About section: the ten-card deck, and the headline stats shown in the hero.

export const about = {
	// Cards for the deck in the About section. `group` splits them into two halves.
	cards: [
		{
			group: 'What I do',
			title: 'Automating the manual',
			body:
				'At Mercer I turned an archive of quarterly briefing documents into a retrieval platform, and ' +
				'rewrote the R pipeline behind a flagship client report in Python. The thread across everything ' +
				'I have built: work that only happened because a person did it by hand now runs on its own.',
		},
		{
			group: 'What I do',
			title: 'Retrieval in production',
			body:
				'At Mahindra I built an Azure-hosted retrieval service that sat behind an in-showroom humanoid ' +
				'robot and a call-centre assistant. Real customers on the other end, which changes how you think ' +
				'about guardrails.',
		},
		{
			group: 'What I do',
			title: 'Logic before syntax',
			body:
				'What pulls me into a problem is the reasoning rather than the syntax. I like sitting with a ' +
				'messy question until the structure underneath it is clear, then writing the code that follows ' +
				'from it.',
		},
		{
			group: 'What I do',
			title: 'Competing to learn',
			body:
				'I compete on Kaggle regularly, less for the leaderboard than because a ranked problem with a ' +
				'fixed deadline is the fastest way I know to find the gaps in my own approach.',
		},
		{
			group: 'What I do',
			title: 'Aiming at markets',
			body:
				'Markets are the domain I keep circling back to. Building something that contributes there is ' +
				'what I am working toward, and it is why the background of this site is a price chart.',
		},
		{
			group: 'What I like',
			title: 'Ultimate frisbee',
			body:
				'Picked it up after moving to USC and joined the team. The most fun I have had with a group of ' +
				'people in years, and a good reason to be outside every week.',
		},
		{
			group: 'What I like',
			title: 'Star Wars',
			body:
				'A long-running fan, The Mandalorian above all. That theme song puts you somewhere else entirely. ' +
				'This site\'s palette and the droid on the featured cards both came from it.',
		},
		{
			group: 'What I like',
			title: 'Maths',
			body:
				'The subject that never felt like work. Most of what I enjoy about data science traces straight ' +
				'back to it. Physics and I agreed to go our separate ways.',
		},
		{
			group: 'What I like',
			title: 'International politics',
			body:
				'I follow it closely. It is the other system I find worth reading carefully, and it overlaps with ' +
				'markets more often than people expect.',
		},
		{
			group: 'What I like',
			title: 'Exploring over scrolling',
			body:
				'Given a free evening I would rather go and find something than sit with a feed, which is why I ' +
				'am reliably terrible at keeping up with social media.',
		},
	],

	// Headline credentials, shown in the hero. The delivery metrics that used to
	// sit here now live inside each experience modal, where they have context.
	stats: [
		{ value: '3', label: 'Internships' },
		{ value: 'Winner', label: 'Datathon 2.0' },
		{ value: '1', label: 'Peer-reviewed chapter' },
	],
} as const;
