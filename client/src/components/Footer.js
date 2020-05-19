import React from 'react'
import {
  Box,
  Footer,
  Text,
  Grommet,
  Anchor,
} from 'grommet';
import { Instagram, FacebookOption, Twitter } from 'grommet-icons';
import { theme } from '../index'

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor

      a11yTitle="Share feedback on Instagram"
      href="https://www.instagram.com/"
      icon={<Instagram color="light-1" />}
    />
    <Anchor
      a11yTitle="Chat with us on Facebook"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="light-1" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="light-1" />}
    />
  </Box>
);





export default function FooterSection() {
  return (
    <Grommet theme={theme}>

      {/* <Footer background="dark-1" pad="large">
          
        </Footer> */}
      <Footer
        
        background="brand"
        pad={{ horizontal: "large", vertical: "small" }}
      >
        <Box direction="row" gap="small">
          <Text alignSelf="center">The Shop</Text>
        </Box>
        <Media />
        <Text textAlign="center" size="small">
          © 2020 Copyright Group F
          </Text>
      </Footer>
    </Grommet>
  );
};