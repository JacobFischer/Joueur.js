// Spawner: A resource spawner that generates branches or food.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');



/**
 * A resource spawner that generates branches or food.
 * @extends GameObject
 */
class Spawner extends GameObject {
  /**
   * initializes a Spawner with basic logic as provided by the Creer code generator
   *
   * @memberof Spawner
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.hasBeenHarvested = false;
    this.health = 0;
    this.tile = null;
    this.type = '';


  }


  // Member variables

  /**
   * True if this Spawner has been harvested this turn, and it will not heal at the end of the turn, false otherwise.
   *
   * @type {boolean}
   */
  get hasBeenHarvested() {
    return client.gameManager.getMemberValue(this, 'hasBeenHarvested');
  }

  set hasBeenHarvested(value) {
    client.gameManager.setMemberValue(this, 'hasBeenHarvested', value);
  }


  /**
   * How much health this Spawner has, which is used to calculate how much of its resource can be harvested.
   *
   * @type {number}
   */
  get health() {
    return client.gameManager.getMemberValue(this, 'health');
  }

  set health(value) {
    client.gameManager.setMemberValue(this, 'health', value);
  }


  /**
   * The Tile this Spawner is on.
   *
   * @type {Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }


  /**
   * What type of resource this is ('food' or 'branches').
   *
   * @type {string}
   */
  get type() {
    return client.gameManager.getMemberValue(this, 'type');
  }

  set type(value) {
    client.gameManager.setMemberValue(this, 'type', value);
  }




}

module.exports = Spawner;
