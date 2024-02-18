
const totalBookedSeat = [];
console.log(totalBookedSeat)
const seats = document.getElementsByClassName("seat");
for(const btn of seats){
    btn.addEventListener("click", function(e){
        
        const arr = btn.innerText;
        totalBookedSeat.push(arr);
        
        setBackgroundColorById(e);
        const currentSeat = setInnerText('left-seat');
        let left = currentSeat - 1;
        setTextElementValueById('left-seat', left);
        const bookedSeat = setInnerText('booked-seat');
        let totalBooked = bookedSeat + 1;
        setTextElementValueById('booked-seat', totalBooked);

        const selectedContainer = document.getElementById("selected-container");

        const ticketPrice = setInnerText("ticket-price")
        const seatNo = btn.innerText;
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = seatNo;
        const p2 = document.createElement("p")
        p2.innerText = "Economoy";
        const p3 = document.createElement("p");
        p3.innerText = ticketPrice;
        
        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)
        selectedContainer.appendChild(li)

        const price = setInnerText("total-price");
        const totalPrice = price + ticketPrice;


        setTextElementValueById('total-price', totalPrice)
        const grand = setInnerText("grand-total");
        const grandTotal = totalPrice;


        setTextElementValueById('grand-total', grandTotal)
    })
}





