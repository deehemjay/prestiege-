import React from 'react'
import { useNavigate } from 'react-router-dom';

const BrownButton = (props) => {
    
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("#");
  };
    return (
        <>
            <button onClick={loginPage} className='brownBtn' style={{
                padding: "10px 40px",
                borderRadius: "10px",
                fontSize: "16px",
            }}>{props.text }</button>
        </>
  )
}

export default BrownButton