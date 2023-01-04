import { Stack } from '@mui/material';
import React from 'react'
import { categories } from '../utils/constants';

const SideBar = ({ selectedCat, setSelectedCat }) => {

    return (
        <Stack direction='row'
            sx={{
                overflow: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}>
            {categories.map((cat) => (
                <button className='category-btn' onClick={() => setSelectedCat([cat.name, cat.id])} style={{
                    background: cat.name === selectedCat && '#008fbe',
                    color: 'white'
                }}
                    key={cat.name}>
                    <span style={{ color: cat.name === selectedCat ? 'white' : '#008fbe', marginRight: '15px' }}>{cat.icon}</span>
                    <span style={{ opacity: cat.name === selectedCat ? '1' : '0.8' }}>{cat.name}</span>
                </button>
            ))
            }
        </Stack >
    )
}

export default SideBar