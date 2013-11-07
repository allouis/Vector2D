module.exports = toObject;

function toObject(argumentz){
    var args = Array.apply([], argumentz), data, obj = {};
    if( (data = args, args.length === 2) || (data = args[0], args[0].constructor === Array)){
        obj.x = data[0];
        obj.y = data[1];
    } else {
        obj.x = args[0].x;
        obj.y = args[0].y;
    }
    return obj;
}
