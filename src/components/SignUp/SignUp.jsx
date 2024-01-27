import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+1', // Default country code
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '', // New field for confirm password
  });

  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && !/^[A-Za-z. ]*$/.test(value)) {
      return;
    }

    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords don't match. Please enter the same password.");
      return;
    }

    // Clear password error if passwords match
    setPasswordError('');

    console.log('Form submitted:', formData);

    navigate('/login');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '400px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Create Account</h2>
        <form id='form' onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '10px', fontSize: '14px', color: '#555' }}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              pattern="[A-Za-z. ]*"
              title="Only letters, dots, and spaces are allowed"
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </label>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>
              Mobile:<br />
              <select
                id='dd'
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                style={{ width: '100px', height: '35px', borderRadius: '15px', border: '1px solid #ccc' }}
              >
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (India)</option>
              </select>
            </label>

            <label>
              <br />
              <input
                id='mobile'
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                pattern="^\d{0,10}$"
                title="Only numbers are allowed, up to 10 digits"
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', paddingRight: '110px' }}
              />
            </label>
          </div>

          <label style={{ marginBottom: '10px', fontSize: '14px', color: '#555' }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </label>

          <label style={{ marginBottom: '10px', fontSize: '14px', color: '#555' }}>
            Password (at least 6 characters):
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              minLength="6"
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </label>

          <label style={{ marginBottom: '10px', fontSize: '14px', color: '#555' }}>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              minLength="6"
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </label>

          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
