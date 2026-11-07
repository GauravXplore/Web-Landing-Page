console.log("Magical Sorting Hat");


let students = ["shubh", "anjali", "shivani", "Shivangi", "Annapurna", "Shubham", "Krishna", "Ravi", "shivesh", "Kaif", "Emanuel"];

let houses = [];

for (const student of students) {
    if(student.length< 6){
 houses.push("Gryffindor");
    }else if(student.length< 8){
    houses.push("Hufflepuff");
    }else if(student.length< 12){
    houses.push("RavenClaw");
    }else{
    houses.push("Slytherin");
    }
}

console.log(houses);