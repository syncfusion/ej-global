ej.addCulture( "sr-Latn-ME", {
	name: "sr-Latn-ME",
	englishName: "Serbian (Latin, Montenegro)",
	nativeName: "srpski (Crna Gora)",
	language: "sr-Latn",
	numberFormat: {
		",": ".",
		".": ",",
		negativeInfinity: "-beskonačnost",
		positiveInfinity: "+beskonačnost",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],
				namesAbbr: ["ned","pon","uto","sre","čet","pet","sub"],
				namesShort: ["ne","po","ut","sr","če","pe","su"]
			},
			months: {
				names: ["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],
				namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy.",
				D: "d. MMMM yyyy.",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy. H:mm",
				F: "d. MMMM yyyy. H:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy."
			}
		}
	}
});
