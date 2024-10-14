document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});

// Smooth Scroll to About Section
function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}

// Scroll Animations
const sections = document.querySelectorAll('.section-heading');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideIn');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

function openModal(simulation) {
    const modal = document.getElementById("modal");
    const modalDetails = document.getElementById("modal-details");

    // Define details for each simulation
    const simulationDetails = {
        jpmorgan: `
            <h3>JPMorgan Chase & Co. Excel Skills Job Simulation</h3>
            <p>September 2024</p>
            <ul>
                <li>Developed proficiency in Excel functionalities and data analysis techniques, including data cleansing, manipulation, and conditional formatting.</li>
                <li>Automated tasks using Visual Basic for Applications (VBA) and created two functional macros with buttons using sales data.</li>
                <li>Gained expertise in data visualization and storytelling using Excel and PowerPoint.</li>
            </ul>
        `,
        bcg: `
            <h3>BCG Data Science Job Simulation</h3>
            <p>September 2024</p>
            <ul>
                <li>Conducted customer churn analysis using Python, employing Pandas and NumPy for data analysis and random forest models for prediction.</li>
                <li>Achieved 85% accuracy in predicting customer churn and delivered an executive summary outlining actionable insights.</li>
            </ul>
        `,
        accenture: `
            <h3>Accenture North America Data Analytics & Visualization Job Simulation</h3>
            <p>August 2024</p>
            <ul>
                <li>Analyzed social media datasets for a hypothetical client, utilizing data modeling and visualization techniques to provide strategic insights.</li>
                <li>Cleaned, modeled, and analyzed 7 datasets, preparing a presentation for stakeholders.</li>
            </ul>
        `
    };

    modalDetails.innerHTML = simulationDetails[simulation];
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
