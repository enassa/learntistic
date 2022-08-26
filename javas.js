function background(para){
    if(para==1){
    var ele = document.getElementById("gameboard");
    ele.classList.add("right");
     var remele = document.getElementById("gameboard");
        remele.className = remele.className.replace(/\wrong\b/g, "");
    }
    
    else{
        var remele = document.getElementById("gameboard");
        remele.className = remele.className.replace(/\bright\b/g, "");
        var ele = document.getElementById("gameboard");
        ele.classList.add("wrong");
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
    
}



    var num2 = 10;
    var num = 0;
    var score=5;

  
  

    function random() {
           
    num = Math.floor(Math.random() * 10);
     
        document.getElementById('circ').innerHTML =  + num;

    }


    function myKeyPress(e) {

        
        var keynum;
        if (window.event) {num
                keynum = e.keyCode;
            } 
        else if (e.which){
                    keynum = e.which;
            }
        var charrrr=String.fromCharCode(keynum);

            if(num==charrrr){
               num2++;
                yes.play();
                
                background(1);
               document.getElementById('score').innerHTML =  + num2;
                   
             } 
        
          else{
              
               num2--;
               nope.play();
              background();
              document.getElementById('score').innerHTML =  + num2;
            
          }
      

  
        
       var element = document.getElementById("circle");
        
        element.classList.add("anim");
        
           
                 random();
              
                //if(num==charr){
                    //num2++;
                  // alert(charrrr);
                //}
            }





