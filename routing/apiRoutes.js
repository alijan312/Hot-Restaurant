const tables = require('./../data/tables');

module.exports = function(app){
    // Displays all tables
    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    });
    
    // Displays a single table, or returns false
    app.get("/api/tables/:table", function(req, res) {
        const chosen = req.params.table;
    
        console.log(chosen);
    
        for (let i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
        }
    
        return res.json(false);
    });
    
    // Create New tables - takes in JSON input
    app.post("/api/tables", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
       const newtable = req.body;
    
        // Using a RegEx Pattern to remove spaces from newtable
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newtable);
    
        tables.push(newtable);
    
        res.json(newtable);
    });
};