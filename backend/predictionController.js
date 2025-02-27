const { spawn } = require('child_process');
const path = require('path');

const predict = async (req, res) => {
  try {
    const { input_data } = req.body;

    // Validate input_data to ensure it has the correct format and length
    if (!Array.isArray(input_data) || input_data.length !== 8 || input_data.some(isNaN)) {
      throw new Error('Invalid input_data format');
    }

    // Prepare the command to run the Python script
   const pythonScriptPath = 'C:\\Users\\Saadat\\PycharmProjects\\ABSE-DiabetesModel\\main.py';


    // Spawn a Python process
    const pythonProcess = spawn('python', [pythonScriptPath, JSON.stringify(input_data)]);

    // Collect data from Python script
    let resultData = '';

    pythonProcess.stdout.on('data', (data) => {
      resultData += data;
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`Error: ${data}`);
      res.status(500).json({ error: 'Internal Server Error', message: data.toString() });
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        // Parse the JSON result
        const result = JSON.parse(resultData);
        res.json(result);
      } else {
        res.status(500).json({ error: 'Internal Server Error', message: 'Python script execution failed' });
      }
    });
  } catch (error) {
    console.error('Error predicting:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

module.exports = {
  predict,
};
