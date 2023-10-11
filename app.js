document.getElementById('call-api').addEventListener('click', function() {
    // Collect user input
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    // Add other input fields as needed

    // Construct the data to be sent
    const data = {
        firstname,
        lastname,
        // Include other data here
    };

    // Retrieve the API Gateway Invoke URL
    const apiURL = 'https://pdcw4qafbk.execute-api.us-east-1.amazonaws.com/prod';

    // Send a POST request to the API
    fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the API response (if needed)
        console.log('API response:', data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
});
