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




document.addEventListener('DOMContentLoaded', function () {
    const doctorCards = document.querySelectorAll('.doctor-card');

    doctorCards.forEach(card => {
        card.addEventListener('click', function () {
            const doctorId = this.getAttribute('data-id');
            location.assign(`doctor-details.html?id=${doctorId}`);
        });
    });
});




function searchSite() {
    const resultContainer = document.getElementById('searchResult');
    
    const sections = [
        { title: 'Home', sectionId: 'homeSection' },
        { title: 'Health Library', sectionId: 'librarySection' },
        { title: 'Medical Professionals', sectionId: 'professionalsSection' },
        { title: 'Donation', sectionId: 'donationSection' }
    ];

    let resultContent = '';

    sections.forEach(section => {
        resultContent += `<a href="#${section.sectionId}">${section.title}</a><br>`;
    });

    // Display the links in the result container
    resultContainer.innerHTML = resultContent;
}










   document.addEventListener('DOMContentLoaded', () => {
    const doctorCards = document.querySelectorAll('.doctor-card');
    const contactButton = document.querySelector('.contact-button');

    doctorCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const doctorName = card.querySelector('.doctor-name').textContent;
            const doctorSpecialty = card.querySelector('.doctor-specialty').textContent;
            window.location.href = `doctor-details.html?name=${encodeURIComponent(doctorName)}&specialty=${encodeURIComponent(doctorSpecialty)}`;
        });
    });

    contactButton.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});



const blogs = [
    {
        id: "1",
        title: "Understanding Chronic Diseases.",
        date: "18 Sep 2024",
        content: "Chronic diseases, such as diabetes, heart disease, hypertension, and arthritis, are long-term conditions that often require lifelong management. These diseases are prevalent and can have a significant impact on individuals' quality of life. Understanding these conditions involves learning about their causes, including genetic factors, lifestyle choices, and environmental influences. Prevention strategies are crucial, and they include maintaining a balanced diet, regular physical activity, and avoiding harmful habits like smoking. Early detection is vital as it allows for better management and improves outcomes. This article also highlights the importance of regular medical check-ups, medication adherence, and patient education in the effective management of chronic diseases, emphasizing that while they may not be curable, they can be managed with the right approach."
    },
    {
        id: "2",
        title: "The Role of Vaccinations in Preventing Infectious Diseases",
        date: "20 Oct 2024",
        content: "Vaccinations play a critical role in preventing infectious diseases such as influenza, hepatitis, HPV, and more. Vaccines work by stimulating the immune system to recognize and fight pathogens, thus providing immunity without causing the disease itself. They are one of the most effective public health tools available, significantly reducing the spread of infectious diseases and preventing complications and fatalities. This article discusses the science behind vaccines, their safety, and the rigorous testing they undergo before approval. It also emphasizes the importance of maintaining vaccination schedules, not only for individual protection but also for achieving community immunity (herd immunity) that protects vulnerable populations like infants, the elderly, and those with compromised immune systems."
    },
    {
        id: "3",
        title: "The Evolution of Healthcare in the 21st Century",
        date: "01 Nov 2024",
        content: "Healthcare has seen remarkable transformations in the 21st century, driven by technological advancements and innovative approaches to patient care. From telemedicine and wearable health devices to AI-driven diagnostics, the industry has embraced digital solutions to improve patient outcomes. This article explores how technology has transformed healthcare delivery, enabling more personalized and precise treatment options. It also discusses the importance of healthcare providers staying updated with these technologies and the role of patient education in promoting self-care and proactive health management. The integration of electronic health records (EHRs) and data-driven decision-making is highlighted as essential for enhancing healthcare efficiency and quality, improving patient safety, and reducing medical errors."
    },
    {
        id: "4",
        title: "The Impact of Psychological Factors on Health",
        date: "25 Oct 2024",
        content: "Psychological factors such as stress, anxiety, and depression can significantly impact physical health, contributing to various conditions like high blood pressure, heart disease, and a weakened immune system. This article explores how these mental health issues affect the body and the importance of addressing them for overall well-being. It highlights the role of mindfulness, meditation, and self-care practices in managing stress and improving mental health. The importance of professional intervention, such as therapy or counseling, is also discussed for individuals experiencing chronic or severe psychological distress. The article encourages the integration of mental health care into regular healthcare routines to ensure a holistic approach to health and well-being."
    },
];


function showBlogDetail(blogId) {
    const blog = blogs.find(b => b.id === blogId);
    document.getElementById('blogTitle').textContent = blog.title;
    document.getElementById('blogDate').textContent = blog.date;
    document.getElementById('blogContent').textContent = blog.content;
    document.getElementById('blogDetailSection').style.display = 'block';
}

function hideBlogDetail() {
    document.getElementById('blogDetailSection').style.display = 'none';
}











        // Wait until the DOM content is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Select the "View More" button and the hidden testimonial cards
            const viewMoreButton = document.querySelector('.testimonial-button-veiw');
            const additionalCards = document.querySelectorAll('.testimonial-card-sec');

            // Initialize the state to keep track if the additional cards are displayed
            let isExpanded = false;

            // Add a click event listener to the button
            viewMoreButton.addEventListener('click', () => {
                // Toggle the visibility of additional cards
                additionalCards.forEach(card => {
                    if (isExpanded) {
                        card.style.display = 'none'; // Hide the cards
                    } else {
                        card.style.display = 'block'; // Show the cards
                    }
                });

                // Update the button text based on whether cards are visible
                viewMoreButton.textContent = isExpanded ? 'View More' : 'View Less';

                // Toggle the state
                isExpanded = !isExpanded;
            });
        });