



function N1function() {
    var Novena1 = document.getElementById("Novena1");
    var Novena1A = document.getElementById("Novena1A");
    var N1Button = document.getElementById("N1Button");
    var Novena1sub = document.getElementById("Novena1sub");
    var Novena1subA = document.getElementById("Novena1subA");
    var scrollButtons = document.getElementById("scrollButtons");

    const novena1Day = new Date().toLocaleString().split(',')[0]

    if (novena1Day == '9/13/2022'){
      Novena1A.innerHTML = 'Day 8';
    }
    else if (novena1Day == '9/14/2022'){
      Novena1A.innerHTML = 'Day 9';
    }
  
    if (Novena1.style.display === "none") {
      Novena1.style.display = "inline";
      Novena1sub.style.display = "inline";
      N1Button.innerHTML = "Pray";
      N1Button.style.top = "570vh";
      Novena1A.style.display = "none";
      Novena1subA.style.display = "none";
      scrollButtons.style.display = "inline";
    } else {
      Novena1.style.display = "none";
      Novena1sub.style.display = "none";
      N1Button.innerHTML = "Back";
      N1Button.style.top = "600vh";
      Novena1A.style.display = "inline";
      Novena1subA.style.display = "inline";
      scrollButtons.style.display = "none";
    }
  }



  function N2function() {
    
    var Novena2 = document.getElementById("Novena2");
    var Novena2A = document.getElementById("Novena2A");
    var N2Button = document.getElementById("N2Button");
    var Novena2sub = document.getElementById("Novena2sub");
    var Novena2subA = document.getElementById("Novena2subA");

    var N1Button = document.getElementById("N1Button");

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
  
    if (Novena2.style.display === "none") {
      Novena2.style.display = "inline";
      Novena2sub.style.display = "inline";
      N2Button.innerHTML = "Pray";
      N2Button.style.top = "570vh"
      Novena2A.style.display = "none";
      Novena2subA.style.display = "none";
      scrollButtons.style.display = "inline";
      N1Button.style.display = "none"
      scrollButtons.style.display = "inline";
    } else {
      Novena2.style.display = "none";
      Novena2sub.style.display = "none";
      N2Button.innerHTML = "Back";
      N2Button.style.top = "600vh";
      Novena2A.style.display = "inline";
      Novena2subA.style.display = "inline";
      scrollButtons.style.display = "none";
      N1Button.style.display = "none"
      scrollButtons.style.display = "none";
    }
  }

  function N3function() {
    var Novena3 = document.getElementById("Novena3");
    var Novena3A = document.getElementById("Novena3A");
    var N3Button = document.getElementById("N3Button");
    var Novena3sub = document.getElementById("Novena3sub");
    var Novena3subA = document.getElementById("Novena3subA");
    var scrollButtons = document.getElementById("scrollButtons");

    const novena3Day = new Date().toLocaleString().split(',')[0]

    if (novena3Day == '9/13/2022'){
      Novena3A.innerHTML = 'Day 8';
    }
    else if (novena3Day == '9/14/2022'){
      Novena3A.innerHTML = 'Day 9';
    }
  
    if (Novena3.style.display === "none") {
      Novena3.style.display = "inline";
      Novena3sub.style.display = "inline";
      N3Button.innerHTML = "Pray";
      N3Button.style.top = "570vh";
      Novena3A.style.display = "none";
      Novena3subA.style.display = "none";
      scrollButtons.style.display = "inline";
    } else {
      Novena3.style.display = "none";
      Novena3sub.style.display = "none";
      N3Button.innerHTML = "Back";
      N3Button.style.top = "600vh";
      Novena3A.style.display = "inline";
      Novena3subA.style.display = "inline";
      scrollButtons.style.display = "none";
    }
  }


  var theHours = new Date().getHours();
  let random = Math.floor(Math.random() * verses.length);
  var SubV = document.getElementByClassName("SubV");
  

  const verses = [{
      verse: "YO"},
    {
      verse: "HEYYY"
    },{
      verse: "LOL"
    },]





