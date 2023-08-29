import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function App() {
  const [otp, setOtp] = useState('');

  return (
    <div className='mx-auto flex justify-center items-center ' style={{maxWidth:"1200px",margin:"0 auto"}}>
       
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
inputStyle={{padding:"20px"}}
    />

        
    </div>
    
  );
}