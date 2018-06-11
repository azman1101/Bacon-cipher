$(document).ready(function() {
  var txt;
  f();
  
  function f(){
    
    var m = [], b = [];
    var i1 = 'pa', i0 = 'tu';
    var ans ="";
    
    txt = document.getElementById("myText").value;
    i1 = document.getElementById("key2").value;
    i0 = document.getElementById("key1").value;
    
    for (i=0; i<txt.length; i++){
      if (txt.charCodeAt(i)==32)
        m[i] = txt.charCodeAt(i);
      else{
        m[i] = txt.charCodeAt(i) - 97;
        
        if (m[i] >= 16){ b[i]=i1; m[i]-=16;} else b[i]=i0;
        if (m[i] >= 8){ b[i]+=i1; m[i]-=8;} else b[i]+=i0;
        if (m[i] >= 4){ b[i]+=i1; m[i]-=4;} else b[i]+=i0;
        if (m[i] >= 2){ b[i]+=i1; m[i]-=2;} else b[i]+=i0;
        if (m[i] >= 1){ b[i]+=i1; m[i]-=1;} else b[i]+=i0;
        
        ans += b[i] + " ";
      }
    }
    
    $("#msg").text(ans);
  }
  
  $("#getMessage").on("click", function(){
    f();
  });
  
});