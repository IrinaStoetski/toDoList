const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) => {
  app.delete('/notes/:id', async (req, res) => {
 
    const query = { _id: ObjectId(req.params.id) };


    let result = null;
    try {
      result = await db.collection('to-do-list').deleteOne(query);
      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  });
};
