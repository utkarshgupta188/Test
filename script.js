
const subjects = {
    notes: {
        "Mathematics": [
            { title: "Algebra Notes", link: "ECLS1stexp_1.pdf" },
            { title: "Calculus Notes", link: "path/to/calculus_notes.pdf" }
        ],
        "Physics": [
            { title: "Mechanics Notes", link: "path/to/mechanics_notes.pdf" },
            { title: "Thermodynamics Notes", link: "path/to/thermodynamics_notes.pdf" }
        ],
        "Chemistry": [
            { title: "Organic Chemistry Notes", link: "path/to/organic_chemistry_notes.pdf" },
            { title: "Inorganic Chemistry Notes", link: "path/to/inorganic_chemistry_notes.pdf" }
        ]
    },
    practicals: {
        "Biology": [
            { title: "Cell Biology Practical", link: "path/to/cell_biology_practical.pdf" },
            { title: "Genetics Practical", link: "path/to/genetics_practical.pdf" }
        ],
        "Physics": [
            { title: "Optics Practical", link: "path/to/optics_practical.pdf" },
            { title: "Electricity Practical", link: "path/to/electricity_practical.pdf" }
        ],
        "Chemistry": [
            { title: "Titration Practical", link: "path/to/titration_practical.pdf" },
            { title: "Chromatography Practical", link: "path/to/chromatography_practical.pdf" }
        ]
    },
    assignments: {
        "Mathematics": [
            { title: "Assignment 1", link: "path/to/assignment1.pdf" },
            { title: "Assignment 2", link: "path/to/assignment2.pdf" }
        ],
        "Physics": [
            { title: "Assignment 1", link: "path/to/assignment1_physics.pdf" },
            { title: "Assignment 2", link: "path/to/assignment2_physics.pdf" }
        ],
        "Chemistry": [
            { title: "Assignment 1", link: "path/to/assignment1_chemistry.pdf" },
            { title: "Assignment 2", link: "path/to/assignment2_chemistry.pdf" }
        ]
    }
};

function showSection(section) {
    const subjectList = document.getElementById('subject-list');
    subjectList.innerHTML = ''; // Clear previous subjects
    const subjectSelection = document.getElementById('subject-selection');
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfFrame = document.getElementById('pdf-frame');

    // Show subject selection
    subjectSelection.classList.remove('hidden');
    pdfViewer.classList.add('hidden');

    // Populate subjects based on the selected section
    const subjectsInSection = subjects[section];
    for (const subject in subjectsInSection) {
        const li = document.createElement('li');
        li.innerText = subject;
        li.onclick = () => showPDFs(section, subject);
        subjectList.appendChild(li);
    }
}

function showPDFs(section, subject) {
    const pdfList = subjects[section][subject];
    const subjectSelection = document.getElementById('subject-selection');
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfFrame = document.getElementById('pdf-frame');
    const subjectList = document.getElementById('subject-list');

    // Hide subject selection and show PDF viewer
    subjectSelection.classList.add('hidden');
    pdfViewer.classList.remove('hidden');

    // Clear previous items in the subject list
    subjectList.innerHTML = '';

    // Populate the PDF list for the selected subject
    pdfList.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.title;
        li.onclick = () => {
            pdfFrame.src = item.link; // Load the selected PDF
        };
        subjectList.appendChild(li);
    });

    // Load the first PDF by default if available
    if (pdfList.length > 0) {
        pdfFrame.src = pdfList[0].link; // Load the first PDF
    }
}
