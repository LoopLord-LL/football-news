  // Function to update exchange rate information
  function updateExchangeRate() {
    var currencies = ['USD to EUR: 0.87', 'USD to GBP: 0.76', 'EUR to JPY: 129.42', 'GBP to AUD: 1.83'];
    var randomIndex = Math.floor(Math.random() * currencies.length);
    document.getElementById('exchange-rate-info').textContent = currencies[randomIndex];
  }

  // Function to update weather information
  function updateWeather() {
    var weatherConditions = ['Clear skies, 24°C', 'Partly cloudy, 20°C', 'Rainy, 18°C', 'Sunny, 28°C'];
    var randomIndex = Math.floor(Math.random() * weatherConditions.length);
    document.getElementById('weather-info').textContent = weatherConditions[randomIndex];
  }

  // Function to update calendar information
  function updateCalendar() {
    var events = ['Meeting at 10:00 AM', 'Webinar at 2:00 PM', 'Holiday: Independence Day', 'Birthday: John Doe'];
    var randomIndex = Math.floor(Math.random() * events.length);
    document.getElementById('calendar-info').textContent = events[randomIndex];
  }

  // Update data every 5 seconds
  setInterval(function() {
    updateExchangeRate();
    updateWeather();
    updateCalendar();
  }, 5000); // 5000 milliseconds = 5 seconds
