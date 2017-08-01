const db = require ('../models');

module.exports = (app) => {

  app.get("/", (req, res) => {
    db.Burgers.findAll({}).then((data) => {
      const hbsObject = {
        burgers: data
      };
      console.log('below is handlebars object')
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/", (req, res) => {
    db.Burgers.create({burger_name: req.body.name}).then((data) => {
      res.redirect('/')
    });
  });

  app.put("/:id", (req, res) => {
    db.Burgers.update( {devoured: true},
      {
        where: {
          id: req.params.id
        }
      }).then((data) => {
       res.redirect('/')
    });
  });

  app.delete("/", (req, res) => {

    db.Burgers.destroy({
      where: {
        id: req.body.id
      }
    }).then(() => {
      res.redirect('/')
    })

  })

}