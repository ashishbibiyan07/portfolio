import React, { useState } from "react";
import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = styled.div`
  background: linear-gradient(
    45.73deg,
    rgba(21, 2, 31, 0.1) 20%,
    rgba(46, 2, 43, 0.3) 60%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
    // clip-path: polygon(100% 0px, 0px 1000%, 0px 0px);
  }
  clip-path: polygon(11% 9%, 100% 0%, 91% 93%, 0% 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 30px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
  }
`;
const ContactFormContainer = styled.div`
  width: 550px;
  max-height: 490px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.card};
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
    width: 350px;
    padding: 10px;
  }
`;
const ContactFormTitle = styled.span`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const ContactFormInputsContainer = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 320px;
  }
`;
const Input = styled.input`
  width: 430px;
  height: 40px;
  padding: 12px;
  font-weight: 500;
  margin: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
    width: 320px;
  }
`;
const TextArea = styled.textarea`
  width: 430px;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  height: 88px;
  padding: 12px;
  margin: 12px;
  border: 0.1px solid ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  background-color: ${({ theme }) => theme.card};
  @media (max-width: 768px) {
    font-size: 14px;
    width: 320px;
  }
`;
const ContactButton = styled.button`

    width: 100%;
    max-width: 430px;
    text-align: center;
    padding: 14px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    margin-bottom:18px;
    transition: all 0.2s ease-in-out !important;

    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);

    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  2px 2px 0px #1F2634,
    filter: brightness(0.1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 15px;
    } 

`;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [data, setData] = useState([]);

  //  connection with firebase
  const contactSendHandle = async (e) => {
    e.preventDefault();
    if (email && name && subject && message) {
      const res = await fetch(
        "https://contactdataportfolio-default-rtdb.firebaseio.com/contactDataPortfolio.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            subject,
            message,
          }),
        }
      );

      if (res) {
        toast.success("thanks for feedback!", {
          position: "top-right",
        });
      } else {
        toast("not sent");
      }
    } else {
      toast.error("plz fill the required feilds", {
        position: "bottom-right",
        pauseOnHover: false,
      });
    }
    console.log(email, name, subject, message);

    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Contact Me</Title>
          <Desc>
            Please feel free to contact me should you require any additional
            information.
          </Desc>
          <ContactFormContainer>
            <ContactFormTitle>Email me</ContactFormTitle>
            <ContactFormInputsContainer>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
              />
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
              />
              <Input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type="text"
                placeholder="Subject"
              />
              <TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="Message"
                name="Message"
                placeholder="Write something.."
              ></TextArea>
            </ContactFormInputsContainer>
            <ContactButton onClick={contactSendHandle}>Send</ContactButton>
          </ContactFormContainer>
        </Wrapper>
      </Container>
      <ToastContainer theme="dark" />
    </>
  );
};

export default Contact;
