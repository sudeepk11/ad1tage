const searchDivs = document.querySelectorAll('.search-box-option')
const sectionimageWrapper = document.querySelector('.img-wrapper')


searchDivs.forEach(searchDiv => {
    searchDiv.setAttribute('tabindex', '0')

    searchDiv.addEventListener('click', (event) => {
        const dropdown = searchDiv.querySelector('[data-dropdown]')

        if (dropdown) {
            searchDivs.forEach(otherSearchDiv => {
                if (otherSearchDiv !== searchDiv) {
                    const otherDropdown = otherSearchDiv.querySelector('[data-dropdown]')
                    if (otherDropdown) {
                        sectionimageWrapper.classList.add('z-index')
                        otherDropdown.classList.remove('show')
                    }
                }
            })
            sectionimageWrapper.classList.toggle('z-index')
            dropdown.classList.toggle('show')

            // Stop event propagation to prevent document click handler from firing
            event.stopPropagation()
        }
    })

    const dropdown = searchDiv.querySelector('[data-dropdown]')
    if (dropdown) {
        dropdown.addEventListener('click', (event) => {
            // Stop event propagation to prevent document click handler from firing
            event.stopPropagation()
        })

        // const listItems = dropdown.querySelectorAll('li')
        // listItems.forEach(listItem => {
        //     listItem.addEventListener('click', () => {
        //         const spanElement = searchDiv.querySelector('span')
        //         spanElement.textContent = listItem.textContent
        //     })
        // })
    }
})




// Add click event listener to document to close dropdowns on outside click
document.addEventListener('click', () => {
    searchDivs.forEach(searchDiv => {
        const dropdown = searchDiv.querySelector('[data-dropdown]')
        if (dropdown) {
            sectionimageWrapper.classList.add('z-index')
            dropdown.classList.remove('show')
        }
    })
})


// Add click event listener to document to close dropdowns on outside click
document.addEventListener('click', () => {
    searchDivs.forEach(searchDiv => {
        const dropdown = searchDiv.querySelector('[data-dropdown]')
        if (dropdown) {
            sectionimageWrapper.classList.add('z-index')
            dropdown.classList.remove('show')
        }
    })
})



//Location Dropdown

const data = {
    'All': [],
    'City 1': ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5'],
    'City 2': ['Area 6', 'Area 7', 'Area 8', 'Area 9', 'Area 10'],
    'City 3': ['Area 11', 'Area 12', 'Area 13', 'Area 14', 'Area 15'],
    'City 4': ['Area 16', 'Area 17', 'Area 18', 'Area 19', 'Area 20'],
    'City 5': ['Area 21', 'Area 22', 'Area 23', 'Area 24', 'Area 25'],
}

const dropdown = document.querySelector('.dropdown-sb')

const cities = Object.keys(data);
for (let i = 0; i < cities.length;) {
    const column = document.createElement('div')
    column.className = 'column'

    // decide the number of cities per column
    let numCities = (i === 0) ? 3 : 2;

    for (let j = 0; j < numCities && i < cities.length; j++, i++) {
        const city = cities[i];

        const title = document.createElement('h4')
        title.innerText = city
        // Assign the "all-city" class if city is "All"
        if (city === 'All') {
            title.className = 'all-city';
        }
        column.appendChild(title)

        // Skip adding ul if city is "All"
        if (city !== 'All') {
            const ul = document.createElement('ul')
            data[city].forEach(area => {
                const li = document.createElement('li')
                li.innerText = area
                ul.appendChild(li)
            })
            column.appendChild(ul)
        }
    }

    dropdown.appendChild(column)
}





// First, select all the clickable dropdown options
let citiesOptions = document.querySelectorAll('.dropdown-sb h4');
let serviceOptions = document.querySelectorAll('.dropdown-sb li');
let termOptions = document.querySelectorAll('.dropdown-sp li');
let bedroomOptions = document.querySelectorAll('#bedrooms-dropdown li');

// Merge the arrays into one
let options = [...citiesOptions, ...serviceOptions, ...termOptions, ...bedroomOptions];

console.log(options);

// Then, add a click event listener to each option
options.forEach(option => {
    option.addEventListener('click', () => {
        // When an option is clicked, get its text content
        let selectedOption = option.textContent;

        // Then, find the span element within the parent search-box-option and replace its text content with the selected option
        let spanElement = option.closest('.search-box-option').querySelector('span');
        spanElement.textContent = selectedOption;
    });
});

let arrivalDate
let departureDate

