// Sample data for doctors
const doctors = {
    doctor1: {
        name: "Tim Bradford",
        specialty: "Heart Disease",
        age: "58",
        appointments: "Available: Tuesday , Saturday",
        schedule: "Tuesday: 10:00 AM - 2:00 PM	 - Saturday: 9:00 AM - 1:00 PM", 
        image: "./assists/css-image/image/doctor-1.jpg"
    },
    doctor2: {
        name: "Sara Bishob",
        specialty: "Heart Disease",
        age: "38",
        appointments: "Available: Wednesday, Friday",
        schedule: "Wednesday: 8:00 AM - 12:00 PM - Friday: 1:00 PM - 5:00 PM", 
        image: "./assists/css-image/image/doctor-2.jpg"
    },
    doctor3: {
        name: "John Nolan",
        specialty: "Heart Disease",
        age: "28",
        appointments: "Available: Monday, Thursday",
        schedule: "Monday: 9:00 AM - 1:00 PM, Thursday: 2:00 PM - 6:00 PM", 
        image: "./assists/css-image/image/doctor-3.jpg"
    },
    doctor4: {
        name: "Josh Robertson",
        specialty: "Heart Disease",
        age: "33",
        appointments: "Available: Monday, Sunday",
        schedule: "Monday: 1:00 PM - 5:00 PM- Sunday: 1:00 PM - 5:00 PM", 
        image: "./assists/css-image/image/doctor-4.jpg"
    },
    doctor5: {
        name: "Mickle Stamp",
        specialty: "Heart Disease",
        age: "35",
        appointments: "Available: Tuesday, Saturday",
        schedule: "Tuesday: 9:00 AM - 12:00 PM	, Saturday: 10:00 AM - 2:00 PM", 
        image: "./assists/css-image/image/doctor-5.jpg"
    },
    doctor6: {
        name: "Emma Maguire",
        specialty: "Heart Disease",
        age: "25",
        appointments: "Available: Thursday, Friday",
        schedule: "Thursday: 8:00 AM - 12:00 PM	, Friday: 10:00 AM - 2:00 PM", 
        image: "./assists/css-image/image/doctor-6.jpg"
    },
    doctor7: {
        name: "Hana Harvey",
        specialty: "Heart Disease",
        age: "27",
        appointments: "Available: Wednesday, Saturday",
        schedule: "Wednesday: 10:00 AM - 2:00 PM, Saturday: 9:00 AM - 1:00 PM", 
        image: "./assists/css-image/image/doctor-7.jpg"
    },
    doctor8: {
        name: "Charlette Stones",
        specialty: "Heart Disease",
        age: "56",
        appointments: "Available: Thursday, Sunday",
        schedule: "Thursday: 1:00 PM - 5:00 PM, Sunday: 9:00 AM - 12:00 PM", 
        image: "./assists/css-image/image/doctor-8.jpg"
    },
};

function getQueryParams() {
    const params = {};
    const parser = new URLSearchParams(window.location.search);
    for (const [key, value] of parser.entries()) {
        params[key] = value;
    }
    return params;
}

function updateDoctorDetails(doctorId) {
    const doctor = doctors[doctorId];
    if (doctor) {
        document.getElementById('doctorImage').src = doctor.image;
        document.getElementById('doctorName').textContent = doctor.name;
        document.getElementById('doctorSpecialty').textContent = doctor.specialty;
        document.getElementById('doctorAge').textContent = `Age: ${doctor.age}`;
        document.getElementById('doctorAppointments').textContent = doctor.appointments;
        document.getElementById('doctorSchedule').textContent = `Schedule: ${doctor.schedule}`; // Update schedule
    } else {
        // Handle case where doctor is not found
        document.getElementById('doctorName').textContent = "Doctor not found.";
    }
}

const params = getQueryParams();
const doctorId = params.id;
updateDoctorDetails(doctorId);


        // Check if the user is logged in
        const loginButton = document.getElementById('loginButton');
        const logout = document.getElementById('logout');
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


        if (isLoggedIn) {
            // loginButton.textContent = 'Log out';
            logout.style.display = 'block';
            loginButton.style.display = 'none'            
            loginButton.href = '#';
            loginButton.addEventListener('click', () => {
                // Clear login status and reload the page
                localStorage.removeItem('isLoggedIn');
                window.location.reload();
            });
            loginButton.addEventListener('click', () => {
                // Clear login status and reload the page
                localStorage.removeItem('isLoggedIn');
                window.location.reload();
            });
        } else {
            loginButton.textContent = 'Login';
            loginButton.href = 'login.html'; 
        }


        document.getElementById('hamburger').addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        });
        
        const closeButton = document.querySelector('.fa-solid.fa-xmark');
        // closeButton.style.display ='none';
        
        if (closeButton) {
            closeButton.addEventListener('click', function(event) {
                event.preventDefault();
                const nav = document.querySelector('nav');
                nav.classList.remove('active');
            });
        }
        