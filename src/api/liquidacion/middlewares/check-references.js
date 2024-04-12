module.exports = (config, { strapi })=> {
    return async (ctx, next) => {

        console.log("Hello, I'm updating the liquidaciones")

        const pagos = await strapi.entityService.findMany('api::pago.pago', {
            fields: ['referencia', 'monto']
        })
        console.log({pagos})

        // for each liquidaciones, check if there is some liquidaciones with the referencia passed by body
        const referencia = ctx.request.body.data.referencia
        console.log(`referencia: ${referencia}`)

        const liquidaciones = await strapi.entityService.findMany('api::liquidacion.liquidacion', {
            fields: ['*'],
            populate: "*",
        })


        const alreadyExists = liquidaciones.some( l => {
            console.log(`la referencia del pago es: ${l.pago?.referencia}`)
            console.log({l})

            return (l.pago?.referencia === Number(referencia))
        })

        if (alreadyExists) {
            console.log('the payment reference is already used')
            return ctx.badRequest('Referencia already exists in pagos collection');
        } else {
            console.log('the reference is new')
            
        }

        console.log(JSON.stringify(liquidaciones, null, 2))

        console.log(ctx.request.body)

        await next()
        
    };
  };