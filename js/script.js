const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "" || password === "") {

            alert("Please fill all fields");

        }
        else {

            alert("Login Successful");

        }

    });

}




const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill all fields");

        }
        else if (password !== confirmPassword) {

            alert("Passwords do not match");

        }
        else {

            alert("Registration Successful");

        }

    });

}


const rideContainer = document.getElementById("rideContainer");

if (rideContainer) {

    const rides = [

        {
            driver: "Rahul",
            source: "Hyderabad",
            destination: "Vijayawada",
            time: "9:00 AM",
            seats: 3
        },

        {
            driver: "Priya",
            source: "Hyderabad",
            destination: "Warangal",
            time: "10:30 AM",
            seats: 2
        },

        {
            driver: "Kiran",
            source: "Hyderabad",
            destination: "Guntur",
            time: "1:00 PM",
            seats: 4
        }

    ];

    rides.forEach(function(ride){

        rideContainer.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card shadow">

                <div class="card-body text-center">

                    <h4>${ride.driver}</h4>

                    <p>
                        ${ride.source} ➜ ${ride.destination}
                    </p>

                    <p>
                        🕒 ${ride.time}
                    </p>

                    <p>
                        💺 Seats Available: ${ride.seats}
                    </p>

                    <button class="btn btn-success">
                        Book Ride
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}



const postRideBtn = document.getElementById("postRideBtn");

if(postRideBtn){

postRideBtn.addEventListener("click", function(){

    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let seats = document.getElementById("seats").value;
    let vehicleName = document.getElementById("vehicleName").value;
    let vehicleNumber = document.getElementById("vehicleNumber").value;
    let fare = document.getElementById("fare").value;
    let contact = document.getElementById("contact").value;
    let gender = document.getElementById("gender").value;
    let vehicleType = document.getElementById("vehicleType").value;
    let notes = document.getElementById("notes").value;

    if(source === "" || destination === "" ||
       date === "" || time === "" || seats === "")
    {
        alert("Please fill all fields");
    }
    else
    {
        alert("Ride Posted Successfully");
    }

});

}



const bookingTable = document.getElementById("bookingTable");

if (bookingTable) {

    const bookings = [

        {
            id: 101,
            driver: "Rahul",
            source: "Hyderabad",
            destination: "Vijayawada",
            date: "23-06-2026",
            status: "Confirmed"
        },

        {
            id: 102,
            driver: "Priya",
            source: "Hyderabad",
            destination: "Warangal",
            date: "24-06-2026",
            status: "Pending"
        },

        {
            id: 103,
            driver: "Kiran",
            source: "Hyderabad",
            destination: "Guntur",
            date: "25-06-2026",
            status: "Confirmed"
        }

    ];

    bookings.forEach(function(booking){

        bookingTable.innerHTML += `

        <tr>

            <td>${booking.id}</td>

            <td>${booking.driver}</td>

            <td>${booking.source}</td>

            <td>${booking.destination}</td>

            <td>${booking.date}</td>

            <td>${booking.status}</td>

        </tr>

        `;

    });

}



const profileName = document.getElementById("profileName");

if(profileName){

    const user = {

        name: "Madhumitha",
        email: "madhumitha@gmail.com",
        phone: "9876543210"

    };

    document.getElementById("profileName").value = user.name;

    document.getElementById("profileEmail").value = user.email;

    document.getElementById("profilePhone").value = user.phone;

}



const recommendationContainer =
document.getElementById("recommendationContainer");

if(recommendationContainer){

    const recommendations = [

        {
            driver:"Rahul",
            source:"Hyderabad",
            destination:"Vijayawada",
            time:"9:00 AM",
            seats:3,
            rating:4.8
        },

        {
            driver:"Priya",
            source:"Hyderabad",
            destination:"Warangal",
            time:"10:30 AM",
            seats:2,
            rating:4.9
        },

        {
            driver:"Kiran",
            source:"Hyderabad",
            destination:"Guntur",
            time:"1:00 PM",
            seats:4,
            rating:4.7
        }

    ];

    recommendations.forEach(function(ride){

        recommendationContainer.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card shadow">

                <div class="card-body text-center">

                    <h4>${ride.driver}</h4>

                    <p>
                        ${ride.source} ➜ ${ride.destination}
                    </p>

                    <p>
                        🕒 ${ride.time}
                    </p>

                    <p>
                        💺 Seats Available: ${ride.seats}
                    </p>

                    <p>
                        ⭐ Rating: ${ride.rating}
                    </p>

                    <button class="btn btn-success">
                        Book Now
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// AI Chatbot Page

const sendBtn = document.getElementById("sendBtn");

if(sendBtn){

    sendBtn.addEventListener("click", function(){

        let userInput = document.getElementById("userInput").value;

        let chatBox = document.getElementById("chatBox");

        if(userInput !== ""){

            // User message
            chatBox.innerHTML += `
            <div class="user">
                ${userInput}
            </div>
            `;

            // Bot reply
            chatBox.innerHTML += `
            <div class="bot">
                Thank you for your query. We will help you find suitable rides.
            </div>
            `;

            document.getElementById("userInput").value = "";

            chatBox.scrollTop = chatBox.scrollHeight;

        }

    });

}