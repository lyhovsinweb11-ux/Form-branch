/* ====================================
   Sign In Form - JavaScript Functionality
   ==================================== */

document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.getElementById('signInForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    /* ---- Password Visibility Toggle ---- */
    togglePasswordBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });

    /* ---- Form Validation ---- */
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    /* ---- Real-time Email Validation ---- */
    emailInput.addEventListener('blur', function () {
        if (this.value.trim() === '') {
            emailError.textContent = 'Email is required';
        } else if (!validateEmail(this.value)) {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });

    emailInput.addEventListener('input', function () {
        if (this.value.trim() !== '' && validateEmail(this.value)) {
            emailError.textContent = '';
        }
    });

    /* ---- Real-time Password Validation ---- */
    passwordInput.addEventListener('blur', function () {
        if (this.value.trim() === '') {
            passwordError.textContent = 'Password is required';
        } else if (!validatePassword(this.value)) {
            passwordError.textContent = 'Password must be at least 6 characters';
        } else {
            passwordError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function () {
        if (this.value.trim() !== '' && validatePassword(this.value)) {
            passwordError.textContent = '';
        }
    });

    /* ---- Form Submission ---- */
    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous errors
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate all fields
        let isValid = true;

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (!validatePassword(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (isValid) {
            // Get form data
            const formData = new FormData(signInForm);
            const data = {
                email: formData.get('email'),
                password: formData.get('password'),
                rememberMe: formData.get('rememberMe') ? true : false,
            };

            console.log('Form submitted successfully:', data);
            // Handle form submission here (e.g., send to server)
            // alert('Sign in successful!');
        }
    });

    /* ---- Google Sign-In Button ---- */
    const googleBtn = document.querySelector('.btn-secondary');
    googleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Google Sign-In clicked');
        // Integrate with Google OAuth here
    });

    /* ---- Forgot Password Link ---- */
    const forgotLink = document.querySelector('.forgot-link');
    forgotLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Forgot password clicked');
        // Redirect to password reset page
    });

    /* ---- Sign Up Link ---- */
    const signUpLink = document.querySelector('.form-footer a');
    signUpLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Sign up clicked');
        // Redirect to sign-up page
    });
});
