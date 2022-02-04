const getHello = (req, res) =>{
    res.send('Hola mundo desde controllers!')
}

module.exports = {
    getHello,
}