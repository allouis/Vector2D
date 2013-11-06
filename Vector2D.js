module.exports = Vector2D;

var parseArgs = require("./lib/parseArgs");

function Vector2D(){
    var args = parseArgs(arguments);
    this.x = args.x;
    this.y = args.y;
}

Vector2D.prototype = {

    clone: function(){
        return new Vector2D(this);
    },

    add: function(){
        var args = parseArgs(arguments);
        this.x += args.x;
        this.y += args.y;
        return this;
    },

    sub: function(){
        var args = parseArgs(arguments);
        this.x -= args.x;
        this.y -= args.y;
        return this;
    }

};