/*    if (Novena2.style.display === "inline") {
      Novena2.style.display = "inline";
      Novena2sub.style.display = "inline";
      Novena1.style.display = "none";
      N2Button.style.display = "inline";
      N1Button.style.display = "none";
      Novena1sub.style.display = "none";
      scrollButtons.style.display = "inline";
    } else{
      Novena2.style.display = "inline";
      Novena2sub.style.display = "inline";
      Novena1.style.display = "none";
      N2Button.style.display = "inline";
      N1Button.style.display = "none";
      Novena1sub.style.display = "none";
      scrollButtons.style.display = "none";
    }
  */

  if(window.innerWidth <= 400){
    function N1function() {
      var Novena1 = document.getElementById("Novena1");
      var Novena1A = document.getElementById("Novena1A");
      var N1Button = document.getElementById("N1Button");
      var Novena1sub = document.getElementById("Novena1sub");
      var Novena1subA = document.getElementById("Novena1subA");
      var scrollButtons = document.getElementById("scrollButtons");

      const novena1Day = new Date().toLocaleString().split(',')[0];

      if (novena1Day == '9/13/2022'){
        Novena1A.innerHTML = 'Day 8';
      }
      else if (novena1Day == '9/14/2022'){
        Novena1A.innerHTML = 'Day 9';
      }
    
      if (Novena1.style.display === "none") {
        Novena1.style.display = "inline";
        Novena1sub.style.display = "inline";
        N1Button.innerHTML = "Pray";
        N1Button.style.top = "930vw";
        Novena1A.style.display = "none";
        Novena1subA.style.display = "none";
        scrollButtons.style.display = "inline";
      } else {
        Novena1.style.display = "none";
        Novena1sub.style.display = "none";
        N1Button.innerHTML = "Back";
        N1Button.style.top = "1010vw";
        Novena1A.style.display = "inline";
        Novena1subA.style.display = "inline";
        scrollButtons.style.display = "none";
      }
    }
  
  
    function N2function() {
      var Novena2 = document.getElementById("Novena2");
      var Novena2A = document.getElementById("Novena2A");
      var N2Button = document.getElementById("N2Button");
      var Novena2sub = document.getElementById("Novena2sub");
      var Novena2subA = document.getElementById("Novena2subA");
      var scrollButtons = document.getElementById("scrollButtons");


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
    
      if (Novena2.style.display === "none") {
        Novena2.style.display = "inline";
        Novena2sub.style.display = "inline";
        N2Button.innerHTML = "Pray";
        N2Button.style.top = "930vw";
        Novena2A.style.display = "none";
        Novena2subA.style.display = "none";
        scrollButtons.style.display = "inline";
      } else {
        Novena2.style.display = "none";
        Novena2sub.style.display = "none";
        N2Button.innerHTML = "Back";
        N2Button.style.top = "1010vw";
        Novena2A.style.display = "inline";
        Novena2subA.style.display = "inline";
        scrollButtons.style.display = "none";
      }
    }

    function N3function() {
      var Novena3 = document.getElementById("Novena3");
      var Novena3A = document.getElementById("Novena3A");
      var N3Button = document.getElementById("N3Button");
      var Novena3sub = document.getElementById("Novena3sub");
      var Novena3subA = document.getElementById("Novena3subA");
      var scrollButtons = document.getElementById("scrollButtons");
  
      const novena3Day = new Date().toLocaleString().split(',')[0]
  
      if (novena3Day == '9/13/2022'){
        Novena3A.innerHTML = 'Day 8';
      }
      else if (novena3Day == '9/14/2022'){
        Novena3A.innerHTML = 'Day 9';
      }
    
      if (Novena3.style.display === "none") {
        Novena3.style.display = "inline";
        Novena3sub.style.display = "inline";
        N3Button.innerHTML = "Pray";
        N3Button.style.top = "930vw";
        Novena3A.style.display = "none";
        Novena3subA.style.display = "none";
        scrollButtons.style.display = "inline";
      } else {
        Novena3.style.display = "none";
        Novena3sub.style.display = "none";
        N3Button.innerHTML = "Back";
        N3Button.style.top = "1010vw";
        Novena3A.style.display = "inline";
        Novena3subA.style.display = "inline";
        scrollButtons.style.display = "none";
      }
    }
  }


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
