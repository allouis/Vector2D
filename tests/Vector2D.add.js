var Vector2D    = require("../Vector2D"),
    assert      = require("assert"),
    point, clone;

describe("Vector2D:: add", function(){

    it("Should modify itself", function(){
        point = new Vector2D(5, 8);
        point.add(5, 2);
        assert.equal(point.x, 10);
        assert.equal(point.y, 10);
    });

});
