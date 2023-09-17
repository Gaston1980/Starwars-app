module.exports = (fn) => {//recibo por arg la funcion del controlador entera
    return function (req,res,next){
        fn(req,res).catch((err) => {//como la fn es async retorna una promesa y manejo el error con el catch
            next(err);// aca lo que digo es que ese error lo maneje con el manejador de error de express
        });
    };
};

// ESTO MISMO ESCRITO EN UNA SOLA LINEA:
// (fn) => (req,res,next) => fn(req,res).catch((err) => next(err));

// CON ESTO CONSIGO TENER UN CONTROLADOR MEJORADO CON MANEJO DE ERRORES
// A ESTAS SE LA LLAMAN FUNCIONES DE ORDEN SUPERIOR, XQ RECIBEN UNA FUNCION
// Y DEVULVEN UNA MEJORADA