$(document).ready(function () {
    // Init
    // Upload Preview
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("file-input").change(function () {
        $('.image-section').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                // $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data.substring(14,data.length-6));
                console.log('Success!');
                document.getElementById("info").value=data.substring(14,data.length-6);
                document.getElementById("btn-speech").style.display="block";
            },
        });
    });

});
