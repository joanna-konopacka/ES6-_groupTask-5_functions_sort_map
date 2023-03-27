/*
1. Stwórz tablicę z ilością tytułów od największej
2. Stwórz tablicę z krajami pochodzenia alfabetycznie
3. Stwórz tablicę z zarobkami w PLN (kurs dolara z 27.03.2023) */

const data = [
	{
		Player: "Roger Federer",
		Country: "Switzerland",
		grandSlamTitles: "20",
		EarningsMln$: "130.594",
	},
	{
		Player: "Marat Safin",
		Country: "Russia",
		grandSlamTitles: "2",
		EarningsMln$: "14.373",
	},
	{
		Player: "Rafael Nadal",
		Country: "Spain",
		grandSlamTitles: "23",
		EarningsMln$: "134.640",
	},
	{
		Player: "Pete Sampras",
		Country: "USA",
		grandSlamTitles: "14",
		EarningsMln$: "43.280",
	},
	{
		Player: "Novak Djokovic",
		Country: "Serbia",
		grandSlamTitles: "22",
		EarningsMln$: "167.014",
	},
	{
		Player: "Andy Murray",
		Country: "Great Britain",
		grandSlamTitles: "3",
		EarningsMln$: "63.591",
	},
	{
		Player: "Alexander Zverev",
		Country: "Germany",
		grandSlamTitles: "0",
		EarningsMln$: "33.548",
	},
];

const getGrandSlamTitles = (array) => {
	array.sort(function (a, b) {
		return parseInt(b.grandSlamTitles) - parseInt(a.grandSlamTitles);
	});
	array.forEach(function (element) {
		console.log(element.Player + ": " + element.grandSlamTitles);
	});
};
getGrandSlamTitles(data);

const sortByCountry = (array) => {
	const newArray = array.map(function (element) {
		return element.Country;
	});
	const sortedArray = newArray.sort();
	console.log(sortedArray);
};
sortByCountry(data);

const getEarningsPLN = (array) => {
	const earningsPLN = array.map(function (element) {
		return parseInt(element.EarningsMln$ * 4.35);
	});
	console.log(earningsPLN);
};
getEarningsPLN(data);
