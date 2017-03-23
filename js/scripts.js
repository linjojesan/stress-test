//business logic
function StressProfile(signs, symptoms, copingMethods) {
  this.signs = signs;
  this.symptoms = symptoms;
  this.methods = copingMethods;
}


StressProfile.prototype.stressLevel = function() {
  var totalStress = (this.signs + this.symptoms) - this.methods;

  if (totalStress < 3) {
    return 1;
  } else if (totalStress >= 3 && totalStress < 8) {
    return 2;
  } else if (totalStress >= 8) {
    return 3;
  }
}


//ui
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var checkedSigns = $('input:checkbox[name=stress-signs]:checked').length;
    var checkedSymptoms  = $("input:checkbox[name=stress-symptoms]:checked").length;
    var checkedCoping = $("input:checkbox[name=coping-methods]:checked").length;
    var userData = new StressProfile(checkedSigns, checkedSymptoms, checkedCoping);
    var result = userData.stressLevel();

    $('#output').show().empty();

    if (result === 1) {
      $('#output').text('Looks like your already practicing good stress coping methods');
    } else if (result === 2) {
      $('#output').append('You should visit this link'.link('http://www.humanstress.ca/stress/trick-your-stress/steps-to-instant-stress-management.html'));
    } else if (result === 3) {
      $('#output').text('Warning: you should seek professional help');
    }
  });
});
