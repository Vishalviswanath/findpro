import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const Main = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobType: '',
    salaryType: 'monthly',
    salaryValue: '',
    rateType: 'fixed',
    rateRange: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked ? 'range' : 'fixed',
    }));
  };
  const handleEditToggle = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setEditMode(false);
  };

  return (
    <Box onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 4,
        }}
      >
        <Typography variant='h3' align='left'>
          Profile Settings
        </Typography>
        <Button variant='contained' color='primary' onClick={handleEditToggle}>
          {editMode ? 'Cancel' : 'Edit'}
        </Button>
        {editMode && (
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        )}
      </Box>
      <hr />
      <Box sx={{ marginLeft: '60px' }}>
        <Typography variant='h4' margin={'10px'}>
          Consultant overview
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              id='standard-basic'
              label='LastName'
              variant='standard'
              value={formData.lastName}
              onChange={handleChange}
              disabled={!editMode}
              name='lastName'
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              id='standard-basic'
              name='firstName'
              label='FirstName'
              variant='standard'
              value={formData.firstName}
              onChange={handleChange}
              disabled={!editMode}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              id='standard-basic'
              label='Job Title'
              variant='standard'
              value={formData.jobType}
              onChange={handleChange}
              disabled={!editMode}
              name='jobType'
            />
          </Box>
        </Box>
        <br />
        <hr />

        <Typography variant='h5' margin={'10px'}>
          Expected Salary
        </Typography>
        <Box sx={{ padding: '10px' }}>
          <Typography variant='h6'>Select salary type</Typography>
          <Box
            sx={{ padding: '10px' }}
            name='salaryType'
            value={formData.salaryType}
            onChange={handleChange}
            disabled={!editMode}
          >
            <Button sx={{ border: '1px solid gray', margin: '5px' }}>
              Hourly
            </Button>
            <Button sx={{ border: '1px solid gray', margin: '5px' }}>
              Monthly
            </Button>
            <Button sx={{ border: '1px solid gray', margin: '5px' }}>
              Annual
            </Button>
          </Box>
          <hr />
          <Typography variant='h6'>Salary Value</Typography>
          <Typography variant='p'>Fixed rate</Typography>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.rateType === 'range'}
                  onChange={handleSwitchChange}
                  name='rateType'
                />
              }
              label='Rate Range'
              disabled={!editMode}
            />
          </FormGroup>
          <br />
          <br />
          {formData.rateType === 'range' && (
            <TextField
              name='rateRange'
              label='Rate Range'
              value={formData.rateRange}
              onChange={handleChange}
              disabled={!editMode}
            />
          )}

          <Box display={'flex'} flexDirection={'row'}>
            <InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
            <OutlinedInput
              id='outlined-adornment-amount'
              startAdornment={
                <InputAdornment position='start'>$</InputAdornment>
              }
              label='Amount'
            />
            <Typography variant='p'>monthly</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
