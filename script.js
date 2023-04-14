// tabs
function openTab(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", ""); //não entendi
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();
  
  // nametitle (first tab animation)
  var textWrapper = document.querySelector('.nametitle');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); //não entendi
  
  anime.timeline({loop: false})
    .add({
      targets: '.nametitle .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2350,
      delay: (el, i) => 350 * (i+1)
    }).add({
      targets: '.nametitle'
    });
  
  
  
  
  