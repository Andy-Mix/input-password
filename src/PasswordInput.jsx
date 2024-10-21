import React, { useState } from 'react';
import './PasswordInput.css'; // Importing CSS file for styles

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const minLength = 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()\-_=+\[\]{}|:;'"<,>]/.test(password);

        if (password.length < minLength) {
            return 'Password must be at least 6 characters long.';
        }
        if (!hasUpperCase) {
            return 'Password must have at least one uppercase letter.';
        }
        if (!hasLowerCase) {
            return 'Password must have at least one lowercase letter.';
        }
        if (!hasNumber) {
            return 'Password must have at least one number.';
        }
        if (!hasSpecialChar) {
            return 'Password must have at least one special character.';
        }
        return null; // No errors
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const validationError = validatePassword(password);
        if (validationError) {
            setError(validationError);
        } else {
            setMessage('Password successfully set!');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>
                        Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <div className="input-group">
                    <label>
                        Confirm Password:
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default PasswordInput;
