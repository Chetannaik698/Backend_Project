function wrapAsync(fn) {
    return function(req,res,next){
        fn(req,res,next).catch(next)
    }
}

module.exports = wrapAsync
//this is wrap async function which return function of req, res, next