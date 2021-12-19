import * as controllerEncargado from '../controllers/controllerEncargado.js'
import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'

    const routesEncargado = app => {
        app.get('/bodegaen',middlewaresUsers.encargado,controllerEncargado.viewBodega)
        app.post('/bodegaen',controllerEncargado.createItem)
        app.delete('/bodegaen',controllerEncargado.delItem)
        app.put('/bodegaen',controllerEncargado.updateItem)
    }

export default routesEncargado    