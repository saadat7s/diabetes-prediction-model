import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Grid, CircularProgress, Paper } from '@mui/material';

const MLComponent = () => {
  const [inputData, setInputData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: '',
  });

  const [prediction, setPrediction] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handlePrediction = async () => {
    const areAllNumeric = Object.values(inputData).every((value) => !isNaN(parseFloat(value)));

    if (!areAllNumeric) {
      setError('Please enter numeric values for all fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setPrediction(data.prediction);
      setAccuracy(data.accuracy);
      setError(null);
    } catch (error) {
      console.error('Error predicting:', error);
      setPrediction(null);
      setAccuracy(null);
      setError('Error predicting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getResultFeedback = () => {
    if (prediction === null) {
      return null;
    }

    if (prediction === 0) {
      return (
        <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#c8e6c9', marginTop: '15px' }}>
          <Typography variant="subtitle1" color="textPrimary" gutterBottom>
            Great News! The model predicts that the person is not diabetic.
          </Typography>
        </Paper>
      );
    } else {
      return (
        <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#ffcdd2', marginTop: '15px' }}>
          <Typography variant="subtitle1" color="textPrimary" gutterBottom>
            Caution! The model predicts that the person is diabetic. Please consult a healthcare professional for further advice.
          </Typography>
        </Paper>
      );
    }
  };

  const getAccuracyFeedback = () => {
    if (accuracy !== null) {
      return (
        <Typography variant="subtitle1" color="textPrimary" gutterBottom>
          Model Accuracy on Test Data: {((accuracy * 100).toFixed(2))}%
        </Typography>
      );
    }
    return null;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Diabetes Prediction
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(inputData).map((key) => (
          <Grid item xs={12} sm={6} key={key}>
            <TextField
              fullWidth
              label={key}
              type="number"
              name={key}
              value={inputData[key]}
              onChange={handleInputChange}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handlePrediction} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Predict'}
      </Button>
      {error && (
        <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#ffcccb', marginTop: '15px' }}>
          <Typography variant="subtitle1" color="error" gutterBottom>
            {error}
          </Typography>
        </Paper>
      )}
      {getResultFeedback()}
      {getAccuracyFeedback()}
    </Container>
  );
};

export default MLComponent;
