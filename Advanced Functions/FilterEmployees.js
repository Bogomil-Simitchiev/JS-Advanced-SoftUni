function filterEmployees(data, criteria) {

    let parsedData = JSON.parse(data);

    if (criteria == 'all') {
        for (let index = 0; index < parsedData.length; index++) {
            console.log(`${index}. ${parsedData[index].first_name} ${parsedData[index].last_name} - ${parsedData[index].email}`);
        }
    } else {
        let splitCriteriaInput = criteria.split('-');
        let currentCriteria = splitCriteriaInput[0];
        let valueOfCriteria = splitCriteriaInput[1];

        let sortArrayOfObjects = parsedData.filter(object => object[currentCriteria] == valueOfCriteria);
        for (let index = 0; index < sortArrayOfObjects.length; index++) {
            console.log(`${index}. ${sortArrayOfObjects[index].first_name} ${sortArrayOfObjects[index].last_name} - ${sortArrayOfObjects[index].email}`);
        }
    }

}
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);