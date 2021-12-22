//👉 Write your tests below here:
Describe(`organised array`, () =>{
It(`see that weight is considered`, () =>{
//Arrange
const expected = [
    { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 25000, city: "Southampton"},
    { childname: "Qing", present: "Bicycle" , weightOfPresent: 5000, city: "Liverpool"},
    { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"},
    { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"},
    { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"},
    { childname: "Jasien", present: "Phone" , weightOfPresent: 300, city: "London"},
    { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"},
    { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"},
    { childname: "Jenny", present: "Orange" , weightOfPresent: 100, city: "Birmingham"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 20, city: "London"},
 ];

//Act   
const actual = efficientRoadmap();

//Assert
expect(actual).toStrictlyEqual(expected)


});

It(`see that city order is considered`, ()=>{
//Arrange
const expected = [
    { childname: "Chris", present: "Art set" , weightOfPresent: 300, city: "Birmingham"},
    { childname: "Joseph", present: "Doll" , weightOfPresent: 250, city: "Birmingham"},
    { childname: "Jenny", present: "Orange" , weightOfPresent: 100, city: "Birmingham"},
    { childname: "Ruben", present: "Car" , weightOfPresent: 100000, city: "London"},
    { childname: "Florence", present: "Book" , weightOfPresent: 1000, city: "London"},
    { childname: "Jasien", present: "Phone" , weightOfPresent: 300, city: "London"},
    { childname: "Toni", present: "Nutcracker" , weightOfPresent: 20, city: "London"},
    { childname: "Qing", present: "Bicycle" , weightOfPresent: 5000, city: "Liverpool"},
    { childname: "Liz", present: "Glasses" , weightOfPresent:200, city: "Liverpool"},
    { childname: "David", present: "TV" , weightOfPresent: 3000, city: "Southampton"},
    { childname: "Maria", present: "Motorbike" , weightOfPresent: 25000, city: "Southampton"},
];
//Act   
const actual = efficientRoadmap();

//Assert
expect(actual).toStrictlyEqual(expected)

});

it(`see that both weight and cities are organised `, ()=>{
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
//Act   
const actual = efficientRoadmap();

//Assert
expect(actual).toStrictlyEqual(expected)

})

it(`check whether the first object is the heaviest in any city`, ()=>{
    //Arrange
    const expected = distributionList[0].weightOfPresent
     
    // Act
    const actual = efficientRoadmap();
        
    // Assert
    expect(actual).toStrictlyEqual(expected)
} )
