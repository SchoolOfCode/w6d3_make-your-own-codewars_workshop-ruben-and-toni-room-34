/* 
👉 Write your kata here!
*/
// The Roadmap for Father Christmas

 

// Organise the destinations list for Father Christmas delivers base on the terms below.
//   - The heaviest present in the whole list will be delivered first and spares his rein deers
//     a back breaking night of carrying heavy loads all over the country...
//   - Father Christmas will continue delivering all the presents of the city where he started from heaviest to lightest.  
//   - After Father Christmas delivers all the presents in the first city, he will move to the next city following down alphabetic order A to Z, so
//    ex: list of cities(London, Birmingham, Southampton, Liverpool), if Father Christmas starts in London, the next city would be Southampton, 
//   - for the remainds cities that Santa did no cover, Father Christmas will continue following with the city starting the Alphabet again, Southampton => Birmingham;
//    so if Father Christmas starts in London the result list of the function should be organized like ( London => Southampton => Birmingham => Liverpool ).   
//   - Father Christmas will deleibery every presents in every city always following, first the heaviest and going down until the lightest.

 

/*
const distributionList = [ 
    { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 20, city: "London"},
    { childname: "Jenny", present: "Orange" , weightOfPresent: 100, city: "Birmingham"},
    { childname: "Qing", present: "Bicycle" , weightOfPresent: 5000, city: "Liverpool"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 25000, city: "Southampton"},
    { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"},
    { childname: "Jasien", present: "Phone" , weightOfPresent: 300, city: "London"},
    { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"},
    { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"},
    { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"},
    { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"},
 ];

  const secondDistributionList = [ 
    { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 20, city: "London"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 6000, city: "Southampton"},
    { childname: "Jenny", present: "Orange" , weightOfPresent: 100, city: "Birmingham"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 150000, city: "London"},
    { childname: "Qing", present: "Bicycle" , weightOfPresent: 500000, city: "Liverpool"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 25000, city: "Southampton"},
    { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 200000, city: "London"},
    { childname: "Jenny", present: "Orange" , weightOfPresent: 10000, city: "Birmingham"},
    { childname: "Jasien", present: "Phone" , weightOfPresent: 300, city: "London"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 20000, city: "Southampton"},
    { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"},
    { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"},
    { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 1000, city: "Southampton"},
    { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"},
 ]
*/


//👉 Write the function your CodeWarriors will start with below here:
export function efficientRoadmap(distributionList){
  // declare result array
    let result = [];
    // order the given array by present weight
    distributionList.sort((a, b) => {
        return b.weightOfPresent - a.weightOfPresent
    });
    // save heaviest object of the array, it will be the first element of the array result
    const firstObject = distributionList[0];
    // order the given array by alphabetically
    distributionList.sort((a, b) => {
        return a.city < b.city ? -1 : a.city > b.city ? 1 : 0;
    });
    // find the index of the heaviest object after been oreder alphabetically
    const firstObjectIndex = distributionList.findIndex( obj => obj === firstObject );
    // copy the the part of the array from the heaviest present to the last item to result
    for(let i = firstObjectIndex; i < distributionList.length; i++) {
        result.push(distributionList[i]);
    }
    // copy below the other objects in the array the remiand part of distributionList
    for(let i = 0; i < firstObjectIndex ; i++) {
        result.push(distributionList[i]);
    }
    // return the result array 
    return result;

 }
