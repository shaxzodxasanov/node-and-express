const fortuneCookies = [
	"agar, ko'p uxlasang: orzularingni tushingda ko'rasan",
	"Mehnat. Mehnatning tagi rohat!",
	"Yomg'ir bilan yer ko'karar, mehnat bilan odam",
	"ish ishtaxa ochar, dangasa ishdan qochar!",
	"Do'st, do'stning oynasi",
]

exports.getFortune = () => {
	const idx = Math.floor(Math.random()*fortuneCookies.length)
	return fortuneCookies[idx]
}
