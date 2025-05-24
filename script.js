 // Modal functions
        function openModal(modalId) {
            document.getElementById(modalId).style.display = "block";
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }
        
        // Close modal when clicking outside of it
        window.onclick = function(event) {
            if (event.target.className === "modal") {
                event.target.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
        
        // Rent Now button functionality
        document.querySelectorAll('.rent-now-btn').forEach(button => {
            button.addEventListener('click', function() {
                alert('Thank you for choosing Chaudhary Car Rental! Please call us to confirm booking.');
                const modalId = this.closest('.modal').id;
                closeModal(modalId);
            });
        });