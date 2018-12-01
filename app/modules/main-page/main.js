

module.exports = (app, db) => {

app.get('/', (req, res) => {
	res.render('main-page', {title: 'To do list', message: 'Hi!'})
});

}