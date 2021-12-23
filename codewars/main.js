/* 
👉 Write your kata here!

The Roadmap for Father Christmas
 
Father Christmas has called on you to help optimise his presents delivery journey in order to spare his reindeers
a back-breaking back and forth with too many heavy presents.

Father Christmas provided you with a sample list of Children with their associated presents, the weight of the presents
and the city where the delivery is to take place.

Could you organise the list (or any list looking similar, as there are more than 11 children to deal with in reality, 
even if plenty have been naughty...) so that:
- the heaviest present is delivered first 
- the second heaviest is delivered next provided it is in the same city
- otherwise the second heaviest and subsequent ones of that first city are delivered before he changes city
- when he changes city he goes to the one nearest to the previous one (forget about kilometers, we just 
consider the nearest city to be the next name down in the alphabet. Once he reaches Zouch the well-known 
touch in Leicestershire he goes back to the top of the alphabet and continues from there if needed).

 
*/

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


//👉 Write the function your CodeWarriors will start with below here:
export function efficientRoadmap(distributionList){}