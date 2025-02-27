import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container
      component="footer"
      style={{
        marginTop: 'auto',  // Ensure the footer stays at the bottom
        paddingTop: '20px',  // Add padding at the top for spacing
        textAlign: 'center',
        backgroundColor: '#f8f9fa',  // Set background color
        position: 'center',
        width: '100%',  // Full width
        bottom: '0',  // Stick to the bottom
      }}
    >
      <Typography variant="body2" color="textSecondary">
        DiabeTech Prognosis &copy; 2023. All rights reserved.
      </Typography>
      
    </Container>
  );
};

export default Footer;
