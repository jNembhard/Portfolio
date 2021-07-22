import React from "react";
import SocialMediaButtons from "react-social-media-buttons";
import styled from "styled-components";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Middle>
        <SocialButtons
          links={[
            "https://www.linkedin.com/in/jasonnembhard1/",
            "https://github.com/jNembhard",
          ]}
          buttonStyle={{
            width: "50px",
            height: "50px",
            margin: "0px 12px",
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            border: "2px solid #000000",
          }}
          iconStyle={{ color: "#000000" }}
          openNewTab={true}
        />
      </Middle>
      <End>Copyright © {date} Jason Nembhard.</End>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  height: 80px;
  display: flex;
  top: 0;
  background-color: lightblue;
  margin-top: 30px;
  padding-top: 30px;
  /* margin-bottom: 6px; */
  z-index: 1;
`;

const Middle = styled.div`
  display: flex;
  margin-left: 20px;
  position: relative;
  flex: 1;
`;

const SocialButtons = styled(SocialMediaButtons)`
  .iconStyle:hover {
    background-color: yellow;
  }
`;

const End = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: 20px;
  color: gray;
`;
