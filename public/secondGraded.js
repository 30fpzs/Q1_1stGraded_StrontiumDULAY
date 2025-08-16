function calculateTotal()
{
    const mealPrice = Number(document.getElementById("mealprice").value);
    const myTip = Number(document.getElementById("tip").value);
    const serviceCharge = Number(document.getElementById("service_charge").value);
    
    const total = (mealPrice + myTip) + (serviceCharge / 100 * mealPrice);  
    document.getElementById("totalOutput").innerHTML = "Total Amount: Php" + total.toFixed(2);
}   
logo.style.position = "absolute";
logo.style.top = "20px";
logo.style.right = "20px";
logo.style.width = "100px";