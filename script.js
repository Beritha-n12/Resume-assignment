// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Add a navigation highlight on scroll
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('a.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

const expandableHeadings = document.querySelectorAll('#education .container .expandable');
  
expandableHeadings.forEach((heading) => {
  heading.addEventListener('click', () => {
    const details = heading.nextElementElementSibling; // Assumes details are the following sibling
    details.classList.toggle('expanded');
  });
});

// Get all experience items
const experienceItems = document.querySelectorAll('.experience-item');

// Add click event listeners to each title
experienceItems.forEach(item => {
    const title = item.querySelector('h3');
    const details = item.querySelectorAll('p:not(.sub-info), ul');

    title.addEventListener('click', () => {
        details.forEach(detail => {
            detail.classList.toggle('hidden');
        });
    });
});
// Get all list items and links in the contact section
const listItems = document.querySelectorAll('li');
const links = document.querySelectorAll('li a');

// Add a click event listener to list items
listItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.textContent.includes('Email')) {
            copyToClipboard('nberitha78@gmail.com');
            showCopiedMessage('Email copied to clipboard!');
        }
        if (item.textContent.includes('Tel')) {
            copyToClipboard('+250784720984');
            showCopiedMessage('Phone number copied to clipboard!');
        }
    });
});

// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Function to show a message when something is copied
function showCopiedMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'copy-message';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);

    setTimeout(() => {
        document.body.removeChild(messageElement);
    }, 3000);
}