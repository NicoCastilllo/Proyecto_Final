import * as controllerPanolero from '../controllers/controllerPanolero.js'
import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'

    const routesPanolero = app => {
        app.get('/bodegapl',middlewaresUsers.pañolero,controllerPanolero.viewStorage)
        app.put('/bodegapl',controllerPanolero.editState)
    }

export default routesPanolero