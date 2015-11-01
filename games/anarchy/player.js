// Generated by Creer at 04:49PM on November 01, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'
// This is a simple class to represent the Player object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Player - A player in this game. Every AI controls one player.
 * @class
 */
var Player = Class(GameObject, {
    /// initializes a Player with basic logic as provided by the Creer code generator
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * How many bribes this player has remaining to use during their turn. Each action a Building does costs 1 bribe. Any unused bribes are lost at the end of the player's turn.
         *
         * @name Player#bribesRemaining
         * @type number
         */
        this.bribesRemaining = 0;

        /**
         * All the buildings owned by this player.
         *
         * @name Player#buildings
         * @type Array.<Building>
         */
        this.buildings = [];

        /**
         * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
         *
         * @name Player#clientType
         * @type string
         */
        this.clientType = "";

        /**
         * All the FireDepartments owned by this player.
         *
         * @name Player#fireDepartments
         * @type Array.<FireDepartment>
         */
        this.fireDepartments = [];

        /**
         * The Warehouse that serves as this player's headquarters and has extra health. If this gets destroyed they lose.
         *
         * @name Player#headquarters
         * @type Warehouse
         */
        this.headquarters = null;

        /**
         * if the player lost the game or not
         *
         * @name Player#lost
         * @type boolean
         */
        this.lost = false;

        /**
         * The name of the player
         *
         * @name Player#name
         * @type string
         */
        this.name = "";

        /**
         * this player's opponent in the game.
         *
         * @name Player#otherPlayer
         * @type Player
         */
        this.otherPlayer = null;

        /**
         * All the PoliceDepartments owned by this player.
         *
         * @name Player#policeDepartments
         * @type Array.<PoliceDepartment>
         */
        this.policeDepartments = [];

        /**
         * the reason why the player lost the game
         *
         * @name Player#reasonLost
         * @type string
         */
        this.reasonLost = "";

        /**
         * the reason why the player won the game
         *
         * @name Player#reasonWon
         * @type string
         */
        this.reasonWon = "";

        /**
         * The amount of time (in ns) remaining for this AI to send commands.
         *
         * @name Player#timeRemaining
         * @type number
         */
        this.timeRemaining = 0;

        /**
         * All the warehouses owned by this player. Includes the Headquarters.
         *
         * @name Player#warehouses
         * @type Array.<Warehouse>
         */
        this.warehouses = [];

        /**
         * All the WeatherStations owned by this player.
         *
         * @name Player#weatherStations
         * @type Array.<WeatherStation>
         */
        this.weatherStations = [];

        /**
         * if the player won the game or not
         *
         * @name Player#won
         * @type boolean
         */
        this.won = false;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Player;
