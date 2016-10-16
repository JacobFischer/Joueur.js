// Game: Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Coyboys.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var BaseGame = require(__basedir + "/joueur/baseGame");

// game object classes
var Bottle = require("./bottle");
var Cowboy = require("./cowboy");
var Furnishing = require("./furnishing");
var GameObject = require("./gameObject");
var Player = require("./player");
var Tile = require("./tile");
var YoungGun = require("./youngGun");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Coyboys.
 * @extends BaseGame
 */
var Game = Class(BaseGame, {
    /**
     * initializes a Game with basic logic as provided by the Creer code generator
     *
     * @memberof Game
     * @private
     */
    init: function() {
        BaseGame.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

        /**
         * The name of the game.
         */
        this.name = "Saloon";


        /**
         * All the beer Bottles currently flying across the saloon in the game.
         *
         * @name Game#bottles
         * @type Array.<Bottle>
         */
        this.bottles = [];

        /**
         * Every Cowboy in the game.
         *
         * @name Game#cowboys
         * @type Array.<Cowboy>
         */
        this.cowboys = [];

        /**
         * The player whose turn it is currently. That player can send commands. Other players cannot.
         *
         * @name Game#currentPlayer
         * @type Player
         */
        this.currentPlayer = null;

        /**
         * The current turn number, starting at 0 for the first player's turn.
         *
         * @name Game#currentTurn
         * @type number
         */
        this.currentTurn = 0;

        /**
         * Every furnishing in the game.
         *
         * @name Game#furnishings
         * @type Array.<Furnishing>
         */
        this.furnishings = [];

        /**
         * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
         *
         * @name Game#gameObjects
         * @type Object.<string, GameObject>
         */
        this.gameObjects = {};

        /**
         * All the jobs that Cowboys can be called in with.
         *
         * @name Game#jobs
         * @type Array.<string>
         */
        this.jobs = [];

        /**
         * The number of Tiles in the map along the y (vertical) axis.
         *
         * @name Game#mapHeight
         * @type number
         */
        this.mapHeight = 0;

        /**
         * The number of Tiles in the map along the x (horizontal) axis.
         *
         * @name Game#mapWidth
         * @type number
         */
        this.mapWidth = 0;

        /**
         * The maximum number of Cowboys a Player can bring into the saloon of each specific job.
         *
         * @name Game#maxCowboysPerJob
         * @type number
         */
        this.maxCowboysPerJob = 0;

        /**
         * The maximum number of turns before the game will automatically end.
         *
         * @name Game#maxTurns
         * @type number
         */
        this.maxTurns = 0;

        /**
         * List of all the players in the game.
         *
         * @name Game#players
         * @type Array.<Player>
         */
        this.players = [];

        /**
         * When a player's rowdyness reaches or exceeds this number their Cowboys take a collective siesta.
         *
         * @name Game#rowdynessToSiesta
         * @type number
         */
        this.rowdynessToSiesta = 0;

        /**
         * A unique identifier for the game instance that is being played.
         *
         * @name Game#session
         * @type string
         */
        this.session = "";

        /**
         * How long siestas are for a player's team.
         *
         * @name Game#siestaLength
         * @type number
         */
        this.siestaLength = 0;

        /**
         * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
         *
         * @name Game#tiles
         * @type Array.<Tile>
         */
        this.tiles = [];


        this._gameObjectClasses = {
            "Tile": Tile,
            "Furnishing": Furnishing,
            "Bottle": Bottle,
            "Player": Player,
            "Cowboy": Cowboy,
            "YoungGun": YoungGun,
            "GameObject": GameObject,
        };

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    /**
     * Gets the Tile at a specificed (x, y) position
     *
     * @memberOf Game
     * @instance
     * @param {number} x - integer between 0 and the mapWidth
     * @param {number} y - integer between 0 and the mapHeight
     * @returns {Tile|null} - the Tile at (x, y) or null if out of bounds
     */
    getTileAt: function(x, y) {
        if(x < 0 || y < 0 || x >= this.mapWidth || y >= this.mapHeight) { // out of bounds
            return null;
        }

        return this.tiles[x + y * this.mapWidth] || null;
    },

    //<<-- /Creer-Merge: functions -->>

});

module.exports = Game;
