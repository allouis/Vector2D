var Vector2D    = require("../Vector2D"),
    assert      = require("assert"),
    point, clone;

describe("Vector2D:: clone", function(){

    it("Should return a new instance of Vector2D", function(){
        point = new Vector2D(5, 8);
        clone = point.clone();
        assert.notStrictEqual(point, clone);
    });

    it("Should return Vector2D with the same values", function(){
        point = new Vector2D(5, 8);
        clone = point.clone();
        assert.equal(point.x, clone.x);
        assert.equal(point.y, clone.y);
    });

});
