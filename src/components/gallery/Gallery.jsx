import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './gallery.css'

import GalleryWeb from './GalleryWeb';
import GalleryCAD from './GalleryCAD';
import GalleryMech from './GalleryMech';

const Gallery = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <h5>My Recent Work</h5>
      <h2>Gallery</h2>
      <Box sx={{ width: '90%', margin: 'auto', border: 2, borderColor: 'var(--color-primary)', borderRadius: '12px', backgroundColor: 'var(--color-bg)'}}>
        <TabContext value={value} >
          <Box>
            <TabList aria-label="Gallery Tab View" onChange={handleChange} variant='fullWidth' centered indicatorColor='primary' sx={{ color: '#4db5ff', margin: 'auto'}}>
              <Tab className='tab-web' label="Web Development" value="1" sx={{ fontSize: '16px', color: 'white', fontFamily: 'Rubik'}}/>
              <Tab className='tab-mech' label="Mechatronics" value="2" sx={{ fontSize: '16px', color: 'white', fontFamily: 'Rubik'}}/>
            </TabList>
          </Box>
          <TabPanel value="1">< GalleryWeb /></TabPanel>
          <TabPanel value='2'>< GalleryMech /></TabPanel>
        </TabContext>
      </Box>
    </>
  )
}

export default Gallery