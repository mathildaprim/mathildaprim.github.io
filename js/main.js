
$(document).ready(function()
{
  // suche alle "sections", verstecke sie und
  // packe sie in die variable "mySections"

  var myNews = $(".text1").hide();

  // nimm die jeweilige "section", verzögere um 700 millisekunden und
  // fade sie wieder ein

  myNews.each(function ()
  {
    $(".text1").fadeIn(3000);
  });

});



var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};
window.onload = function(){
  var max = 2160;
  forEach(document.querySelectorAll('.progress'), function (index, value) {
  percent = value.getAttribute('data-progress');
    value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
    value.querySelector('.value').innerHTML = percent + '%';
  });
}



/*

Used to calc the variable 'max' 
and set 'stroke-dasharray' and 
'stroke-dashoffset' in the css
   
console.log(document.querySelector('.fill').getTotalLength());

*/


