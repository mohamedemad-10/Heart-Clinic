        // Sample valid IDs and emails
        const validCredentials = [
            { id: '123', email: 'user1@example.com' },
            { id: '456', email: 'user2@example.com' },
            { id: '789', email: 'user3@example.com' }
        ];

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
        
            const userId = document.getElementById('id').value;
            const userEmail = document.getElementById('email').value;
        
            // Check if the credentials match any valid pair
            const isValid = validCredentials.some(cred => cred.id === userId && cred.email === userEmail);
        
            const messageElement = document.getElementById('message');
            if (isValid) {
                messageElement.textContent = 'Login successful!';
                messageElement.style.color = 'green';
        
                // Save login status in localStorage
                localStorage.setItem('isLoggedIn', 'true');
        
                // Redirect to index.html after successful login
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000); // 1 second delay before redirect
            } else {
                messageElement.textContent = 'Invalid ID or email. Please try again.';
                messageElement.style.color = 'red';
            }
        });
        

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
        