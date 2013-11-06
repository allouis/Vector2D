var Vector2D    = require("../Vector2D"),
    assert      = require("assert"),
    point;

describe("Vector2D Constructor", function(){

    it("Should accept two numbers as arguments", function(){
        point = new Vector2D(-5, 8);      
        assert.equal(point.x, -5);
        assert.equal(point.y, 8);
        
        point = new Vector2D(8, 0);      
        assert.equal(point.x, 8);
        assert.equal(point.y, 0);
    });

    it("Should accept an Array as argument", function(){
        point = new Vector2D([-5, 8]);      
        assert.equal(point.x, -5);
        assert.equal(point.y, 8);
        
        point = new Vector2D([8, 0]);      
        assert.equal(point.x, 8);
        assert.equal(point.y, 0);
    });

    it("Should accept an Object as argument", function(){
        point = new Vector2D({x:-5, y:8});
        assert.equal(point.x, -5);
        assert.equal(point.y, 8);

        point = new Vector2D({x:8, y:0});
        assert.equal(point.x, 8);
        assert.equal(point.y, 0);
    });


});
