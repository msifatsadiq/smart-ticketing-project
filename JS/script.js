

document.getElementById('nav-button').addEventListener('click', function () {
    // console.log('clicked');
    let phSection = document.getElementById('ph-section');
    phSection.scrollIntoView();
})

var totalSeat = 40;
var selectedSeatCount = 0;
var selectedSeatIds = [];

// Get all elements with the class 'all-seat' and add an event listener to each
var allSeats = document.getElementsByClassName('all-seat');

for (var i = 0; i < allSeats.length; i++) {
    allSeats[i].addEventListener('click', function (event) {
        // if value is not in the array then insert the value
        if (selectedSeatIds.includes(event.target.id)) {
            // removing id
            selectedSeatIds = selectedSeatIds.filter(function (item) {
                return item !== event.target.id;
            });
            // removing color
            document.getElementById(event.target.id).style.backgroundColor = "white";
            // 
            selectedSeatCount = selectedSeatCount - 1
        } else {
            // count 4 or not if 4 say no
            if (selectedSeatIds.length > 3) {
                alert("ERROR : SORRY BRO you have already 4 tickets.")
                return;
            }
            // 
            selectedSeatIds.push(event.target.id);
            // 
            selectedSeatCount = selectedSeatCount + 1
        }
        // testing 
        console.log(selectedSeatIds)
        console.log(selectedSeatCount)
        // changing background color 
        selectedSeatIds.forEach(function (seatId) {
            var listItem = document.getElementById(seatId);
            if (listItem) {
                listItem.style.backgroundColor = '#1DD100';
            }
        });
        // setting the seats
        document.getElementById("seat-adder").innerText = selectedSeatCount;
        // setting total seat
        document.getElementById("seats-left").innerText = totalSeat - selectedSeatCount;
        // inserting seat data
        let seatData = ""
        selectedSeatIds.forEach(function (seatId) {
            seatData += seatId + "|" + "Economy" + "| 550 \n";
        });
        // 
        document.getElementById("selected-seat-class-price").innerText = seatData
        // setting total seat Price 
        document.getElementById("total-price").innerText = selectedSeatIds.length * 550;
        // setting Grand total 
        document.getElementById("grand-total").innerText = selectedSeatIds.length * 550;
    });

}

function pricing(id) {
    console.log(id)
}

function applyCoupon() {
    // 
    couponInputFieldValue = document.getElementById("coupon-input-field").value;
    // 
    if (couponInputFieldValue == "NEW15") {
        let total = selectedSeatIds.length * 550;
        let discount = selectedSeatIds.length * 15
        document.getElementById("grand-total").innerText = total - discount;
    }

    if (couponInputFieldValue == "NEW 20") {
        let total = selectedSeatIds.length * 550;
        let discount = selectedSeatIds.length * 20
        document.getElementById("grand-total").innerText = total - discount;
    }
}