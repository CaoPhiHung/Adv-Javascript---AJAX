$(function(){
  var apiKey ="e991b4494b067a58f8c58e1337585046";
  var option = "";
  $('input[type="radio"]').click(function(){
    if ($(this).is(':checked') )
    {
      $('#city').val("");
      option = $(this).val();
    }
  });

  $('#city').change(
    function() {
        var city = $('#city').val();
        if(option == "Current Weather Condition" && city != ""){
          var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
          $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function(data) {
              var tempK = data.main.temp;
              var tempC = tempK - 273.15;
              
              $('#display').empty();
              var date = convertDateTime(data.dt);
    
              $('#display').append('<li>City Name: '+data.name +'</li>');
              $('#display').append('<li>Time: '+ date +'</li>');
              $('#display').append('<li>Temperature(C): '+ tempC +'</li>');
              data.weather.forEach(element => {
                $('#display').append('<li>Weather Discription: '+ element.description +'</li>');
              });
              
            }
          });

        }else if(option == "Weather Forecast" && city != ""){
          url = "http://api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=" + apiKey;
          var today = new Date();
          $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function(data) {
              $('#display').empty();
              $('#display').append('<li>City Name: '+data.city.name +'</li>');
              $('#display').append('<li>Temperature: ');
    
              data.list.forEach(element => {
                var checkDate = new Date(element.dt * 1000);
                if(today.getDate() + 3 >= checkDate.getDate() && checkDate.getHours() + 1 == 12){
                  $('#display').append( checkDate);
                  $('#display').append('<ol>Weather Discription: '+ element.weather[0].description +'</ol></li>');
                }
              });
            }  
            });
        }else{
          $('#display').empty();
        }
    }
);

  var convertDateTime = function(datetime) {
      var date = new Date(datetime*1000);
      var hours = date.getHours() + 1;
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      return formattedTime;
  };

});