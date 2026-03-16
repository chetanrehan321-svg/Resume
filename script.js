// Resume Builder JavaScript

// Function to create a resume
function createResume(name, email, phone, experience, education) {
    return {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        education: education
    };
}

// Example usage:
const myResume = createResume(
    'John Doe',
    'john.doe@example.com',
    '123-456-7890',
    ['Company A - Developer', 'Company B - Senior Developer'],
    ['Bachelor of Science in Computer Science', 'Master of Science in Software Engineering']
);

console.log(myResume);