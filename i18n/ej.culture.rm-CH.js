ej.addCulture( "rm-CH", {
	name: "rm-CH",
	englishName: "Romansh (Switzerland)",
	nativeName: "Rumantsch (Svizra)",
	language: "rm",
	numberFormat: {
		",": "'",
		"NaN": "betg def.",
		negativeInfinity: "-infinit",
		positiveInfinity: "+infinit",
		percent: {
			pattern: ["-n%","n%"],
			",": "'"
		},
		currency: {
			pattern: ["$-n","$ n"],
			",": "'",
			symbol: "fr."
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["dumengia","glindesdi","mardi","mesemna","gievgia","venderdi","sonda"],
				namesAbbr: ["du","gli","ma","me","gie","ve","so"],
				namesShort: ["du","gli","ma","me","gie","ve","so"]
			},
			months: {
				names: ["schaner","favrer","mars","avrigl","matg","zercladur","fanadur","avust","settember","october","november","december",""],
				namesAbbr: ["schan.","favr.","mars","avr.","matg","zercl.","fan.","avust","sett.","oct.","nov.","dec.",""]
			},
			monthsGenitive: {
				names: ["da schaner","da favrer","da mars","d'avrigl","da matg","da zercladur","da fanadur","d'avust","da settember","d'october","da november","da december",""],
				namesAbbr: ["da schan.","da favr.","da mars","d'avr.","da matg","da zercl.","da fan.","d'avust","da sett.","d'oct.","da nov.","da dec.",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd-MM-yyyy",
				D: "dddd, 'ils’' d. MMMM, yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, 'ils’' d. MMMM, yyyy HH:mm",
				F: "dddd, 'ils’' d. MMMM, yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});