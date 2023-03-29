//  Наследование
// - extends
// - suoer()

class Hero {
  constructor({ name = "hero", xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта!`);
    this.xp += amount;
  }
}

const mango = new Hero({ name: "Mango", xp: 1000 });

// console.log(mango);

class Warrior extends Hero {
  constructor({ name, xp, weapon } = {}) {
    super({ name, xp });

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attack by ${this.weapon}`);
  }
}

const alex = new Warrior({ name: "Alex", xp: 1000, weapon: "Alebard" });
console.log(alex);

alex.attack();
alex.gainXp(1000);

console.log(alex.__proto__ === Warrior.prototype); // true
console.log("Warrior.prototype", Warrior.prototype); // Hero ...

console.log(Warrior.prototype.__proto__ === Hero.prototype); // true

// ////////////////////////////////////////////////////////////
class Mage extends Hero {
  constructor({ name, xp, spells = [] }) {
    super({ name, xp });

    this.spells = spells;
  }
  spell() {
    console.log(`${this.name} spell by ${this.spells}`);
  }
}

const tonya = new Mage("Tonya", 900, ["Staff"]);
console.log(tonya);

tonya.spell();
tonya.gainXp(1000);
