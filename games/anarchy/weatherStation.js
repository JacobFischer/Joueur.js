// Generated by Creer at 12:13AM on November 01, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'
// This is a simple class to represent the WeatherStation object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var Building = require("./building");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * WeatherStation - Can be bribed to change the next Forecast in some way.
 * @class
 */
var WeatherStation = Class(Building, {
    /// initializes a WeatherStation with basic logic as provided by the Creer code generator
    init: function() {
        Building.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Bribe the weathermen to intensity the next Forecast by 1 or -1
     *
     * @param {boolean} negative - By default the intensity will be increased by 1, setting this to true decreases the intensity by 1.
     * @returns {boolean} true if the intensity was changed, false otherwise
     */
    intensify: function(negative) {
        return client.runOnServer(this, "intensify", {
            negative: negative,
        });
    },

    /**
     * Bribe the weathermen to change the direction of the next Forecast by rotating it clockwise or counterclockwise.
     *
     * @param {boolean} counterclockwise - By default the direction will be rotated clockwise. If you set this to true we will rotate the forecast counterclockwise instead.
     * @returns {boolean} true if the rotation worked, false otherwise.
     */
    rotate: function(counterclockwise) {
        return client.runOnServer(this, "rotate", {
            counterclockwise: counterclockwise,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = WeatherStation;
