// Global var
var selectedSeatCount = 0;
var selectedSeatIds = [];

// Scrolling down
document.getElementById('nav-button').addEventListener('click', function () {
    // console.log('clicked');
    let selectSeatSection = document.getElementById('select-seat-section');
    selectSeatSection.scrollIntoView();
})
// 
function pricing(event) {
    // 
    let id = event.target.id
    // 
    if (selectedSeatIds.includes(id)) {
        // removing id
        selectedSeatIds = selectedSeatIds.filter(function (item) {
            return item !== id;
        });
        // removing color
        document.getElementById(id).style.backgroundColor = "white";
        //
        selectedSeatCount = selectedSeatCount - 1
    } else {
        // count 4 or not if 4 say no
        if (selectedSeatIds.length > 3) {
            alert("ERROR : Sorry you can not select more than 4 tickets.")
            return;
        }
        //
        selectedSeatIds.push(id);
        //
        selectedSeatCount = selectedSeatCount + 1
    }
    // changing background color
    selectedSeatIds.forEach(function (seatId) {
        let listItem = document.getElementById(seatId);
        if (listItem) {
            listItem.style.backgroundColor = '#1DD100';
        }
    });
    // 
    document.getElementById("seat-adder").innerText = selectedSeatCount;
    // setting total seat
    document.getElementById("seats-left").innerText = 40 - selectedSeatCount;
    // inserting seat data
    let seatData = ""
    selectedSeatIds.forEach(function (seatId) {

        seatData += "<span class='text-[#03071299] mr-40'> " + seatId + " </span> <span class='text-[#03071299] mr-28'> Economy </span> <span class='text-[#03071299] '> 500 </span> <br>";
    });
    document.getElementById("selected-seat-class-price").innerHTML = seatData
    // setting total seat Price
    document.getElementById("total-price").innerText = selectedSeatIds.length * 550;
    // setting Grand total
    document.getElementById("grand-total").innerText = selectedSeatIds.length * 550;
};

// setting coupon data
function applyCoupon() {
    let total = selectedSeatIds.length * 550;
    let discount = 0;
    // 
    couponInputFieldValue = document.getElementById("coupon-input-field").value;
    // 
    if (couponInputFieldValue === "NEW15") {
        discount = total * 0.15;  // 15% discount
    }
    // 
    if (couponInputFieldValue === "Couple 20") {
        discount = total * 0.20;  // 20% discount
    }
    // 
    document.getElementById("grand-total").innerText = total - discount;
}