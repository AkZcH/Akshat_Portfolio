// Experience data (for education section)
const experiences = {
    teachyst: {
        position: "CS Major Sophomore <span class='highlight'>@KIIT University</span>",
        date: "August 2023 - Present",
        location: "Bhubaneshwar, Odisha, India",
        responsibilities: [
            "✔ Conducted hackathons on AI/ML",
            "✔ Member of various Tech Clubs"
        ]
    },
    dimension: {
        position: "Software Engineer <span class='highlight'>@Dimension</span>",
        date: "Jan 2023 - Aug 2024",
        location: "USA",
        responsibilities: [
            "✔ Developed AI-driven recommendation engine",
            "✔ Scaled backend services to handle 1M+ users"
        ]
    },
    emitrr: {
        position: "Product Manager <span class='highlight'>@Emitrr</span>",
        date: "Jul 2021 - Dec 2022",
        location: "Canada",
        responsibilities: [
            "✔ Led the development of a customer support automation tool",
            "✔ Coordinated between engineering and marketing teams"
        ]
    },
    trryst: {
        position: "UI/UX Designer <span class='highlight'>@Trryst</span>",
        date: "Mar 2020 - Jun 2021",
        location: "Germany",
        responsibilities: [
            "✔ Designed user-friendly interfaces for mobile and web",
            "✔ Conducted user research to improve engagement"
        ]
    }
};

// Work Experience data
const workExperiences = {
    google: {
        position: "Software Engineer Intern <span class='highlight'>@Google</span>",
        date: "May 2023 - Aug 2023",
        location: "Mountain View, CA",
        responsibilities: [
            "✔ Developed and optimized backend services for Google Cloud Platform",
            "✔ Implemented machine learning models for data analysis",
            "✔ Collaborated with cross-functional teams on key projects"
        ]
    },
    microsoft: {
        position: "Frontend Developer <span class='highlight'>@Microsoft</span>",
        date: "Jan 2023 - Apr 2023",
        location: "Redmond, WA",
        responsibilities: [
            "✔ Built responsive web applications using React and TypeScript",
            "✔ Improved application performance by 40%",
            "✔ Implemented new UI/UX designs for Microsoft Teams"
        ]
    },
    amazon: {
        position: "Software Development Engineer <span class='highlight'>@Amazon</span>",
        date: "Jun 2022 - Dec 2022",
        location: "Seattle, WA",
        responsibilities: [
            "✔ Developed microservices for AWS infrastructure",
            "✔ Optimized database queries reducing latency by 50%",
            "✔ Created automated testing frameworks"
        ]
    },
    meta: {
        position: "Junior Developer <span class='highlight'>@Meta</span>",
        date: "Jan 2022 - May 2022",
        location: "Menlo Park, CA",
        responsibilities: [
            "✔ Worked on Facebook's core infrastructure",
            "✔ Developed new features for Instagram Stories",
            "✔ Implemented real-time data processing systems"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Education Section
    const buttons = document.querySelectorAll(".company");
    const positionEl = document.getElementById("position");
    const dateEl = document.getElementById("date");
    const locationEl = document.getElementById("location");
    const responsibilitiesEl = document.getElementById("responsibilities");

    // Function to update education content
    function updateExperience(companyKey) {
        const experience = experiences[companyKey];
        console.log('Updating experience for:', companyKey, experience);

        positionEl.innerHTML = experience.position;
        dateEl.textContent = experience.date;
        locationEl.textContent = experience.location;

        responsibilitiesEl.innerHTML = "";
        experience.responsibilities.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            responsibilitiesEl.appendChild(li);
        });

        // Update active button
        buttons.forEach(btn => btn.classList.remove("active"));
        const activeButton = document.querySelector(`[data-company="${companyKey}"]`);
        if (activeButton) activeButton.classList.add("active");
    }

    // Add event listeners to all education buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const companyKey = button.getAttribute("data-company");
            updateExperience(companyKey);
        });
    });

    // Set initial education experience
    updateExperience('teachyst');

    // Work Experience Section
    const workButtons = document.querySelectorAll(".work-company");
    const workPositionEl = document.getElementById("work-position");
    const workDateEl = document.getElementById("work-date");
    const workLocationEl = document.getElementById("work-location");
    const workResponsibilitiesEl = document.getElementById("work-responsibilities");

    // Function to update work experience content
    function updateWorkExperience(companyKey) {
        const experience = workExperiences[companyKey];
        console.log('Updating work experience for:', companyKey, experience);

        workPositionEl.innerHTML = experience.position;
        workDateEl.textContent = experience.date;
        workLocationEl.textContent = experience.location;

        workResponsibilitiesEl.innerHTML = "";
        experience.responsibilities.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            workResponsibilitiesEl.appendChild(li);
        });

        // Update active button
        workButtons.forEach(btn => btn.classList.remove("active"));
        const activeButton = document.querySelector(`[data-work-company="${companyKey}"]`);
        if (activeButton) activeButton.classList.add("active");
    }

    // Add event listeners to all work experience buttons
    workButtons.forEach(button => {
        button.addEventListener("click", () => {
            const companyKey = button.getAttribute("data-work-company");
            updateWorkExperience(companyKey);
        });
    });

    // Set initial work experience
    updateWorkExperience('google');
});

// Add fade effect for education section
const companies = document.querySelectorAll('.company:not(.work-company)');
const experienceDetails = document.querySelector('.experience-details');

companies.forEach(button => {
    button.addEventListener('click', () => {
        companies.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        experienceDetails.classList.add('fade');
        
        setTimeout(() => {
            updateExperienceContent(button.dataset.company);
            experienceDetails.classList.remove('fade');
        }, 300);
    });
});

function updateExperienceContent(company) {
    const content = experiences[company];
    experienceDetails.innerHTML = `
        <h3>${content.position}</h3>
        <p class="date">${content.date}</p>
        <p class="location">${content.location}</p>
        <ul>
            ${content.responsibilities.map(task => `<li>${task}</li>`).join('')}
        </ul>
    `;
}

// Add fade effect for work experience section
const workCompanies = document.querySelectorAll('.work-company');
const workExperienceDetails = document.querySelector('.work-experience-details');

workCompanies.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        workCompanies.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Add fade out class
        workExperienceDetails.classList.add('fade');
        
        // Wait for fade out, then update content and fade in
        setTimeout(() => {
            // Update content based on data-work-company attribute
            updateWorkExperienceContent(button.dataset.workCompany);
            
            // Remove fade class to fade in new content
            workExperienceDetails.classList.remove('fade');
        }, 300);
    });
});

function updateWorkExperienceContent(company) {
    const content = workExperiences[company];
    workExperienceDetails.innerHTML = `
        <h3>${content.position}</h3>
        <p class="date">${content.date}</p>
        <p class="location">${content.location}</p>
        <ul>
            ${content.responsibilities.map(task => `<li>${task}</li>`).join('')}
        </ul>
    `;
}