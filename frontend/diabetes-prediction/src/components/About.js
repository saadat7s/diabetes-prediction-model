import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About DiabeTech Prognosis
      </Typography>
      <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
        <Typography variant="body1" paragraph>
          DiabeTech Prognosis is an innovative application designed to predict a person's likelihood of having diabetes
          based on various health indicators. Utilizing advanced machine learning algorithms, the application analyzes
          input data related to pregnancies, glucose levels, blood pressure, skin thickness, insulin levels, BMI,
          diabetes pedigree function, and age.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
          <List>
            <ListItem>
              <ListItemText primary="Accurate Diabetes Prediction: DiabeTech Prognosis leverages a trained machine learning model to provide predictions with high accuracy." />
            </ListItem>
            <ListItem>
              <ListItemText primary="User-Friendly Interface: The application offers a simple and intuitive interface for users to input their health data and receive predictions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Real-time Feedback: Users receive real-time feedback on the likelihood of having diabetes, accompanied by clear messages for interpretation." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Model Accuracy: The application provides information on the accuracy of the prediction model based on test data." />
            </ListItem>
          </List>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>How It Works:</strong>
          <List>
            <ListItem>
              <ListItemText primary="Users input their health data into the designated fields." />
            </ListItem>
            <ListItem>
              <ListItemText primary="The application processes the input using a pre-trained machine learning model." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Users receive a prediction along with an interpretation message." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Optionally, users can explore the model accuracy on the test data." />
            </ListItem>
          </List>
        </Typography>
        <Typography variant="body1">
          DiabeTech Prognosis is not a substitute for professional medical advice. Users are encouraged to consult
          healthcare professionals for comprehensive health assessments and guidance.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
