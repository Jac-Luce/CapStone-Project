//Creazione Middleware che comunica le richieste effettuate all'API

const requestMiddlew = (req, res, next) => {

    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.originalUrl}`);

    next();
};

export default requestMiddlew;