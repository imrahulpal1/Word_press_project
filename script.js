document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
  
    const message = `Thank you, ${name}! Your room is booked from ${checkin} to ${checkout}.`;
    document.getElementById("confirmationMessage").textContent = message;
  
    this.reset();
  });
  