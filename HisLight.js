




function N1function() {
    var Novena1 = document.getElementById("Novena1");
    var Novena1A = document.getElementById("Novena1A");
    var N1Button = document.getElementById("N1Button");
    var Novena1sub = document.getElementById("Novena1sub");
    var Novena1subA = document.getElementById("Novena1subA");

    const novena1Day = new Date().toLocaleString().split(',')[0]

    if (novena1Day == '9/13/2022'){
      Novena1A.innerHTML = 'Day 8';
    }
    else if (novena1Day == '9/14/2022'){
      Novena1A.innerHTML = 'Day 9';
    }
    else{
      Novena1A.innerHTML = 'ERROR';
    } 
  
    if (Novena1.style.display === "none") {
      Novena1.style.display = "inline";
      Novena1sub.style.display = "inline";
      N1Button.innerHTML = "Pray";
      N1Button.style.top = "570vh";
      Novena1A.style.display = "none";
      Novena1subA.style.display = "none";
    } else {
      Novena1.style.display = "none";
      Novena1sub.style.display = "none";
      N1Button.innerHTML = "Back";
      N1Button.style.top = "585vh";
      Novena1A.style.display = "inline";
      Novena1subA.style.display = "inline";
    }
  }



  function N2function() {
    
    var Novena2 = document.getElementById("Novena2");
    var Novena2A = document.getElementById("Novena2A");
    var N2Button = document.getElementById("N2Button");
    var Novena2sub = document.getElementById("Novena2sub");
    var Novena2subA = document.getElementById("Novena2subA");

    const novena2Day = new Date().toLocaleString().split(',')[0]

    if (novena2Day == '9/12/2022'){
      Novena2A.innerHTML = 'Day 6';
    }
    else if (novena2Day == '9/13/2022'){
      Novena2A.innerHTML = 'Day 7';
    }
    else if (novena2Day == '9/14/2022'){
      Novena2A.innerHTML = 'Day 8';
    }
    else if (novena2Day == '9/15/2022'){
      Novena2A.innerHTML = 'Day 9';
    }
    else{
      Novena2A.innerHTML = 'ERROR';
    }
  
    if (Novena2.style.display === "none") {
      Novena2.style.display = "inline";
      Novena2sub.style.display = "inline";
      N2Button.innerHTML = "Pray";
      N2Button.style.top = "570vh"
      Novena2A.style.display = "none";
      Novena2subA.style.display = "none";
    } else {
      Novena2.style.display = "none";
      Novena2sub.style.display = "none";
      N2Button.innerHTML = "Back";
      N2Button.style.top = "585vh"
      Novena2A.style.display = "inline";
      Novena2subA.style.display = "inline";
    }
  }

  if(window.innerWidth <= 400){
    function N1function() {
      var Novena1 = document.getElementById("Novena1");
      var Novena1A = document.getElementById("Novena1A");
      var N1Button = document.getElementById("N1Button");
      var Novena1sub = document.getElementById("Novena1sub");
      var Novena1subA = document.getElementById("Novena1subA");

      const novena1Day = new Date();
      let newNovena1Day = novena1Day.getDate();
      if (newNovena1Day == '12'){
        Novena1A.innerHTML = 'Day 7';
      }
      else if (newNovena1Day == '13'){
        Novena1A.innerHTML = 'Day 8';
      }
      else if (newNovena1Day == '14'){
        Novena1A.innerHTML = 'Day 9';
      }
      else{
        Novena2A.innerHTML = 'ERROR';
      }
    
      if (Novena1.style.display === "none") {
        Novena1.style.display = "inline";
        Novena1sub.style.display = "inline";
        N1Button.innerHTML = "Pray";
        N1Button.style.top = "980vw";
        Novena1A.style.display = "none";
        Novena1subA.style.display = "none";
      } else {
        Novena1.style.display = "none";
        Novena1sub.style.display = "none";
        N1Button.innerHTML = "Back";
        N1Button.style.top = "1098vw";
        Novena1A.style.display = "inline";
        Novena1subA.style.display = "inline";
      }
    }
  
  
    function N2function() {
      var Novena2 = document.getElementById("Novena2");
      var Novena2A = document.getElementById("Novena2A");
      var N2Button = document.getElementById("N2Button");
      var Novena2sub = document.getElementById("Novena2sub");
      var Novena2subA = document.getElementById("Novena2subA");
      var sorrow = document.getElementById("sorrow");

      const novena2Day = new Date();
      let newNovena2Day = novena2Day.getDate();
      if (newNovena2Day == '12'){
        Novena2A.innerHTML = 'Day 6';
      }
      else if (newNovena2Day == '13'){
        Novena2A.innerHTML = 'Day 7';
      }
      else if (newNovena2Day == '14'){
        Novena2A.innerHTML = 'Day 8';
      }
      else if (newNovena2Day == '15'){
        Novena2A.innerHTML = 'Day 9';
      }
      else{
        Novena2A.innerHTML = 'ERROR';
      }
    
      if (Novena2.style.display === "none") {
        Novena2.style.display = "inline";
        Novena2sub.style.display = "inline";
        N2Button.innerHTML = "Pray";
        N2Button.style.top = "1225vw"
        Novena2A.style.display = "none";
        Novena2subA.style.display = "none";
      } else {
        Novena2.style.display = "none";
        Novena2sub.style.display = "none";
        N2Button.innerHTML = "Back";
        N2Button.style.top = "1335vw"
        Novena2A.style.display = "inline";
        Novena2subA.style.display = "inline";
      }
    }
  }

  /*function BFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } */

  function BFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
