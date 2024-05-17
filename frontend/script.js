$(document).ready(function() {
    $('#phishingForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        var url = $('#urlInput').val();

        $.ajax({
            url: 'http://127.0.0.1:8000/predict/{feature}?features=' + encodeURIComponent(url),
            type: 'GET',
            success: function(data) {
                // Extract the classification message from the response
                var classificationMessage = data[1];
                
                // Update the #result div with the classification message
                $('#result').text(classificationMessage);

                // Add appropriate class to #result based on the classification message
                if (classificationMessage.includes('Phishing')) {
                    $('#result').removeClass().addClass('phishing');
                } else {
                    $('#result').removeClass().addClass('not-phishing');
                }
            },
            error: function() {
                $('#result').text('An error occurred');
            }
        });
    });
});