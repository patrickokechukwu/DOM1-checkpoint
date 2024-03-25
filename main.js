document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
  
    items.forEach(function(item) {
      const quantityInput = item.querySelector(".quantity");
      const btnMinus = item.querySelector(".btn-minus");
      const btnPlus = item.querySelector(".btn-plus");
      const btnDelete = item.querySelector(".btn-delete");
      const btnLike = item.querySelector(".btn-like");
  
      btnMinus.addEventListener("click", function() {
        if (quantityInput.value > 1) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
          updateTotal();
        }
      });
  
      btnPlus.addEventListener("click", function() {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotal();
      });
  
      btnDelete.addEventListener("click", function() {
        item.remove();
        updateTotal();
      });
  
      btnLike.addEventListener("click", function() {
        btnLike.classList.toggle("liked");
      });
  
      quantityInput.addEventListener("change", function() {
        updateTotal();
      });
    });
  
    function updateTotal() {
      let totalPrice = 0;
      items.forEach(function(item) {
        const quantity = parseInt(item.querySelector(".quantity").value);
        const price = 10; // Assuming each item costs $10
        totalPrice += quantity * price;
      });
      document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    }
  
    // Initial total calculation
    updateTotal();
  });