var Vector2D    = require("../Vector2D"),
    assert      = require("assert"),
    point, length;

describe("Vector2D:: length", function(){

    it("Should return number", function(){
        point = new Vector2D(5, 8);
        length = point.length();
        assert.equal(length.constructor, Number);
    });

    it("Should return 5 for 2DVector(3, 4)", function() {
        point = new Vector2D(3, 4);
        length = point.length();
        assert.equal(length, 5); // sqrt 3*3 + 4*4 === sqrt 9 + 16 === sqrt 25 === 5
    });

});
