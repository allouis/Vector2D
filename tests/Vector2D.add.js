var Vector2D    = require("../Vector2D"),
    assert      = require("assert"),
    point, clone;

describe("Vector2D:: add", function(){

    it("Accept positive real numbers", function(){
        point = new Vector2D(5, 8);
        point.add(5, 2.2);
        assert.equal(point.x, 10);
        assert.equal(point.y, 10.2);
    });

    it("Accept negative real numbers", function(){
        point = new Vector2D(5, 8);
        point.add(-0.2, -2);
        assert.equal(point.x, 4.8);
        assert.equal(point.y, 6);
    });

    it("Accept Infinity", function(){
        point = new Vector2D(5, 8);
        point.add(Infinity, 2);
        assert.equal(point.x, Infinity);
        assert.equal(point.y, 10);
    });

});
