let data = [
    { name: "john", age: 24, profession:"developer" },
    { name: "jane", age: 27, profession:"admin" },
  ];
  
  

  // 1. Print Developers
  function printDeveloper() {

    for (let i=0; i<data.length; i++)
    {
        if(data[i].profession === 'developer')
        {
            console.log(data[i]);   
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let newEmployee = {name: "rishi", age:20, profession:"intern"};
    data.push(newEmployee);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for (let i=0; i<data.length; i++)
    {
        if(data[i].profession !== 'admin')
        {
            console.log(data[i]);  
        }
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let additionalEmployees = [
        {name: "Sunny", age:24, profession:"developer" },
        {name: "Arman", age:23, profession:"developer" }
      ];
    
      data = data.concat(additionalEmployees);
      console.log(data)
  }
  
  // 5. Average Age
  function averageAge() {

    let AgeSum = 0;

    for(let i=0; i<data.length; i++)
    {
        AgeSum = AgeSum + data[i].age;
    }
    console.log('Average age is: ' + AgeSum/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0; i<data.length; i++){
        if(data[i].age > 25)
        {
            console.log(data[i].name + ' is above 25 years old');
        }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log(professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatedPeople = data.map(person => {
        if (person.name === 'john') {
          return { ...person, profession: 'manager' };
        }
        return person;
      });
      
      console.log(updatedPeople);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = 0;
    let adminCount = 0;

    data.forEach(person => {
      if (person.profession === 'developer') {
        developerCount++;
      } else if (person.profession === 'admin') {
        adminCount++;
      }
    });

    console.log("Total number of developers:" +  developerCount);
    console.log("Total number of admins:" + adminCount);
}