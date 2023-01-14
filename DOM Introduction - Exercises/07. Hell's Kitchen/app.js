function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let textAreaElements = document.getElementsByTagName('textarea');
      let arrayOfInfo = JSON.parse(textAreaElements[0].value);

      let objects = {

      }
      for (let info of arrayOfInfo) {
         let splitInfo = info.split(' - ');
         let nameOfRestaurant = splitInfo[0];
         let arrayOfWorkers = splitInfo[1].split(', ');

         if (!objects.hasOwnProperty(nameOfRestaurant)) {
            objects[nameOfRestaurant] = {

            };
         }
         if (objects.hasOwnProperty(nameOfRestaurant)) {
            for (let infoForWokrer of arrayOfWorkers) {
               let splitInfoWorker = infoForWokrer.split(' ');
               let nameOfWorker = splitInfoWorker[0];
               let salary = Number(splitInfoWorker[1]);
               objects[nameOfRestaurant][nameOfWorker] = salary;
            }

         }
      }
      let averageSalary = 0;
      for (let key in objects) {
         let average = 0;
         let entries = Object.entries(objects[key]);
         for (let [key, value] of entries) {
            average += value;
         }
         average /= entries.length;
         if (averageSalary < average) {
            averageSalary = average;
         }

      }
      let bestRestaurant = {

      }
      let workers = {

      }
      for (let key in objects) {
         let average = 0;
         let entries = Object.entries(objects[key]);
         for (let [key, value] of entries) {
            average += value;
         }
         average /= entries.length;
         if (averageSalary == average) {
            bestRestaurant.name = key;
            bestRestaurant.averageSalary = average.toFixed(2);
            let pairsNameAndSalary = Object.entries(objects[key]);
            pairsNameAndSalary.sort((a, b) => b[1] - a[1]);
            for (let [key, value] of pairsNameAndSalary) {
               workers[key] = value;
            }
         }

      }
      let bestSalary = 0;
      for (let key in workers) {
         bestSalary = workers[key];
         break;
      }
      let textForRestaurant = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestSalary.toFixed(2)}`

      let textForWorkers = '';
      for (let key in workers) {
         textForWorkers += `Name: ${key} With Salary: ${workers[key]} `;
      }

      let bestRestaurantElement = document.querySelectorAll('#bestRestaurant p')[0];
      let workerElement = document.querySelectorAll('#workers p')[0];
      bestRestaurantElement.textContent = textForRestaurant;
      workerElement.textContent = textForWorkers;


   }
}