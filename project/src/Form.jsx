import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    testName: '',
    patientId: '',
    result: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the backend API endpoint
    fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        // Clear form fields after submission
        setFormData({
          testName: '',
          patientId: '',
          result: '',
          date: ''
        });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Test Name:</label>
      <input type="text" name="testName" value={formData.testName} onChange={handleInputChange} /><br />
      
      <label>Patient ID:</label>
      <input type="text" name="patientId" value={formData.patientId} onChange={handleInputChange} /><br />
      
      <label>Result:</label>
      <input type="text" name="result" value={formData.result} onChange={handleInputChange} /><br />
      
      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleInputChange} /><br />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;



        // e.preventDefault();

        // fetch('/api/news', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(testResult)
        //   })
        //   .then(response => {
        //     if (response.ok) {
        //       alert('Form submitted successfully!');
        //       // Clear form fields after submission
        //       setFormData({
        //         testName: '',
        //         patientId: '',
        //         result: '',
        //         date: ''
        //       });
        //     } else {
        //       alert('Failed to submit form. Please try again.');
        //     }
        //   })
        //   .catch(error => console.error('Error:', error));

        // const newTest = {ID: patientID,
        //                 tname: testName,
        //                 ttype: testType,
        //                 tvalue: testValue,
        //                 tunit: testUnit,
        //                 ctype: cartype,

        // }

        // setTestResult(t => [...t,newTest]);

        // setYear(new Date().getFullYear());