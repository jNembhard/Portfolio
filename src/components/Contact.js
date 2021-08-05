import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact(props) {
  const [message, setMessage] = useState(false);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  // const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setMessage(true);
  //   event.target.reset();
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage(false);
    setState({ ...state, open: false });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
        `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
        event.target,
        `${process.env.REACT_APP_YOUR_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div id="contact">
      <ContactContainer>
        <Left>
          <ContactHeading>Contact Me</ContactHeading>
          <form method="POST" onSubmit={sendEmail}>
            <input
              name="from_name"
              type="text"
              placeholder="Your Name *"
              required
            />
            <input
              name="from_email"
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
            <textarea
              name="message"
              placeholder="Write a message..."
              required
            />
            <div>
              <MDBBtn
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "right",
                })}
                type="submit"
              >
                <MDBIconS far icon="envelope" />
                Send Message
              </MDBBtn>
              <Snackbar
                open={message}
                autoHideDuration={null}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Your message has been sent successfully!
                </Alert>
              </Snackbar>
            </div>
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
    </div>
  );
}

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 896px) and (orientation: landscape) {
    width: 1000px;
  }
`;

const ContactHeading = styled.h2`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 55px;
  }
`;
const Left = styled.div`
  flex: 0.5;
  padding: 0 100px;

  > form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      object-fit: contain;
    }
  }

  form > input {
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

  @media (max-width: 768px) {
    padding: 32px 45px;

    form > textarea {
      height: 150px;
    }
  }
`;

const MDBIconS = styled(MDBIcon)`
  padding-right: 5px;
`;

const Right = styled.div`
  flex: 0.4;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  padding-left: 0;
  padding-top: 90px;

  @media (max-width: 768px) {
    padding: 32px 45px;
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
