class Formatter {
  //add static methods here
  static capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  static sanitize(value) {
    return value.replace(/[^a-zA-Z0-9 '-]/g, '');
  }
  static titleize(value) {
    const noneCapitilze = [
      'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
    ];
    const words = value.split(' ');
    const capitilizedWord = words.map((word, i) => {
      if( i === 0 || !noneCapitilze.includes(word)){
        return this.capitalize(word);
      }else {
        return word
      }
    })
    return capitilizedWord.join(' ');
  }
}

let x = [1, 2, 3]
x.slice(0, 1)
console.log(x)