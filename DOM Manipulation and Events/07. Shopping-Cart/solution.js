function solve() {
   //TODO...

   let checkOutBtnElement = document.querySelector('.checkout');
   let productAddElements = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');

   let listOfProducts = [];

   let finalPrice = 0;
   for (let element of productAddElements) {

      element.addEventListener('click', (e) => {
         let price = Number(e.currentTarget.parentNode.nextElementSibling.textContent);
         finalPrice += price;
         let productName = e.currentTarget.parentNode.previousElementSibling.querySelector('.product-title').textContent;
         if (!listOfProducts.includes(productName)) {
            listOfProducts.push(productName);
         }
         textAreaElement.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;

      })
   }


   checkOutBtnElement.addEventListener('click', function () {
      textAreaElement.value += `You bought ${listOfProducts.join(', ')} for ${finalPrice.toFixed(2)}.`;
      for (let btnElement of productAddElements) {
         btnElement.disabled = true;
      }
      checkOutBtnElement.disabled = true;

   })


}