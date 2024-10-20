document.getElementById('convertBtn').addEventListener('click', function() {
    // Get the amount and currency from the user
    let amount = document.getElementById('amount').value;
    let currency = document.getElementById('currency').value;
  
    // Exchange rates (you can update these rates)
    const rates = {
      USD: 280,  // 1 USD = 280 PKR (example rate)
      EUR: 320,  // 1 EUR = 320 PKR (example rate)
      GBP: 370,  // 1 GBP = 370 PKR (example rate)
      INR: 3.50  // 1 INR = 3.50 PKR (example rate)
    };
  
    // Perform the conversion
    let convertedAmount = amount * rates[currency];
  
    // Display the result
    document.getElementById('result').textContent = `${convertedAmount.toFixed(2)} PKR`;
  });
  