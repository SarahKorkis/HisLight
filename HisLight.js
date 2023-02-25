



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



  // Find the element to change
const textElement = document.getElementById("SubV");

// Function to select a random text
function getRandomText() {
  const texts = [
    "Again Jesus said, “Peace be with you! As the Father has sent me, I am sending you. - John 20:21",
    "Then you will call on me and come and pray to me, and I will listen to you. - Jeremiah 29:12",
    "You are the light of the world. A town built on a hill cannot be hidden. - Matthew 5:14",
    "But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ. - Philippians 3:20",
    "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind. - James 1:6",
    "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus. - Philippians 3:14",
    "Whenever you are arrested and brought to trial, do not worry beforehand about what to say. Just say whatever is given you at the time, for it is not you speaking, but the Holy Spirit. - Mark 13:11",
    "My prayer is not that you take them out of the world but that you protect them from the evil one. - John 17:15",
    "Those who know your name trust in you, for you, Lord, have never forsaken those who seek you. - Psalm 9:10",
    "“The time has come,” he said. “The kingdom of God has come near. Repent and believe the good news!” - Mark 1:15",
    "Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.” - John 14:6",
    "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast. - Ephesians 2:8-9",
    "Be strong and take heart, all you who hope in the Lord. - Psalm 31:24",
    "Wisdom’s instruction is to fear the Lord, and humility comes before honor. - Proverbs 15:33",
    "Many will be purified, made spotless and refined, but the wicked will continue to be wicked. None of the wicked will understand, but those who are wise will understand. - Daniel 12:10",
    "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they? - Matthew 6:26",
    "Do not turn to the right or the left; keep your foot from evil. - Proverbs 4:27",
    "No one who denies the Son has the Father; whoever acknowledges the Son has the Father also. - 1 John 2:23",
    "So then, let us not be like others, who are asleep, but let us be awake and sober. - 1 Thessalonians 5:6",
    "Do not add to what I command you and do not subtract from it, but keep the commands of the Lord your God that I give you. - Deuteronomy 4:2",
    "Accept one another, then, just as Christ accepted you, in order to bring praise to God. - Romans 15:7",
    "Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. - Matthew 6:19-20",
    

  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

// Update the text every 24 hours
function updateText() {
  const lastUpdate = localStorage.getItem("lastUpdate");
  let text;
  if (lastUpdate && Date.now() - lastUpdate < 24 * 60 * 60 * 1000) {
    // Use the stored text if it was updated less than 24 hours ago
    text = localStorage.getItem("text");
  } else {
    // Generate a new random text
    text = getRandomText();
    localStorage.setItem("text", text);
    localStorage.setItem("lastUpdate", Date.now());
  }
  textElement.textContent = text;
  setTimeout(updateText, 24 * 60 * 60 * 1000);
}

// Start updating the text
updateText();




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
