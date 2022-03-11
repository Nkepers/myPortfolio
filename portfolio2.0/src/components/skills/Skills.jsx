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

export default function Skills() {
  const skills = ["HTML", "CSS", "Javascript", "Node", "Express", "MySQL", "MongoDB", "React", "NoSQL", "AWS"]

  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <div className='container'>
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <FormGroup row></FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                Skills I have experience in so far include:
              </Typography>
              <List>
                {skills.map(skill => (
                  <ListItem>
                    <ListItemIcon>
                      <ArrowForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary={skill} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
        <div>
          <img src="/assets/skillsIcon.png" alt="<a href='https://pngtree.com/so/Programmer'>Programmer png from pngtree.com/</a>" />
        </div>
      </div>
    </div>
  )
}
