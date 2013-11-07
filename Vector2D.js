module.exports = Vector2D;

var argsp = require("./lib/argsp");
    
function Vector2D(){
    if(!arguments[0]) return;
    var args = argsp.toObject(arguments);
    this.x = args.x;
    this.y = args.y;
}

Vector2D.prototype = {

    clone: function(){
        return new Vector2D(this);
    },

    add: function(){
        var args = argsp.toObject(arguments);
        this.x += args.x;
        this.y += args.y;
        return this;
    },

    scale: function(scalar){
        this.x *= scalar; 
        this.y *= scalar; 
        return this;
    },

    dot: function(vec){
        return this.x * vec.x + this.y * vec.y;
    },

    length: function(){
        return Math.sqrt(this.dot(this));
    },

    angle: function(vec){
        return Math.acos(this.dot(vec)/this.length()*vec.length());
    }

};

function NullVector(){
    Vector2D.call(this, 0, 0); 
}

NullVector.prototype = new Vector2D();
