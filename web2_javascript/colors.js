var Links  = {
  setColor : function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
     // css('하려고하는거',매개변수);
  }
}
var Body = {
  setColor: function(color){
    // document.querySelector('body').style.color= color;
    $('body').css('color',color);
  },
  setBackgroundColor: function(color){
    // document.querySelector('body').style.backgroundColor= color;
    $('body').css('backgroundColor',color);
  }
}
function nightDayHandler(self){
  if(self.value === 'night'){
    self.value = 'day';
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Links.setColor('powderblue');
  }
  else{
    self.value = 'night';
    Body.setColor('black');
    Body.setBackgroundColor('white');          Links.setColor('blue');
  }
}
