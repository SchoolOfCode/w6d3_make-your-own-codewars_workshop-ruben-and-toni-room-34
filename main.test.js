import {efficientRoadmap} from "./main.js";

//👉 Write your tests below here:
describe(`organised this two Father Christmas distribution-list (arrays)`, () =>{

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
    { childname: "Mohamed", present: "Playstation" , weightOfPresent: 2000, city: "London"},
    { childname: "Qing", present: "Bicycle" , weightOfPresent: 10000, city: "Reading"},
    { childname: "Thomas", present: "Cowboy costume" , weightOfPresent: 500, city: "Leicester"},
    { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"},
    { childname: "Chris", present: "Broom" , weightOfPresent: 350, city: "Manchester"},
    { childname: "Julia", present: "Hair dryer" , weightOfPresent: 600, city: "London"},
    { childname: "Jasien", present: "Phone" , weightOfPresent: 300, city: "London"},
    { childname: "Laurence", present: "Dress" , weightOfPresent: 250, city: "Southampton"},
    { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"},
    { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"},
    { childname: "Daniel", present: "plane" , weightOfPresent: 200000, city: "Manchester"},
    { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"},
    { childname: "Karen", present: "Onesie" , weightOfPresent: 400, city: "Liverpool"},
    { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"},
 ];


it(`[distributionList], see if the heaviest present is at the top of the array`, () =>{
//Arrange
const expected = { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"};

//Act   
const actual = efficientRoadmap(distributionList);

//Assert
expect(actual[0]).toEqual(expected)


});

it(`[distributionList], see if the heaviest present for next city to visit after the first city, it is at the top of the second cities group`, ()=>{
//Arrange
const expected = { childname: "Maria", present: "Motorbike" , weightOfPresent: 25000, city: "Southampton"};
//Act   
const actual = efficientRoadmap(distributionList);

//Assert
expect(actual[4]).toEqual(expected)

});

it(`[distributionList], see if the lightest present for the last city to visit, is the last element of the array`, ()=>{
//Arrange
const expected = { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"};

//Act   
const actual = efficientRoadmap(distributionList);

//Assert
expect(actual[actual.length - 1]).toEqual(expected)

});

it(`[distributionList], check if the Father Christmas list match the result of the function`, ()=>{
    //Arrange
    const expected = [
    { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"},
    { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"},
    { childname: "Jasien", present: "Phone" , weightOfPresent: 300, city: "London"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 20, city: "London"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 25000, city: "Southampton"},
    { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"},
    { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"},
    { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"},
    { childname: "Jenny", present: "Orange" , weightOfPresent: 100, city: "Birmingham"},
    { childname: "Qing", present: "Bicycle" , weightOfPresent: 5000, city: "Liverpool"},
    { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"},
 ];
     
    // Act
    const actual = efficientRoadmap(distributionList);
        
    // Assert
    expect(actual).toEqual(expected)
});

it(`[secondDistributionList], see if the heaviest present is at the top of the array`, () =>{
//Arrange
const expected = { childname: "Daniel", present: "plane" , weightOfPresent: 200000, city: "Manchester"};

//Act   
const actual = efficientRoadmap(secondDistributionList);

//Assert
expect(actual[0]).toEqual(expected)

});

it(`[secondDistributionList], see if the heaviest present for next city to visit after the first city, it is at the top of the second cities group`, ()=>{
//Arrange
const expected = { childname: "Qing", present: "Bicycle" , weightOfPresent: 10000, city: "Reading"};
//Act   
const actual = efficientRoadmap(secondDistributionList);

//Assert
expect(actual[2]).toEqual(expected)

});

it(`[secondDistributionList], see if the lightest present for the last city to visit, is the last element of the array`, ()=>{
//Arrange
const expected = { childname: "Toni", present: "Nutcracker" , weightOfPresent: 20, city: "London"};

//Act   
const actual = efficientRoadmap(secondDistributionList);

//Assert
expect(actual[actual.length - 1]).toEqual(expected)

});

it(`[secondDistributionList], check if the Father Christmas list match the result of the function`, ()=>{
    //Arrange
    const expected = [ 
    { childname: "Daniel", present: "plane" , weightOfPresent: 200000, city: "Manchester"},
    { childname: "Chris", present: "Broom" , weightOfPresent: 350, city: "Manchester"},
    { childname: "Qing", present: "Bicycle" , weightOfPresent: 10000, city: "Reading"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 6000, city: "Southampton"},
    { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"},
    { childname: "Laurence", present: "Dress" , weightOfPresent: 250, city: "Southampton"},
    { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"},
    { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"},
    { childname: "Jenny", present: "Orange" , weightOfPresent: 100, city: "Birmingham"},
    { childname: "Thomas", present: "Cowboy costume" , weightOfPresent: 500, city: "Leicester"},
    { childname: "Karen", present: "Onesie" , weightOfPresent: 400, city: "Liverpool"},
    { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"},
    { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"},
    { childname: "Mohamed", present: "Playstation" , weightOfPresent: 2000, city: "London"},
    { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"},
    { childname: "Julia", present: "Hair dryer" , weightOfPresent: 600, city: "London"},
    { childname: "Jasien", present: "Phone" , weightOfPresent: 300, city: "London"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 20, city: "London"},
 ];
     
    // Act
    const actual = efficientRoadmap(secondDistributionList);
        
    // Assert
    expect(actual).toEqual(expected)
});

});