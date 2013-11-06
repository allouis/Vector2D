module.exports = Vector2D;

function Vector2D(){
    var args = Array.apply([], arguments), data;
    if( (data = args, args.length === 2) || (data = args[0], args[0].constructor === Array)){
        this.x = data[0];
        this.y = data[1];
    } else {
        this.x = args[0].x;
        this.y = args[0].y
    }
}
