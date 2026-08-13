// Skill groups, rendered as chip rows.

export const skills = [
	{
		group: 'Languages & Databases',
		items: ['Python', 'SQL', 'C++', 'R', 'JavaScript', 'MongoDB', 'FAISS'],
	},
	{
		group: 'ML & AI',
		items: [
			'PyTorch',
			'TensorFlow',
			'Keras',
			'Scikit-Learn',
			'LightGBM',
			'XGBoost',
			'LangChain',
			'Transformers',
			'OpenCV',
			'Pandas',
			'NumPy',
		],
	},
	{
		group: 'Cloud & Tools',
		items: [
			'Azure',
			'Docker',
			'FastAPI',
			'Selenium',
			'GitHub Actions',
			'Tableau',
			'Power BI',
			'Streamlit',
			'Jupyter',
			'Postman',
		],
	},
] as const;
