var Vector2D    = require("../Vector2D"),
    assert      = require("assert"),
    point, clone;

describe("Vector2D:: scale", function(){

    it("Accept positive real numbers", function(){
        point = new Vector2D(5, 8);
        point.scale(2);
        assert.equal(point.x, 10);
        assert.equal(point.y, 16);
    });

    it("Accept negative real numbers", function(){
        point = new Vector2D(5, 8);
        point.scale(-2);
        assert.equal(point.x, -10);
        assert.equal(point.y, -16);
    });

    it("Accept Infinity", function(){
        point = new Vector2D(5, 8);
        point.scale(Infinity);
        assert.equal(point.x, Infinity);
        assert.equal(point.y, Infinity);
    });

});
