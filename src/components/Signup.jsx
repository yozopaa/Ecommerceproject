import React, { useState } from 'react';
import Footer from './footer';
const SignUp= () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signing up with:", email, password);
    };

    return (
        <>
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.header}>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div style={styles.inputContainer}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            style={styles.input} 
                            required 
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            style={styles.input} 
                            required 
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            style={styles.input} 
                            required 
                        />
                    </div>
                    <button type="submit" style={styles.submitButton}>Sign Up</button>
                </form>
                <div style={styles.signInContainer}>
                    <p style={styles.signInText}>Already have an account? <a href="/login" style={styles.signInLink}>Login</a></p>
                </div>
            </div>
           
        </div>
         <Footer></Footer>
         </>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'hsl(241, 15%, 12%)',
        margin: 0,
    },
    formContainer: {
        backgroundColor: "hsl(0,0%,96%)",
        padding: '40px 50px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        width: '400px',
        maxWidth: '100%',
        textAlign: 'center',
    },
    header: {
        marginBottom: '20px',
        color: 'hsl(241, 15%, 20%)',
        fontSize: '32px',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '12px 18px',
        border: '1px solid hsl(241, 15%, 20%)',
        borderRadius: '8px',
        fontSize: '16px',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    submitButton: {
        width: '100%',
        padding: '14px 0',
        backgroundColor: 'hsl(241, 15%, 20%)',
        color: 'white',
        fontSize: '18px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    signInContainer: {
        marginTop: '20px',
    },
    signInText: {
        color: 'hsl(241, 15%, 20%)',
        fontSize: '14px',
    },
    signInLink: {
        color: 'hsl(241, 15%, 20%)',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default SignUp;