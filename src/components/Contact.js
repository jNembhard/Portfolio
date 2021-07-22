import React, { useState } from "react";
import styled from "styled-components";

// import emailjs from "emailjs-js"

function Contact(props) {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };

  return (
    <ContactWrapper>
      <ContactContainer>
        <Left>
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit}>
            {/* <label for="html">HTML</label> */}
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Write a message..." />
            <div className="frame">
              <button className="custom-btn btn-9" type="submit">
                SUBMIT
              </button>
            </div>
            {message && <span>Thanks, I'll reply soon!</span>}
          </form>
        </Left>
        <Right>
          <ContactInfo>
            <h2>Phone Number:</h2>
            +1 (703) 297-0357
          </ContactInfo>
          <ContactInfo>
            <h2>E-mail Address:</h2>
            nembhardjl@outlook.com
          </ContactInfo>
        </Right>
      </ContactContainer>
    </ContactWrapper>
  );
}

export default Contact;

const ContactWrapper = styled.div`
  /* position: relative; */
`;

const ContactContainer = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 0.5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;

  > form {
    /* width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; */
    margin-top: 20px;
    margin-right: 20px;
    display: block;
  }

  form > input {
    display: block;
    width: 100%;
    padding: 0 20px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    height: 50px;
    line-height: 46px;
    margin-bottom: 20px;
    outline: none;
    color: #1f1f25;
    font-size: 15px;
    letter-spacing: 0.1px;
  }

  form > textarea {
    display: block;
    width: 100%;
    padding: 0 20px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    height: 250px;
    line-height: 46px;
    margin-bottom: 20px;
    outline: none;
    color: #1f1f25;
    font-size: 15px;
    letter-spacing: 0.1px;
  }

  > form > button {
    flex: 0.5;
  }
`;

const Right = styled.div`
  flex: 0.4;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 100px; */
  /* max-width: 395px; */
  padding-left: 0;
  padding-top: 63px;
`;

const ContactInfo = styled.div`
  box-shadow: 0 10px 40px 0 rgb(50 50 50 / 10%);
  padding: 15px 40px;
  margin-bottom: 20px;
  border: 3px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;
