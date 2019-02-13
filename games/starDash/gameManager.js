// DO NOT MODIFY THIS FILE

/**
 * Collect of the most of the rarest mineral orbiting aroung the sun and outcompete your competetor.
 * @namespace StarDash
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class StarDashGameManager extends GameManager {}

StarDashGameManager.prototype._gameObjectClasses = {
  Body: require('./body'),
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Unit: require('./unit'),
};

module.exports = StarDashGameManager;
