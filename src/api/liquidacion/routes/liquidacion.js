'use strict';

/**
 * liquidacion router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::liquidacion.liquidacion', {
    config: {
        create: {
            middlewares: [
                'api::liquidacion.check-references'
            ]
        }
    }
});


// i need a middleware that:
// before passing to liquidacion collection
// check if the referencia attribute is already used in a pagos object
// if true, return an error
// otherwise, next