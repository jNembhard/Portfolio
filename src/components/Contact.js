import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";

function Contact(props) {
  const [message, setMessage] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", subject: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };

  return (
    <ContactWrapper>
      <ContactContainer>
        <Left>
          <ContactHeading>Contact Me</ContactHeading>
          <form
            action="https://formsubmit.co/"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input name="name" type="text" placeholder="Your Name *" required />
            <input
              name="email"
              type="email"
              placeholder="Your Email *"
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject *"
              required
            />
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
          {/* <InfoContainer> */}
          <ContactInfo>
            <h2>Phone Number:</h2>
            +1 (703) 297-0357
          </ContactInfo>
          <ContactInfo>
            <h2>E-mail Address:</h2>
            nembhardjl@outlook.com
          </ContactInfo>
          {/* </InfoContainer> */}
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactHeading = styled.h2`
  font-size: 60px;
`;
const Left = styled.div`
  flex: 0.5;
  padding: 0 100px;

  > form {
    margin-top: 20px;
    /* margin-right: 20px; */
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      object-fit: contain;
      /* max-width: 100%; */
    }
  }

  form > input {
    /* display: block; */
    /* width: 100%; */
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
    /* display: block; */
    /* width: 100%; */
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

  @media (max-width: 768px) {
    padding: 32px 25px;
  }
`;

const Right = styled.div`
  flex: 0.4;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  /* max-width: 395px; */
  padding-left: 0;
  padding-top: 63px;

  @media (max-width: 768px) {
    padding: 32px 25px;
  }
`;

const ContactInfo = styled.div`
  box-shadow: 0 10px 40px 0 rgb(50 50 50 / 10%);
  padding: 15px 40px;
  margin-bottom: 20px;
  border: 3px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  align-items: center;
`;
