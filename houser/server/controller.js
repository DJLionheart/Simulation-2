module.exports = {

    getHouses: (req, res, next) => {
        const db = req.app.get('db')

        db.get_houses().then ( houses => {
            res.status(200).send( houses )
        }).catch( err => console.log( err ));
    },

    addHouse: (req, res, next) => {
        const { propertyname, address, city, state, zip } = req.body.newHouse;
        const db = req.app.get('db');

        db.add_house( propertyname, address, city, state, zip ).then( () => {
            res.sendStatus(200)
        }).catch( err => console.log( err ));
    }
}