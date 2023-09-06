const countryList = [
	'Bermuda',
'Bhutan',
'Cox`s Bazar',
'Sundarbans Mangrove Forest',
'Sylhet and Sylhet Tea Gardens',
'Saint Martin`s Island',
'Kuakata Beach',
'Bandarban Hill Tracts',
'Rangamati',
'Khulna and the Rocket Steamer',
'Dhaka (capital city)',
'Chittagong (Chattogram)',
'Rajshahi',
'Barisal',
'Paharpur Buddhist Vihara',
'Maheshkhali Island',
'Sonargaon',
'Puthia Temple Complex',
'Kuakata',
'Lalbagh Fort',
'Ratnodweep Island',
'Jaflong',
];

const autoCompleteJS = new autoComplete({
	selector: '#location',
	placeHolder: 'Destination...',
	data: {
		src: countryList,
		cache: true,
	},
	resultItem: {
		highlight: true,
	},
	events: {
		input: {
			selection: (event) => {
				const selection = event.detail.selection.value;
				autoCompleteJS.input.value = selection;
			},
		},
	},
	resultsList: {
		maxResults: 15,
	},
	searchEngine: 'strict',
});
