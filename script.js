document.addEventListener('DOMContentLoaded', function() {
    const exchangeRatesDiv = document.getElementById('exchangeRates');
    const fetchButton = document.getElementById('fetchButton');
    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
  
    fetchButton.addEventListener('click', fetchExchangeRates);
  
    function fetchExchangeRates() {
      const apiUrl = `https://www.amdoren.com/api/currency.php?api_key=${apiKey}&from=USD&to=EUR`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            exchangeRatesDiv.innerHTML = `<p>Error: ${data.error.message}</p>`;
          } else {
            exchangeRatesDiv.innerHTML = `
              <div class="exchange-rate">
                <p><strong>Exchange Rate:</strong> 1 USD = ${data.amount} EUR</p>
              </div>
            `;
          }
        })
        .catch(error => {
          exchangeRatesDiv.innerHTML = '<p>An error occurred while fetching exchange rates.</p>';
          console.error('Error fetching exchange rates:', error);
        });
    }
  });
  