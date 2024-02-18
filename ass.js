function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function buyTicket() {
  hideElementById("buy-ticket");
  showElementById("main-section");
}
function setBackgroundColorById(elementId) {
  elementId.target.style.backgroundColor = "green";
  elementId.target.style.color = "white";
}

function setInnerText(elementId) {
  const leSeat = document.getElementById(elementId).innerText;
  const lefSeat = parseInt(leSeat);
  return lefSeat;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function totalPrice(){
    
        return totalPrice;
}

