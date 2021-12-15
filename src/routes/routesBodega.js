import * as controllerBodega from '../controllers/controllerBodega.js'
import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'

    const routesBodega = app => {
        app.get('/bodega',middlewaresUsers.pañolero,controllerBodega.viewBodega)
        app.post('/bodega',controllerBodega.createItem)
        app.delete('/bodega',controllerBodega.delItem)
        app.put('/bodega',controllerBodega.updateItem)
    }

export default routesBodega    