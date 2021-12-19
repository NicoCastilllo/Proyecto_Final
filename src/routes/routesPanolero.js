import * as controllerPanolero from '../controllers/controllerPanolero.js'

    const routesPanolero = app => {
        app.get('/bodegapl',controllerPanolero.viewStorage)
    }

export default routesPanolero