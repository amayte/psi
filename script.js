// Tabs
function openTab(event, tabName) {
  const tabContents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContents.length; i++) {
  tabContents[i].style.display = "none";
  }
  
  const tabLinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  
  event.currentTarget.className += " active";
  document.getElementById(tabName).style.display = "block";
  
  // Add "active" class to the clicked button
  event.currentTarget.classList.add("active");
  
  // Remove "active" class from the other buttons
  const activeTabs = document.querySelectorAll(".tab button.active");
  for (let i = 0; i < activeTabs.length; i++) {
  if (activeTabs[i] !== event.currentTarget) {
  activeTabs[i].classList.remove("active");
  }
  }
  }
  
  document.getElementById("defaultOpen").click();
  
  // Nametitle (First tab animation)
  const textWrapper = document.querySelector('.nametitle');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({ loop: false })
  .add({
  targets: '.nametitle .letter',
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2350,
  delay: (el, i) => 350 * (i + 1)
  }).add({
  targets: '.nametitle'
  });