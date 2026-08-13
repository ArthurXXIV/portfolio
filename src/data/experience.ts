
/**
 * Experience entries.
 * `overview` + the first two highlights show collapsed; clicking reveals the rest
 * plus `impact`. Set `featured: true` to mark an entry with the droid badge.
 * TODO(atharva): send fuller detail and I'll expand `highlights` / `impact`.
 */
export const experience = [
	{
		id: 'mercer',
		company: 'Mercer (Marsh McLennan)',
		logo: '/logos/marsh.png', // auto-cropped from the original screenshot
		logoPlate: false, // self-contained light-blue tile
		role: 'Data Science Intern',
		location: 'Mumbai, India',
		dates: 'Jan 2025 – Jul 2025',
		featured: true,
		overview:
			'Marsh is an insurance broker and consultant, and most of its analytics output was locked inside ' +
			'documents and legacy R code. I worked on getting that reporting out of manual hands, parsing the ' +
			'quarterly briefing archive into something queryable, and automating two of the reports the business ' +
			'ships to clients.',
		stack: ['Python', 'R', 'FAISS', 'MongoDB', 'LangChain', 'Transformers', 'python-pptx', 'Power BI'],
		highlights: [
			{
				title: 'Quarterly Briefing Platform',
				body:
					'100+ quarterly briefing reports arrived as a mix of PowerPoint, PDF, and Word, so nothing could ' +
					'be compared across quarters without reading them by hand. I built a parser that reads all three ' +
					'formats into a FAISS vector store backed by MongoDB, derives a comparison layer showing which company ' +
					'improved on what relative to earlier quarters, and auto-generates executive dashboards for new ' +
					'hires, managers, and stakeholders.',
			},
			{
				title: 'Retrieval Benchmarking & Historical-Trend Chatbot',
				body:
					'On top of that platform, benchmarked RoBERTa, Mistral, and GPT on retrieval accuracy and latency, ' +
					'then shipped a historical-trend chatbot with guardrails so 50+ internal users could ask across ' +
					'multi-year performance instead of reading the archive quarter by quarter.',
			},
			{
				title: 'Carrier Survey Report: R → Python Migration',
				body:
					'The Carrier Survey Report is the firm’s flagship product: it benchmarks insurance carriers ' +
					'(Chubb, AIG, and peers) against each other, anonymised so no carrier can identify another. Its ' +
					'custom charts can’t be reproduced in Power BI, so it ran on a legacy R pipeline turning an Excel ' +
					'input into a finished PDF. My team refactored that codebase into Python for 500+ marketing ' +
					'end-users, collapsing generation time, leaving far more of the window for QA, and making code ' +
					'changes shippable without hand-delivering a rebuilt report to every reader.',
			},
			{
				title: 'Executive Summary Automation',
				body:
					'Owned end to end. Producing the client-facing Executive Summary meant someone opening Power BI ' +
					'and rebuilding the deck carrier by carrier. I rewrote those charts as Python code and generated ' +
					'the PowerPoint programmatically with version control, turning a repetitive manual build into a ' +
					'single automated run for 50+ end-users.',
			},
		],
		impact: [
			{ value: '90%', label: 'Manual review time cut' },
			{ value: '2wk → 1hr', label: 'Carrier survey generation' },
			{ value: '2wk → 30min', label: 'Executive summary turnaround' },
			{ value: '500+', label: 'End-users served' },
		],
	},
	{
		id: 'mahindra',
		company: 'Mahindra and Mahindra',
		logo: '/logos/mahindra.jpeg',
		logoPlate: false, // white mark on its own red tile
		role: 'Data Science Intern',
		location: 'Mumbai, India',
		dates: 'May 2024 – Jul 2024',
		featured: true,
		overview:
			'Built conversational systems on a shared, reusable Azure-hosted RAG pipeline over Mahindra’s vehicle ' +
			'data. One powers a showroom robot, the other call-centre deflection, plus a Selenium automation for the ' +
			'internal CMS. I worked on the backend and data layer; the robot’s frontend was built by another team ' +
			'against the API I exposed.',
		stack: ['Azure', 'RAG', 'GPT APIs', 'FastAPI', 'Postman', 'Selenium', 'Docker'],
		highlights: [
			{
				title: 'In-Showroom Humanoid Robot',
				body:
					'The robot hardware was imported from Israel; we built the software behind it: an Azure-hosted ' +
					'chatbot backend using GPT APIs on a reusable RAG pipeline over Mahindra vehicle data, with the ' +
					'current lineup held in a dataframe the assistant reads from. It answers only on Mahindra ' +
					'vehicles, and can trigger refreshment service for waiting customers. The point was coverage: ' +
					'when dealership staff are occupied, the robot engages walk-in customers and walks them through ' +
					'choosing a car via a touch interface of synchronized vehicle imagery.',
			},
			{
				title: 'Call Centre Deflection Bot',
				body:
					'The same retrieval foundation extended with intent-routing (dealership locator, service and ' +
					'car-wash booking, scheduling a demo) to offload volume from live agents so they keep their time ' +
					'for calls that need a person. Tested in a closed beta rather than public release; it was still ' +
					'in progress when my internship ended.',
			},
			{
				title: 'Backend API & Response Validation',
				body:
					'Exposed both services through FastAPI endpoints consumed by the frontend team, and validated ' +
					'responses via Postman internal testing, enforcing guardrails that block off-topic replies and ' +
					'protect brand voice before anything reached a customer.',
			},
			{
				title: 'Internal CMS Automation',
				body:
					'Updating customer records in Mahindra’s internal CMS portal was entirely manual, including every ' +
					'subsequent change. I automated it using Selenium and Docker-based workflows that drive Chrome ' +
					'through the portal and applying updates across roughly 500 pages unattended for internal ' +
					'content teams.',
			},
		],
		impact: [
			{ value: '83%', label: 'Positive feedback in beta' },
			{ value: '500+', label: 'Closed beta participants' },
			{ value: '1–2 days → 10min', label: 'CMS refresh cycle' },
		],
	},
	{
		id: 'flowres',
		company: 'Flowres.IO (myMRPlace)',
		logo: '/logos/flowresio.jpeg',
		logoPlate: false, // dark mark on its own orange tile
		role: 'Software Intern',
		location: 'Mumbai, India',
		dates: 'May 2023 – Jul 2023',
		featured: false,
		overview:
			'My first internship, on a quantitative research pipeline that answered analyst questions from ' +
			'transcribed talks. I joined as the most junior person on the team, so my contributions were focused on ' +
			'the prompt and quality-assurance side rather than the core architecture.',
		stack: ['Python', 'TensorFlow', 'PyTorch', 'RAG', 'OpenAI API', 'Whisper', 'Postman', 'Docker'],
		highlights: [
			{
				title: 'Quantitative Research Pipeline',
				body:
					'Contributed to a TensorFlow and PyTorch pipeline that ingested analyst Excel inputs, retrieved ' +
					'context via RAG over talk transcripts produced with Whisper, and called OpenAI APIs to ' +
					'auto-generate structured Q&A outputs back for downstream review.',
			},
			{
				title: 'Prompt Engineering & Guardrails',
				body:
					'Designed prompt-engineering workflows to make answers clearer and more focused, and added ' +
					'guardrails so the system stayed on the questions asked instead of drifting into unrelated ground.',
			},
			{
				title: 'Validation & Pipeline Runs',
				body:
					'Ran validation cycles via Postman and Docker, checking generated answers against the source ' +
					'material to ensure response accuracy before handoff to the research analysts consuming the ' +
					'output, and ran the pipelines so the team had results to analyse.',
			},
		],
		impact: [],
	},
] as const;
