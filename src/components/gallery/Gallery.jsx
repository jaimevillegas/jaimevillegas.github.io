import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import GalleryWeb from './GalleryWeb';
import GalleryCAD from './GalleryCAD';
import GalleryMech from './GalleryMech';

const Gallery = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{ width: '90%', margin: 'auto', border: 2, borderColor: 'var(--color-primary)', borderRadius: '12px'}}>
      <TabContext value={value} >
        <Box>
          <TabList aria-label="Gallery Tab View" onChange={handleChange} variant='fullWidth' centered indicatorColor='primary' sx={{ color: '#4db5ff', margin: 'auto'}}>
            <Tab label="Web Development" value="1" sx={{ fontSize: '18px', color: 'white', fontFamily: 'Rubik'}}/>
            <Tab label="CAD Design" value="2" sx={{ fontSize: '18px', color: 'white', fontFamily: 'Rubik'}}/>
            <Tab label="Mechatronics" value="3" sx={{ fontSize: '18px', color: 'white', fontFamily: 'Rubik'}}/>
          </TabList>
        </Box>
        <TabPanel value="1">< GalleryWeb /></TabPanel>
        <TabPanel value='2'>< GalleryCAD /></TabPanel>
        <TabPanel value='3'>< GalleryMech /></TabPanel>
      </TabContext>
    </Box>
  )
}

export default Gallery