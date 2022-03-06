const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driversis = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) { 
    
    return drivers.filter((allNames) => {return name.toUpperCase() == allNames.toUpperCase()})

}

function fuzzyMatch(drivers, wordPart) {
  return drivers.filter((allNames) => allNames.startsWith(wordPart))}

function matchName(drivers, driverName) {
    return drivers.filter((driverInfo) => driverInfo.name.startsWith(driverName))
}

console.log(matchName(driversis, 'Bobby'))