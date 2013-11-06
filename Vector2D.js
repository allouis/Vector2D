module.exports = Vector2D;

function parseArgs(args){
    var args = Array.apply([], args), data, obj = {};
    if( (data = args, args.length === 2) || (data = args[0], args[0].constructor === Array)){
        obj.x = data[0];
        obj.y = data[1];
    } else {
        obj.x = args[0].x;
        obj.y = args[0].y
    }
    return obj
}

function Vector2D(){
    var args = parseArgs(arguments);
    this.x = args.x;
    this.y = args.y;
}

Vector2D.prototype = {

    clone: function(){
        return new Vector2D(this);
    }

}
