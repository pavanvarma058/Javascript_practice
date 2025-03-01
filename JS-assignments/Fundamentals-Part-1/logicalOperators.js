/*
1.Comment out the previous code so the prompt doesn't get in the way.

2.Let's say Sarah is looking for a new country to live in. 
She wants to live in a country that speaks English, has less than 50 million people and is not an island.

3.Write an if statement to help Sarah figure out if your country is right for her.
 You will need to write a condition that accounts for all of Sarah's criteria. 
 Take your time with this, and check part of the solution if necessary.

4.If yours is the right country, log a strings like this 'You should live in Portugal :)'. 
 If not, log 'Portugal does not meet your criteria :('.

5.Probably your country does not meet all the criteria. So go back and temporarily change some 
  variables in order to make the condition true (unless you live in Canada :D).
*/

let country = "USA";
let language = "English";
let population = 350000000;
let isIsland = false;

if (language === "English" && population < 500000000 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
