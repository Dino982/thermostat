$(document).ready(function(){
  var thermostat = new Thermostat();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=ab8b8df684ed13293bd86cb6dedc205e&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

  $('#temperature').text(updateTemperature());

  if (thermostat.isPowerSavingModeOn()) {
    $('#power-saving-status').text("on")
  } else {
    $('#power-saving-status').text("off")
  }

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    $('#temperature').text(thermostat.currentTemperature);
  });
  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $("#power-saving-status").text("off");
  });
  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $("#power-saving-status").text("on");
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').html(thermostat.currentTemperature + '&deg;C');
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