function createCalendar(id) {
    // Calendar

    // Object to hold selected dates for each month/year
    let selectedDates = {};

    //Check leap year
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    }

    //getFebDays
    function getFebDays(year, month) {
        if (month === 1) { // Now February is 1
            return isLeapYear(year) ? 29 : 28;
        }
        else {
            return 31 - (month % 7 % 2); // This will return the correct number of days for any month
        }
    }

    let calendar = document.querySelector('#' + id + ' .calendar')

    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let monthPicker = document.querySelector('#month-picker-' + id)

    monthPicker.onclick = () => {
        monthList.classList.toggle('show-months')
    }

    let selectedDate; // Move the declaration of selectedDate out of generateCalendar

    //Generate the calendar
    function generateCalendar(month, year) {
        let calendarDays = document.querySelector('#' + id + ' .calendar-days')
        calendarDays.innerHTML = ''

        let calendarHeaderYear = document.querySelector('#year-' + id)

        let daysOfMonth = [31, getFebDays(year, month), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        let currentDate = new Date()

        const addDay = (date) => {
            let newDate = new Date(date)
            newDate.setDate(newDate.getDate() + 1)
            return newDate
        }

        let currentDatePlusOne = addDay(currentDate)

        monthPicker.innerText = month_names[month]
        calendarHeaderYear.innerText = year

        let firstDay = new Date(year, month, 1)

        // generate empty divs for the days of the week before the first day of the month
        for (let i = 0; i < firstDay.getDay(); i++) {
            let day = document.createElement('div')
            calendarDays.appendChild(day)
        }

        // generate divs for the days of the month
        for (let i = 1; i <= daysOfMonth[month]; i++) {
            let day = document.createElement('div');
            day.innerHTML = i;

            // Create a Date object for this day
            let thisDay = new Date(year, month, i);

            // If this day is today, add the 'current-date' class
            if (i === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
                day.classList.add('current-date');
            }

            // if (id === 'arrival') {
            //     if (thisDay <= currentDate || thisDay <= currentDatePlusOne) {
            //         day.classList.add('disabled-date');
            //     } else {
            //         //Code
            //     }
            // }

            // Disable selection for dates before and on the current date
            if (thisDay <= currentDate || thisDay <= currentDatePlusOne) {
                day.classList.add('disabled-date');
            } else {
                // Check if this day is in the departure calendar and is earlier than the arrival date
                if (id === 'departure' && arrivalDate && thisDay < arrivalDate) {
                    day.classList.add('disabled-date');
                } else {
                    // Check if this day is the currently selected date
                    if (selectedDate && thisDay.getDate() === selectedDate.getDate() && thisDay.getMonth() === selectedDate.getMonth() && thisDay.getFullYear() === selectedDate.getFullYear()) {
                        day.classList.add('selected-date');
                    }

                    // Check if this day is the arrival date
                    if (id === 'departure' && arrivalDate && thisDay.getTime() === arrivalDate.getTime()) {
                        day.classList.add('disabled-date');
                    }

                    let departureDateElement = document.querySelector('#departure')

                    // Initially, add the disabled class to the departure date
                    if (!arrivalDate) {
                        departureDateElement.classList.add('disabled-departure');
                    }

                    // Add event listener for click
                    day.addEventListener('click', function () {
                        // If this day is before the arrival date and this is the departure calendar, return immediately
                        // Check if the selected arrival date is later than the date in the departure calendar
                        if (id === 'departure' && arrivalDate && thisDay.getTime() === arrivalDate.getTime()) {
                            return; // If it is, do nothing (i.e., don't allow this date to be selected)
                        }

                        document.querySelector(`#${id} .search-box-option-wrapper span`).textContent = `${i} ${month_names[month]} ${year}`;



                        // Store this day as the selected date
                        selectedDate = thisDay;

                        // If this is the arrival calendar, update the global arrivalDate
                        if (id === 'arrival') {
                            arrivalDate = selectedDate;
                            // When a new arrival date is selected, re-generate the departure calendar to disable earlier dates
                            let currentMonth = new Date().getMonth();
                            let currentYear = new Date().getFullYear();
                            createCalendar('departure', currentMonth, currentYear);

                            // Clear the placeholder text in the departure date
                            document.querySelector('#departure .search-box-option-wrapper span').textContent = 'Departure';

                            // Remove the disabled class from the departure date
                            if (arrivalDate) {
                                departureDateElement.classList.remove('disabled-departure');
                            }
                        }

                        if (id === 'departure') { departureDate = selectedDate }
                        // If this is the departure calendar, check if thisDay is before arrivalDate
                        if (id === 'departure' && thisDay <= arrivalDate) {
                            return;
                        }

                        function isDepartureBeforeArrival(departureDate, arrivalDate) {
                            if (!departureDate || !arrivalDate) return false
                            if (id === 'arrival') return false
                            else if (departureDate < arrivalDate) {
                                return true
                            }
                        }



                        // Reset the class for all days
                        let allDays = calendarDays.children;
                        for (let j = 0; j < allDays.length; j++) {
                            allDays[j].classList.remove('selected-date');
                        }

                        // Add the selected-date class to the clicked day
                        day.classList.add('selected-date');
                    });
                }

            }
            calendarDays.appendChild(day);
        }



    }

    let monthList = calendar.querySelector('.month-list')

    month_names.forEach((e, index) => {
        let month = document.createElement('div')
        month.innerHTML = `<div>${e}</div>`
        month.onclick = () => {
            monthList.classList.remove('show-months')
            generateCalendar(index, currentYear)
            currentMonth = index;
        }
        monthList.appendChild(month)
    })

    let currentMonth = new Date().getMonth()
    let currentYear = new Date().getFullYear()

    generateCalendar(currentMonth, currentYear)

    document.querySelector('#next-month-' + id).onclick = () => {
        let nextMonth = (currentMonth + 1) % 12;
        let nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        generateCalendar(nextMonth, nextYear);
        currentMonth = nextMonth;
        currentYear = nextYear;
    }

    document.querySelector('#prev-month-' + id).onclick = () => {
        let prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        let prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        generateCalendar(prevMonth, prevYear);
        currentMonth = prevMonth;
        currentYear = prevYear;
    }

}

window.onload = function () {
    createCalendar('arrival')
    // createCalendar('departure')
}

