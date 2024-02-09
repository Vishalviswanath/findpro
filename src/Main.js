import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const Main = () => {
  return (
    <Box>
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
        <Button>Edit</Button>
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
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              id='standard-basic'
              label='FirstName'
              variant='standard'
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              id='standard-basic'
              label='Job Title'
              variant='standard'
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
          <Box sx={{ padding: '10px' }}>
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
          <Switch />
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
