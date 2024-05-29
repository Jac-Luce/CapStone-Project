//Middleware per la gestione degli errori

//400 bad request
export const badRequest = (err, req, res, next) => {
    if(err.status === 400) {
        res.status(400).send({
            success: false,
            message: err.message,
            errorsList: err.errorsList.map((e) => e.msg) || []
        });
    } else {
        next(err);
    }
};

//401 unauthorized
export const unauthorized = (err, req, res, next) => {
    if (err.status === 401) {
        res.status(401).send({
            success: false,
            message: err.message
        });
    } else {
        next(err);
    }
};

//404 notFound
export const notFound = (err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).send({
            success: false,
            message: err.message,
        });
    } else {
        next(err);
    }
}

//500 genericError
export const genericError = (err, req, res, next) => {
    console.log("ERROR: " , err);

    res.status(500).send({
        success: false,
        message: "C'è stato un problema sui nostri server. Riprova più tardi!"
    });
};