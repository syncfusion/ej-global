ej.addCulture( "af", {
	name: "af",
	englishName: "Afrikaans",
	nativeName: "Afrikaans",
	language: "af",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["$-n","$ n"],
			",": " ",
			".": ",",
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],
				namesAbbr: ["Son","Maan","Dins","Woen","Dond","Vry","Sat"],
				namesShort: ["So","Ma","Di","Wo","Do","Vr","Sa"]
			},
			months: {
				names: ["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember",""],
				namesAbbr: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des",""]
			},
			AM: ["VM.","vm.","VM."],
			PM: ["NM.","nm.","NM."],
			patterns: {
				d: "yyyy/MM/dd",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt",
				M: "d MMMM"
			}
		}
	}
});