import React, { useState } from 'react';
import '../components/_myComponent.scss'
import '../utils/common'
import { Button, TextBox } from 'devextreme-react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Đây chỉ là ví dụ đơn giản, bạn cần thay thế bằng logic xác thực thực tế
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    var alert = new common.Alert();
    alert.danger({
      
      text: 'Chào'
  });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {email}!</p>
        </div>
      ) : (
        <div className='container'>
          <span>User name</span>
           <TextBox placeholder="Enter full name here..." defaultValue={email} /> 
          <span className='label'>Password</span>
          <TextBox placeholder="Enter full name here..." defaultValue={password} /> 
          <Button
                width={120}
                  text="Outlined"
                  type="normal"
                  stylingMode="outlined"
                  onClick={handleLogin}
                />
        </div>
      )}
    </div>
  );
}

export default Login;
