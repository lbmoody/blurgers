const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

outer.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(
        [ "burger_name", "devoured" ] 
        , [ req.body.burger_name, req.body.devoured] 
        , function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update(
        { devoured: req.body.devoured } 
        , condition
        , function (result) {
            if (!result.changedRows) {
                return res.status(404).end();
            }
            
            res.status(200).end();
        }
    );
});

router.delete("/api/burgers/:id", (req, res) => {
    var condition = `id = ${req.params.id}`;
    console.log("condition", condition);

    burger.delete(condition, result => {
        if (!result.affectedRows) {
            return res.status(404).end();
        }

        res.status(200).end();
    });
})

// Export routes for server.js to use.
module.exports = router;