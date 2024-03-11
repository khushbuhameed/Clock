 
 let a;
 let date;
 let time;
 const option = {weekday: 'long' ,year: 'numeric', month: 'long',day: 'numeric'};
 
 
 setInterval( () => {
   a = new Date();
   date = a.toLocaleDateString(undefined, option);
   time = a.getHours() + ':' + a.getMinutes() +':'+ a.getSeconds();
   document.getElementById('Time').innerHTML =  time + "<br>on "+ date;

  }, 1000);