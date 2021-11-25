const express = require('express')
const expressHandlebars = require('express-handlebars')

app = express()
const port = process.env.PORT || 3000

const fortunes = [
	"agar, ko'p uxlasang: orzularingni tushingda ko'rasan",
	"Mehnat. Mehnatning tagi rohat!",
	"Yomg'ir bilan yer ko'karar, mehnat bilan odam",
	"ish ishtaxa ochar, dangasa ishdan qochar!",
]

app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.use(express.static('/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
	const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
	res.render('about', { fortune: randomFortune })
})

app.use((req, res) => {
	res.status(404)
	res.render('404')
})

app.use((err, req, res, next) => {
	console.error(err.message)
	res.status(500)
	res.render('500')
})

app.listen(port, () => {
	console.log(`server ishga tushgan port: ${port}`)
})
