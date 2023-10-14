const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000

app.use(cors())
app.use(express.json());

const generateXML = (price, nb) => {
    let result = ''
    for (let i = 0; i < nb; i++) {
        result += `<bon-achat>${price}</bon-achat>`
    }
    return result
}

app.post('/generateXMLPromo', (req, res) => {
    const { thousand, half, hundred, fifty, ten } = req.body
    let result = '<bon-achat-list>'
    result += generateXML(1000, Number(thousand))
    result += generateXML(500, Number(half))
    result += generateXML(100, Number(hundred))
    result += generateXML(50, Number(fifty))
    result += generateXML(10, Number(ten))
    result += '</bon-achat-list>'
    res.json({result});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})