// This is a simple class to represent the Player object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A player in this game. Every AI controls one player.
 * @extends GameObject
 */
var Player = Class(GameObject, {
    /**
     * initializes a Player with basic logic as provided by the Creer code generator
     *
     * @memberof Player
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
         *
         * @name Player#clientType
         * @type string
         */
        this.clientType = "";

        /**
         * The color (side) of this player. Either 'White' or 'Black', with the 'White' player having the first move.
         *
         * @name Player#color
         * @type string
         */
        this.color = "";

        /**
         * True if this player is currently in check, and must move out of check, false otherwise.
         *
         * @name Player#inCheck
         * @type boolean
         */
        this.inCheck = false;

        /**
         * If the player lost the game or not.
         *
         * @name Player#lost
         * @type boolean
         */
        this.lost = false;

        /**
         * If the Player has made their move for the turn. true means they can no longer move a Piece this turn.
         *
         * @name Player#madeMove
         * @type boolean
         */
        this.madeMove = false;

        /**
         * The name of the player.
         *
         * @name Player#name
         * @type string
         */
        this.name = "";

        /**
         * This player's opponent in the game.
         *
         * @name Player#opponent
         * @type Player
         */
        this.opponent = null;

        /**
         * All the unpcaptured chess Pieces owned by this player.
         *
         * @name Player#pieces
         * @type Array.<Piece>
         */
        this.pieces = [];

        /**
         * The direction your Pieces must go along the rank axis until they reach the other side.
         *
         * @name Player#rankDirection
         * @type number
         */
        this.rankDirection = 0;

        /**
         * The reason why the player lost the game.
         *
         * @name Player#reasonLost
         * @type string
         */
        this.reasonLost = "";

        /**
         * The reason why the player won the game.
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
         * If the player won the game or not.
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
