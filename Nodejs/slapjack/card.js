class Card {
  constructor(suit, value) {
    // YOUR CODE HERE
    this.suit = suit;
    this.value = value;
  }

  toString() {
    // YOUR CODE HERE

    var newValue;
    if (this.value === 11) {
      // Jack
      newValue = "Jack";
    } else if (this.value === 12) {
      // Queen
      newValue = "Queen";
    } else if (this.value === 13) {
      // King
      newValue = "King";
    } else if (this.value === 1) {
      // Ace
      newValue = "Ace";
    } else {
      // number value
      newValue = this.value;
    }

    // this.suit = "hearts", "spades"...
    // "hearts" => "Hearts"

    var newSuit = this.suit[0].toUpperCase() + this.suit.substr(1);

    // if (this.suit === "hearts") {
    //   newSuit = "Hearts";
    // }

    return newValue + " of " + newSuit;
  }

  // PERSISTENCE FUNCTIONS
  //
  // Start here after completing Step 2!
  // We have written a persist() function for you to save your game state to
  // a store.json file.
  // =====================
  fromObject(object) {
    this.value = object.value;
    this.suit = object.suit;
  }

  toObject() {
    return {
      value: this.value,
      suit: this.suit
    };
  }
}

module.exports = Card;
