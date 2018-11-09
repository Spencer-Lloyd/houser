module.exports = {

    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(houses => {
            res.status(200).send(houses)
        })
    },

    removeHouse: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_item(id).then( ??? => {
            res.status(200).send()
        })
    },

    deleteItem: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_item(id).then(cart => {
            res.status(200).send(cart)
        })
    },
}