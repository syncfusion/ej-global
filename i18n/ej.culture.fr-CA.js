ej.addCulture( "fr-CA", {
	name: "fr-CA",
	englishName: "French (Canada)",
	nativeName: "français (Canada)",
	language: "fr",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Non numérique",
		negativeInfinity: "-Infini",
		positiveInfinity: "+Infini",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["(n $)","n $"],
			",": " ",
			".": ","
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
				namesAbbr: ["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],
				namesShort: ["di","lu","ma","me","je","ve","sa"]
			},
			months: {
				names: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],
				namesAbbr: ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});
