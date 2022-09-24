import { Box } from '@chakra-ui/layout';

const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
           <div className="copyright">
          <p className="p-text">Copyright © {new Date().getFullYear()} Mohau Real Estate</p>
          <p className="p-text">All rights reserved</p>
        </div>
  </Box>
);

export default Footer;