const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) =>{
    app.delete('/del/:id', async (req, res) => {
		console.log(req);
        const query = {_id: ObjectId(req.params.id)};
        let result = null;
        try {
            result = await db.collection('to-do-list').deleteOne(query);
        } catch (err) {
            console.log(err);
        }
        res.render("list");
    });
};
