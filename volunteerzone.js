        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date();
        let currentMonth = date.getMonth();
        let currentYear = date.getFullYear();

        function renderCalendar() {
            const firstDay = new Date(currentYear, currentMonth, 1);
            const lastDay = new Date(currentYear, currentMonth + 1, 0);
            const totalDays = lastDay.getDate();
            const startDay = firstDay.getDay();
            const monthYear = document.getElementById("monthYear");
            const daysContainer = document.getElementById("days");

            monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
            daysContainer.innerHTML = "";

            // Blank spaces before the first day of the month
            for (let i = 0; i < startDay; i++) {
                const emptyDiv = document.createElement("div");
                daysContainer.appendChild(emptyDiv);
            }

            // Add days of the month
            for (let i = 1; i <= totalDays; i++) {
                const dayDiv = document.createElement("div");
                dayDiv.textContent = i;
                if (i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear()) {
                    dayDiv.classList.add("today");
                }
                daysContainer.appendChild(dayDiv);
            }
        }

        document.getElementById("prevMonth").addEventListener("click", () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });

        document.getElementById("nextMonth").addEventListener("click", () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });

        renderCalendar();
