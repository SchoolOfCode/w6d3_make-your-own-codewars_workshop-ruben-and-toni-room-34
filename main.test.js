import {efficientRoadMap} from "./main.js"

// before releasing: need to change all the actual to const actual = efficientRoadMap();

describe(`organised distribution list as expected for efficient distribution`, () =>{
    it(`The first present in the distribution list is the heaviest`, () => {
    // Arrange 
    const expected =  expectedDistributionList[0];   
    // Act  
    const actual = { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"};
    // Assert 
    expect(actual).toEqual(expected);
});
    it(`The second ciy in the distribution list is Southampton following London`, () => {
    // Arrange 
    const expected = expectedDistributionList[4];
    // Act  
    const actual = { childname: "Maria", present: "Motorbike" , weightOfPresent: 25000, city: "Southampton"};  
    // Assert 
    expect(actual).toEqual(expected);
});

    it(`The third city in the distribution list is Birmingham following Southampton`, () => {
    // Arrange 
    const expected = expectedDistributionList[6];
    // Act  
    const actual = { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"};
    // Assert 
    expect(actual).toEqual(expected);
});

    it(`The fourth city in the distribution list is Liverpool following Birmingham`, () => {
    // Arrange 
    const expected = expectedDistributionList[9];
    // Act  
    const actual = { childname: "Qing", present: "Bicycle" , weightOfPresent: 5000, city: "Liverpool"};     
    // Assert 
    expect(actual).toEqual(expected);
});

    it(`The second heaviest present on the list is in London and is the book`, () => {
    // Arrange 
    const expected = expectedDistributionList[1];
    // Act  
    const actual = { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"};
    // Assert 
    expect(actual).toEqual(expected);
});

    it(`The second heaviest present in Southampton is the TV`, () => {
    // Arrange 
    const expected = expectedDistributionList[5];
    // Act  
    const actual =  { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"};
     
    // Assert 
    expect(actual).toEqual(expected);
});

    it(`The second heaviest present in Birmingham is the doll`, () => {
    // Arrange 
    const expected = expectedDistributionList[7];
    // Act  
    const actual = { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"};
    // Assert 
    expect(actual).toEqual(expected);
});
it(`see that both weight and cities are organised first by weight then by city `, ()=>{
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
    const actual = [
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
    // Assert
    expect(actual).toEqual(expected);
      
});

})





const expectedDistributionList = [
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