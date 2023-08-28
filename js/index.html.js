document.addEventListener('DOMContentLoaded', function(event)
{
   var PanelMenu1 = document.querySelector('#wb_PanelMenu1');
   var bsPanelMenu1 = new bootstrap.Tooltip(PanelMenu1, {offset:[0,14],placement:'bottom', html: true, sanitize: false, title: '<span style="color:#000000;font-family:Arial;font-size:13px;">Click the hamburger icon to open the menu</span>', trigger: 'manual', animation: true, customClass:'ToolTip1'});
   PanelMenu1.addEventListener('inserted.bs.tooltip', function(e)
   {
      var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
      tooltip.classList.add('animate-show');
   });
   PanelMenu1.addEventListener('hide.bs.tooltip', function(e)
   {
      var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
      tooltip.classList.remove('animate-show');
      var forceReflow = e.target.offsetWidth;
   });
});
$(document).ready(function()
{
   $("#PanelMenu1").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: false, display: 'overlay', position: 'left', toggle: true});
});
var wb_Timer1;
function TimerStartTimer1()
{
   wb_Timer1 = setTimeout(function()
   {
      var event = null;
      bootstrap.Tooltip.getInstance('#wb_PanelMenu1').show();
   }, 300);
}
function TimerStopTimer1()
{
   clearTimeout(wb_Timer1);
}
TimerStartTimer1();
