$(document).ready(function(){
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.currentTemperature);

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
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
