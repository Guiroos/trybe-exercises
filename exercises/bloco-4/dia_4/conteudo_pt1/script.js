let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  medal: {
    golden: 2,
    silver: 3
  }
}
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos.')
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita ' + player.bestInTheWorld.length + ' vezes a melhor do mundo')
console.log('A jogadora possui ' + player.medal.golden + ' medalhas de ouro e ' + player.medal.silver + ' de prata.')