// Projects and publications, rendered as trading-terminal ticker cards.

export const projects = [
	{
		name: 'Dynamic Retrieval-based Intelligent Vehicle Recommender',
		logo: null,
		logoPlate: false,
		logoWide: false,
		note: null,
		symbol: 'DRIV',
		subtitle: 'DRIV',
		featured: true,
		stack: ['Python', 'Streamlit', 'FAISS', 'Gemini API', 'GitHub Actions', 'Selenium'],
		body:
			'A monthly Selenium and GitHub Actions workflow scrapes Indian automotive sites into a live FAISS vector ' +
			'database of specs, pricing, and features. A Streamlit app on top delivers real-time personalized vehicle ' +
			'comparisons, removing stale-data risk in the pre-LLM-browsing era.',
		tags: ['Retrieval', 'ETL', 'LLM'],
		href: 'https://github.com/ArthurXXIV/DRIV_Dynamic_Retrieval-based_Intelligent_Vehicle_Recommender',
		dataset: {
			label: 'Indian Cars Dataset',
			href: 'https://www.kaggle.com/datasets/atharvanilawar/indian-cars-dataset',
		},
	},
	{
		name: 'AI Vegetable Detection System',
		logo: null,
		logoPlate: false,
		logoWide: false,
		symbol: 'VDET',
		subtitle: 'Datathon 2.0 Winner · Team project',
		featured: true,
		// Team project: the canonical repo belongs to a teammate; this links there.
		note: 'Built with @yashsindhu04. The canonical repository lives on their account.',
		stack: ['Python', 'YOLO', 'OpenCV', 'Streamlit'],
		body:
			'A YOLO and OpenCV pipeline identifying vegetables from images in real time, eliminating barcode scanning ' +
			'at retail checkout. Shipped with a Streamlit demo and a supermarket rollout roadmap covering automated ' +
			'weight estimation and price computation.',
		tags: ['Computer Vision', 'Award'],
		href: 'https://github.com/yashsindhu04/Vegetable-Detection',
		dataset: null,
	},
	{
		name: 'Green Technology: High-Speed Rail in India',
		logo: '/logos/igi_global.png',
		logoPlate: false, // self-contained blue wordmark
		logoWide: true, // 3.5:1 wordmark needs a wider tile to stay legible
		note: null,
		symbol: 'HSRI',
		subtitle: 'Peer-Reviewed IGI Global Book Chapter, 2024',
		featured: false,
		stack: ['Research', 'Sustainability Analytics'],
		body:
			'Co-authored a peer-reviewed IGI Global chapter evaluating the environmental and economic impact of ' +
			'India’s high-speed rail program through data-driven sustainability indicators.',
		tags: ['Publication'],
		href: 'https://doi.org/10.4018/979-8-3693-3985-5.ch003',
		dataset: null,
	},
] as const;
