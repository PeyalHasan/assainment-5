const totalBookedSeat = [];
let count = 0;
const seats = document.getElementsByClassName("seat");
for(const btn of seats){
    btn.addEventListener("click", function(e){
            btn.disabled = true;
            count = count + 1;
            setBackgroundColorById(e);
            const currentSeat = setInnerText('left-seat');
            let left = currentSeat - 1;
            setTextElementValueById('left-seat', left);
            const bookedSeat = setInnerText('booked-seat');
            let totalBooked = bookedSeat + 1;
            setTextElementValueById('booked-seat', totalBooked);
            if(count > 4){
                btn.removeEventListener("click");
            }
            else if(totalBooked <= 4){
                showElementById("discount")
                const couponElement =document.getElementById("discount").value;
            }
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
            btn.disabled == true;
       
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function coupon(){
    const couponElement = document.getElementById("coupon").value;
    if(couponElement === 'NEW15'){
      const total = document.getElementById("total-price").innerText;
        const discount = total * 0.15;
        const grandTotal = total - discount;
        setTextElementValueById('grand-total', grandTotal);
        hideElementById("discount")
    }
     else if(couponElement === 'Couple 20'){
      const total = document.getElementById("total-price").innerText;
        const discount = total * 0.20;
        const grandTotal = total - discount;
        setTextElementValueById('grand-total', grandTotal);
        hideElementById("discount")
    }
    else{
        alert("invalid coupon")
    }
})

function nextPage(){
    hideElementById("main-section")
    hideElementById("footer-section")
    hideElementById("header")

    showElementById("success")
  }


