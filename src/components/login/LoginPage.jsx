import React, { useState } from 'react';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginOption, setLoginOption] = useState('email');
  const [emailOrPhone, setEmailOrPhone] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const handleOptionChange = (e) => {
    setLoginOption(e.target.value);

    // Clear the input field when switching between email and phone number
    setEmailOrPhone('');
  };

  const handleEmailOrPhoneChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(''); // Clear previous errors

    if (!emailOrPhone || !password) {
      setError('Please enter your email/phone and password.');
      return;
    }

    if (loginOption === 'email') {
      if (!validateEmail(emailOrPhone)) {
        setError('Please enter a valid email address.');
        return;
      }
    } else if (loginOption === 'phone') {
      if (!validatePhoneNumber(emailOrPhone)) {
        setError('Please enter a valid 10-digit phone number.');
        return;
      }
    }

    // Handle login logic here
    console.log(
      'Logging in with',
      loginOption === 'email' ? 'email:' : 'phone number:',
      emailOrPhone,
      'and password:',
      password
    );

    // Navigate to the home page upon successful login
    navigate('/home');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ borderColor: 'blue' }}>
        <div className="form-group" >
          <label>Login with:</label>
          <br />
          <div className="email">
            <input
              type="radio"
              id="emailOption"
              value="email"
              checked={loginOption === 'email'}
              onChange={handleOptionChange}
            />
            <label htmlFor="emailOption">Email</label>
            <input
              type="radio"
              id="phoneOption"
              value="phone"
              checked={loginOption === 'phone'}
              onChange={handleOptionChange}
            />
            <label htmlFor="phoneOption">Phone Number</label>
          </div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="emailOrPhone">
            {loginOption === 'email' ? 'Email:' : 'Phone Number:'}
          </label>
          <br />
          <input
            type="text"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={handleEmailOrPhoneChange}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <br />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: 'calc(100% - 0px)', marginRight: '10px' }}
            />

            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">ShowPassword &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/forgetpassword" style={{textDecoration:'none', color
          :'black'}}>&nbsp;Forget password</Link></label>
          </div>
        </div>
        <br />
        {error && <div className="error">{error}</div>}
        <nav>
          <button type="submit" className="login-button">
            Login
          </button>
          <p>
            Don't have an account?{' '}
            <Link to="/SignUp" style={{ textDecoration: 'none', color: 'black' }}>
              Sign Up
            </Link>
          </p>
         
          <button type="button" className="google-button">
            <Link to="www.google login.com" style={{textDecoration: 'none', color:'black'}}>Login with Google</Link>
          </button>
          <button type="button" className="facebook-button">
            <Link to="www.facebook login.com"style={{textDecoration: 'none', color:'black'}}>Login with Facebook</Link>
          </button>
        </nav>
      </form>
    </div>
  );
};

export default LoginPage;








// import React,{useState} from 'react';
// import './Hompage.css';

// const HomePage = () =>{
//     // const[searchQuery, setSearchQuery]= useState('');
//     // const[dropdownOpen, setDropdownOpen] = React.useState(false);

//     // const handleSearchChange = (event) =>{
//     //     setSearchQuery(event.target.value);
//     // }
//     // const toggleDropdown = () =>{
//     //     setDropdownOpen(!dropdownOpen);
//     // };

//     // return(
//     //     <nav className='navbar'>
//     //         <div className='search'>
//     //             <input type='text'
//     //             placeholder='search'
//     //             value={searchQuery}
//     //             onChange={handleSearchChange}/>
//     //             <button>Search</button>
//     //         </div>
//     //         <div className='dropdown'>
//     //             <div className='dropdown-trigger' onClick={toggleDropdown}>
//     //                 Menu
//     //             </div>
//     //             {dropdownOpen && (
//     //                 <div className='dropdown-content'>
//     //                     <ul>
//     //                         <li>login</li>
//     //                         <li>signup</li>
//     //                     </ul>
//     //                     </div>
//     //             )}
//     //         </div>
//     //         <div className='user'>
//     //             <span>username</span>
//     //         </div>
//     //     </nav>
//     // )

// }

// export default HomePage;