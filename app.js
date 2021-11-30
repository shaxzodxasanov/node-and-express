// noinspection BadExpressionStatementJS

const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')

app = express()
const port = process.env.PORT || 8000

app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}))
app.disable('x-powered-by')
app.set('view engine', 'handlebars')
app.use(express.static('/public'))

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.get('/headers', (req, res) => {
	res.type('text/html')
	const headers = Object.entries(req.headers)
		.map(([key, value]) => `${key}: ${value}`)
	res.send(headers.join('\n'))
})

app.use(handlers.notFound)
app.use(handlers.serverError)

if (require.main === module) {
	app.listen(port, () => {
		console.log(`server ishga tushgan port: ${port}`)
	})
} else {
	module.exports = app
}

