import './skills.scss'
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const list = ['HTML', 'CSS', 'Javascript']

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((list) =>
    React.cloneElement(element, {
      key: list
    })
  );
}

export default function Skills() {

  return (
    <div className='skills' id='skills'>
        <h1>Skills</h1>
        <div className='container'>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <FormGroup row></FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                  Skills I have learned in my journey so far include:
                </Typography>
                <List>
                  {generate(
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIcon />
                      </ListItemIcon>
                      <ListItemText primary={list} />
                    </ListItem>
                  )}
                </List>
              </Grid>
            </Grid>
          </Box>
        </div>
    </div>
  )
}
