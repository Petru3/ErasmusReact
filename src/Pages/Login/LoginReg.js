import React from 'react';
import '../../Styling/LoginCSS/Style/style.css'

import Text from '../../Components/LoginComponents/Text'
import Login from '../../Components/LoginComponents/Login'
import Check from '../../Components/LoginComponents/Check'
import ButtonsToLink from '../../Components/LoginComponents/ButonsToLink'                                                                          

function LoginReg() {
  return (
    <div className='parent'>
      <div className="bg-illustration"></div>
      <div className='login'>
        <div className='container1'>
          <Text />
          <div className='login-form'>
            <div className='form'>
              <Login />
              <Check />
              <ButtonsToLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginReg