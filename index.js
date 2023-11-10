document.addEventListener('DOMContentLoaded', () => {
    const parties = [];
    function displayParties() {
        const partiesList = document.getElementById('parties');
        partiesList.innerHTML = '';

        parties.forEach((party, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${party.name}</strong> - 
                Date: ${party.date}, 
                Time: ${party.time}, 
                Location: ${party.location}, 
                Description: ${party.description}
                <button onclick="deleteParty(${index})">Delete</button>
            `;
            partiesList.appendChild(listItem);
        });
    }

    function addParty(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        parties.push({ name, date, time, location, description });
        displayParties();
        resetForm();
    }

    function deleteParty(index) {
        parties.splice(index, 1);
        displayParties();
    }

    function resetForm() {
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('location').value = '';
        document.getElementById('description').value = '';
    }

    const partyForm = document.getElementById('partyForm');
    partyForm.addEventListener('submit', addParty);

    window.deleteParty = deleteParty;
});