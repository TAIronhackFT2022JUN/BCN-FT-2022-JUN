// Soldier
class Soldier {
    // constructor will define the parameters that need to be passed when creating a new element of the class
    constructor(health, strength) {
      this.health = health; // this.health will create a new attribute. health will be the value passed from the parameter when creating the element.
      this.strength = strength; // same for strength
    }
  
    // method that returns the strength attribute
    attack() {
      return this.strength;
    }
  
    // method that will reduce the damage being passed as an argument to the current health
    receiveDamage(damage) {
      this.health = this.health - damage; // also works this.health -= damage
    }
  }
  
  // Viking. Comes from parent class Soldier. Will inherit attributes and methods from Soldier
  class Viking extends Soldier {
    constructor(name, health, strength) {
      // constructor with the same parameters of Soldier + a new one (name)
      super(health, strength); // this super will pass the values health and strength as a parameter to the parent class.
      this.name = name;
    }
  
    // by default the receiveDamage method will be inherit from Soldier, but because in this case we want it to do something a little difference, we can overwrite the function with the same name
    receiveDamage(damage) {
      this.health = this.health - damage; // same function as Soldier receiveDamage
  
      // conditional that checks if the Viking is still alive. (this.health > 0)
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
  
    // simple method
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  // Saxon. Comes from parent class Soldier. Will inherit attributes and methods from Soldier
  class Saxon extends Soldier {
    // below constructor is optional. Since Saxon will have the exact same arguments/attributes as Soldier.
    constructor(health, strength) {
      // constructor with the same parameters as Soldier, will pass both values through the super
      super(health, strength);
    }
  
    // same as Viking method
    receiveDamage(damage) {
      this.health = this.health - damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    }
  }
  
  // War
  class War {
    constructor() {
      this.vikingArmy = []; // the armies will start as empty array. These are atributes of the War class.
      this.saxonArmy = []; // same as above
    }
  
    // to add a viking, simply push the viking being passed as an argument to the vikingArmy attribute
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
  
    // same as above for saxons
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
  
    // method for a random viking to attack a random saxon
    vikingAttack() {
      // the following 3 lines are to determine a random viking within the vikingArmy array
      const randomVikingNumber = Math.random() * this.vikingArmy.length; // this will give me a random number between 0 and the length of the army
      const randomVikingIndex = Math.floor(randomVikingNumber); // this will floor the number. We are trying to obtain the index, and index are integers
      const randomViking = this.vikingArmy[randomVikingIndex]; // using the index we can target a random viking from the array and save it inside a variable
  
      // same as above but for a random saxon from the saxonArmy array
      const randomSaxonNumber = Math.random() * this.saxonArmy.length;
      const randomSaxonIndex = Math.floor(randomSaxonNumber);
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
  
      // below we want to call the receiveDamage method of the saxon with the strength of the viking
      // receiveDamage(): will reduce the health of a saxon why whatever number is passed as a parameter. See the methods of the Saxon class.
      // attack(): will hold the strength value of the viking. See the methods in the Viking class.
      // IMPORTANT: we save the result inside a variable because we want to return at the end of the function, but we also need to run it BEFORE we check for dead saxons.
      const result = randomSaxon.receiveDamage(randomViking.attack());
  
      // now we want to check if the saxon died and if he did, remove it from the array
  
      // One way, iterate over the whole array to check if any saxon died
      //   this.saxonArmy.forEach((saxon, i) => {
      //     if (saxon.health <= 0) {
      //       this.saxonArmy.splice(i, 1);
      //     }
      //   });
  
      // Better approach, target the saxon that received damage. check if it died.
      // randomSaxon is the saxon that received damage. randomSaxonIndex is its index.
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
      }
  
      return result;
    }
  
    saxonAttack() {
      // exact same approach as before. just for one saxon attacking a viking.
      const randomVikingNumber = Math.random() * this.vikingArmy.length;
      const randomVikingIndex = parseInt(Math.floor(randomVikingNumber));
      const randomViking = this.vikingArmy[randomVikingIndex];
  
      const randomSaxonNumber = Math.random() * this.saxonArmy.length;
      const randomSaxonIndex = parseInt(Math.floor(randomSaxonNumber));
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
  
      const result = randomViking.receiveDamage(randomSaxon.attack());
  
      // this.vikingArmy.forEach((viking, i) => {
      //   if (viking.health <= 0) {
      //     this.vikingArmy.splice(i, 1);
      //   }
      // });
  
      if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
      }
  
      return result;
    }
  
    // below is simply returning a string depending on if any array is empty or not.
    showStatus() {
      if (this.vikingArmy.length <= 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else if (this.saxonArmy.length <= 0) {
        return "Vikings have won the war of the century!";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
  }