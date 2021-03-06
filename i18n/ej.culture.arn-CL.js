ej.addCulture( "arn-CL", {
	name: "arn-CL",
	englishName: "Mapudungun (Chile)",
	nativeName: "Mapudungun (Chile)",
	language: "arn",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-$ n","$ n"],
			",": ".",
			".": ","
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["Kiñe Ante","Epu Ante","Kila Ante","Meli Ante","Kechu Ante","Cayu Ante","Regle Ante"],
				namesAbbr: ["Kiñe","Epu","Kila","Meli","Kechu","Cayu","Regle"],
				namesShort: ["kñ","ep","kl","me","ke","ca","re"]
			},
			months: {
				names: ["Kiñe Tripantu","Epu","Kila","Meli","Kechu","Cayu","Regle","Purha","Aiya","Marhi","Marhi Kiñe","Marhi Epu",""],
				namesAbbr: ["Kiñe Tripantu","Epu","Kila","Meli","Kechu","Cayu","Regle","Purha","Aiya","Marhi","Marhi Kiñe","Marhi Epu",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd-MM-yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
				F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});