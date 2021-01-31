function degreesToRadians(deg) {
    return (deg/180) * Math.PI;
  }

  function percentToRadians(percentage) {
    // convert the percentage into degrees
    var degrees = percentage * 360 / 100;
    // and so that arc begins at top of circle (not 90 degrees) we add 270 degrees
    return degreesToRadians(degrees + 270);
  }

var canvas= document.getElementsByClassName("skill-canvas");
for(var i=0;i<canvas.length;i++)
{
    var context1=canvas[i].getContext("2d");
    var data=canvas[i].getAttribute("data");
    var percent=canvas[i].getAttribute("data-percent");
    var startAngle=percentToRadians(0);
    var endAngle=percentToRadians(percent);

    context1.beginPath();
    context1.arc(100,100, 70 , 0 ,2 * Math.PI);
    context1.font="1.4rem Arial Narrow, sans-serif";
    context1.fillText(data,60,110);
    context1.fillText(percent+"%",80,140);
    context1.lineWidth=5;
    context1.strokeStyle= "rgba(205, 210, 211, 0.596)";
    context1.stroke();

    var context2=canvas[i].getContext("2d");
    context2.beginPath();
    context2.arc(100,100, 70 ,startAngle,endAngle);
    context2.lineWidth=5;
    context2.strokeStyle="blue";
    context2.stroke();
}


$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#nav-ul a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top -50< scrollPos && refElement.position().top + refElement.height()-100 > scrollPos) {
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}

mybutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}

function topfunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

const ham=document.getElementById('ham');
const navUL=document.getElementById('nav-ul');

ham.addEventListener('click',()=>{
  navUL.classList.toggle('show');
})

var links=$('#nav-ul a');
for(var i=0;i<links.length;i++)
{
  links[i].addEventListener('click',()=>{
    navUL.classList.remove("show");
  })
}
