// SignInSignUp.jsx
import React from 'react';
import styles from './SignInSignUp.module.css';

const SignInSignUp = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign In');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign Up');
  };

  return (
    <div>
      <h1>Sign In / Sign Up</h1>
      <form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignInSignUp;
