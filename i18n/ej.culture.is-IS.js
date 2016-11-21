ej.addCulture( "is-IS", {
	name: "is-IS",
	englishName: "Icelandic (Iceland)",
	nativeName: "íslenska (Ísland)",
	language: "is",
	numberFormat: {
		",": ".",
		".": ",",
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			decimals: 0,
			",": ".",
			".": ",",
			symbol: "kr."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],
				namesAbbr: ["sun.","mán.","þri.","mið.","fim.","fös.","lau."],
				namesShort: ["su","má","þr","mi","fi","fö","la"]
			},
			months: {
				names: ["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember",""],
				namesAbbr: ["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des.",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy",
				D: "d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d. MMMM yyyy HH:mm",
				F: "d. MMMM yyyy HH:mm:ss",
				M: "d. MMMM"
			}
		}
	}
});
