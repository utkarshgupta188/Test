const notes = [
    { title: 'Lecture Note 1', link: 'path/to/note1.pdf' },
    { title: 'Lecture Note 2', link: 'path/to/note2.pdf' },
];

const practicals = [
    { title: 'Practical 1', link: 'path/to/practical1.pdf' },
    { title: 'Practical 2', link: 'path/to/practical2.pdf' },
];

const assignments = [
    { title: 'Assignment 1', link: 'path/to/assignment1.pdf' },
    { title: 'Assignment 2', link: 'path/to/assignment2.pdf' },
];

function showSection(section) {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = ''; // Clear previous items

    let items;
    switch (section) {
        case 'notes':
            items = notes;
            break;
        case 'practicals':
            items = practicals;
            break;
        case 'assignments':
            items = assignments;
            break;
        default:
            items = [];
    }

    if (items.length === 0) {
        itemList.innerHTML = '<li>No items available.</li>';
    } else {
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
            itemList.appendChild(li);
        });
    }

    document.querySelector('h2').innerText = section.charAt(0).toUpperCase() + section.slice(1);
}
