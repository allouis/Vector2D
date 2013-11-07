var Vector2D    = require("../Vector2D"),
    assert      = require("assert"),
    point, dot;

describe("Vector2D:: dot", function(){

    it("Should return number", function(){
        point = new Vector2D(5, 8);
        dot = point.dot({x:1, y:2});
        assert.equal(dot.constructor, Number);
    });

    it("Should accept Vector2D as argument", function() {
        point = new Vector2D(5, 8);
        dot = point.dot(new Vector2D(1,2));
        assert.equal(dot, 21); // 5*1 + 2*8 === 5 + 16 === 21
    });

});
