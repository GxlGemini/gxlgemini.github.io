        // Set target date and time
        const targetDate = new Date("2025-11-18T23:59:59").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            if (timeRemaining > 0) {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.getElementById("days").textContent = String(days).padStart(2, "0");
                document.getElementById("hours").textContent = String(hours).padStart(2, "0");
                document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
                document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
            } else {
                document.querySelector(".timer").innerHTML = "Countdown Completed!";
            }
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);

        // Initialize the countdown immediately
        updateCountdown();