
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';

const Findpro = () => {
  const [expectedSalary, setExpectedSalary] = React.useState('');
  const [salaryType, setSalaryType] = React.useState('Hourly');

  const handleExpectedSalaryChange = (event) => {
    setExpectedSalary(event.target.value);
  };

  const handleSalaryTypeChange = (event) => {
    setSalaryType(event.target.value);
  };

  return (
    <Box>
      <Typography variant='h5'>Profile Settings</Typography>
      <Box mt={2}>
        <Typography variant='subtitle1'>Consultant Overview</Typography>
        <Box mt={1}>
          <TextField
            label='First Name'
            variant='outlined'
            fullWidth
            value='Kyla'
          />
          <TextField
            label='Last Name'
            variant='outlined'
            fullWidth
            value='Andrews'
          />
          <FormControl fullWidth>
            <InputLabel>Job Title</InputLabel>
            <Select value='Project Manager' onChange={handleSalaryTypeChange}>
              <MenuItem value='Project Manager'>Project Manager</MenuItem>
              {/* Add more options here */}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box mt={3}>
        <Typography variant='subtitle1'>Expected Salary</Typography>
        <Box mt={1}>
          <FormControl fullWidth>
            <InputLabel>Salary Type</InputLabel>
            <Select value={salaryType} onChange={handleSalaryTypeChange}>
              <MenuItem value='Hourly'>Hourly</MenuItem>
              <MenuItem value='Fixed rate'>Fixed rate</MenuItem>
              <MenuItem value='Monthly'>Monthly</MenuItem>
              <MenuItem value='Annual'>Annual</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='Salary value'
            variant='outlined'
            fullWidth
            value={expectedSalary}
            onChange={handleExpectedSalaryChange}
          />
        </Box>
      </Box>
      <Box mt={3}>
        <Button variant='contained' color='primary' fullWidth>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Findpro;
