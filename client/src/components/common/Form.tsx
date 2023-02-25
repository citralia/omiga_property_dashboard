import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui';

import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#11142d'>
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius='15px' padding='20px' bgcolor='#fcfcfc'>
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px', fontSize:16, color: '#11142d'}}>
              Enter Property Name
            </FormHelperText>
            <TextField 
            fullWidth
            required
            id='outlined-basic'
            color='info'
            variant='outlined'
            {...register('title', { required: true})}
            />
          </FormControl>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px', fontSize:16, color: '#11142d'}}>
              Short Description
            </FormHelperText>
            <TextareaAutosize 
              minRows={5}
              required
              placeholder='Write description'
              color='info'
              style={{ width: '100%', background: 'transparent', fontSize: '16px', font: 'inherit', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color:'#919191'}}
              {...register('description', { required: true})}
            />
          </FormControl>

          <Stack direction='row' gap={4}>
            <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d'
              }}>
                Select Property Type
              </FormHelperText>
              <Select
                variant='outlined'
                color='info'
                displayEmpty
                required
                inputProps={{ 'aria-label': 'without-label' }}
                defaultValue='Room'
                {...register('propertyType', { required: true})}
              >
                <MenuItem value='House'>House</MenuItem>
                <MenuItem value='Flat'>Flat</MenuItem>
                <MenuItem value='Cottage'>Cottage</MenuItem>
                <MenuItem value='Glamping'>Glamping</MenuItem>
                <MenuItem value='BnB'>BnB</MenuItem>
                <MenuItem value='Hotel'>Hotel</MenuItem>
                <MenuItem value='Hostel'>Hostel</MenuItem>
                <MenuItem value='Room'>Room</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px', fontSize:16, color: '#11142d'}}>
              Price Per Night (£)
            </FormHelperText>
            <TextField 
            fullWidth
            required
            id='outlined-basic'
            color='info'
            type='number'
            variant='outlined'
            {...register('price', { required: true})}
            />
          </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px', fontSize:16, color: '#11142d'}}>
              Town
            </FormHelperText>
            <TextField 
            fullWidth
            required
            id='outlined-basic'
            color='info'
            variant='outlined'
            {...register('location', { required: true})}
            />
          </FormControl>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px', fontSize:16, color: '#11142d'}}>
              Nearest City
            </FormHelperText>
            <Select
              variant='outlined'
              color='info'
              displayEmpty
              inputProps={{ 'aria-label': 'without-label' }}
              defaultValue='Bristol'
              {...register('city', { required: false})}
            >
              <MenuItem value='London'>London</MenuItem>
              <MenuItem value='Birmingham'>Birmingham</MenuItem>
              <MenuItem value='Leeds'>Leeds</MenuItem>
              <MenuItem value='Glasgow'>Glasgow</MenuItem>
              <MenuItem value='Sheffield'>Sheffield</MenuItem>
              <MenuItem value='Bradford'>Bradford</MenuItem>
              <MenuItem value='Liverpool'>Liverpool</MenuItem>
              <MenuItem value='Edinburgh'>Edinburgh</MenuItem>
              <MenuItem value='Manchester'>Manchester</MenuItem>
              <MenuItem value='Bristol'>Bristol</MenuItem>
              <MenuItem value='Wakefield'>Wakefield</MenuItem>
              <MenuItem value='Cardiff'>Cardiff</MenuItem>
              <MenuItem value='Coventry'>Coventry</MenuItem>
              <MenuItem value='Leicester'>Leicester</MenuItem>
              <MenuItem value='Nottingham'>Nottingham</MenuItem>
              <MenuItem value='Stoke-on-Trent'>Stoke-on-Trent</MenuItem>
              <MenuItem value='Sunderland'>Sunderland</MenuItem>
              <MenuItem value='Newcastle upon Tyne'>Newcastle upon Tyne</MenuItem>
              <MenuItem value='Plymouth'>Plymouth</MenuItem>
              <MenuItem value='Southampton'>Southampton</MenuItem>
              <MenuItem value='Derby'>Derby</MenuItem>
              <MenuItem value='Dudley'>Dudley</MenuItem>
              <MenuItem value='Wolverhampton'>Wolverhampton</MenuItem>
              <MenuItem value='Swansea'>Swansea</MenuItem>
              <MenuItem value='Norwich'>Norwich</MenuItem>
              <MenuItem value='Walsall'>Walsall</MenuItem>
              <MenuItem value='York'>York</MenuItem>
              <MenuItem value='Peterborough'>Peterborough</MenuItem>
              <MenuItem value='Salford'>Salford</MenuItem>
              <MenuItem value='Aberdeen'>Aberdeen</MenuItem>
              <MenuItem value='Belfast'>Belfast</MenuItem>
              <MenuItem value='Bournemouth'>Bournemouth</MenuItem>
              <MenuItem value='Brighton and Hove'>Brighton and Hove</MenuItem>
              <MenuItem value='Portsmouth'>Portsmouth</MenuItem>
              <MenuItem value='Ipswich'>Ipswich</MenuItem>
              <MenuItem value='Luton'>Luton</MenuItem>
              <MenuItem value='Milton Keynes'>Milton Keynes</MenuItem>
              <MenuItem value='Chelmsford'>Chelmsford</MenuItem>
              <MenuItem value='Oxford'>Oxford</MenuItem>
              <MenuItem value='Cambridge'>Cambridge</MenuItem>
              <MenuItem value='Exeter'>Exeter</MenuItem>
              <MenuItem value='Cheltenham'>Cheltenham</MenuItem>
              <MenuItem value='Gloucester'>Gloucester</MenuItem>
              <MenuItem value='Preston'>Preston</MenuItem>
              <MenuItem value='St Albans'>St Albans</MenuItem>
              <MenuItem value='Lancaster'>Lancaster</MenuItem>
              <MenuItem value='Hereford'>Hereford</MenuItem>
              <MenuItem value='Chester'>Chester</MenuItem>
              <MenuItem value='Lincoln'>Lincoln</MenuItem>
              <MenuItem value='Truro'>Truro</MenuItem>
              <MenuItem value='Stoke-on-Trent'>Stoke-on-Trent</MenuItem>
              <MenuItem value='Carlisle'>Carlisle</MenuItem>
              <MenuItem value='Newport'>Newport</MenuItem>
              <MenuItem value='Bath'>Bath</MenuItem>
              <MenuItem value='Ripon'>Ripon</MenuItem>
              <MenuItem value='Salisbury'>Salisbury</MenuItem>
              <MenuItem value='Winchester'>Winchester</MenuItem>
              <MenuItem value='Durham'>Durham</MenuItem>
              <MenuItem value='Ely'>Ely</MenuItem>
              <MenuItem value='St Davids'>St Davids</MenuItem>
              <MenuItem value='Lichfield'>Lichfield</MenuItem>
              <MenuItem value='Stirling'>Stirling</MenuItem>
              <MenuItem value='Inverness'>Inverness</MenuItem>
              <MenuItem value='Perth'>Perth</MenuItem>
              <MenuItem value='Dundee'>Dundee</MenuItem>
              <MenuItem value='Stornoway'>Stornoway</MenuItem>
              <MenuItem value='Aberystwyth'>Aberystwyth</MenuItem>
              <MenuItem value='Bangor'>Bangor</MenuItem>
              <MenuItem value='Newtown'>Newtown</MenuItem>
              <MenuItem value='Cardigan'>Cardigan</MenuItem>
              <MenuItem value='Holyhead'>Holyhead</MenuItem>
              <MenuItem value='Llandrindod Wells'>Llandrindod Wells</MenuItem>
              <MenuItem value='Llandudno'>Llandudno</MenuItem>
              <MenuItem value='Swansea'>Swansea</MenuItem>
              <MenuItem value='St Asaph'>St Asaph</MenuItem>
              <MenuItem value='St Helier'>St Helier</MenuItem>
              <MenuItem value='Douglas'>Douglas</MenuItem>
              <MenuItem value='St Peter Port'>St Peter Port</MenuItem>
              <MenuItem value='Saint Helier'>Saint Helier</MenuItem>
              <MenuItem value='Saint Peter Port'>Saint Peter Port</MenuItem>
            </Select>  
          </FormControl>
          <Stack direction='column' gap={1} justifyContent='center' mb={2}>
            <Stack direction='row' gap={2}>
              <Typography color='#11142d' fontSize={16} fontWeight={500} my='10px'>Property Photo</Typography>
              <Button component='label' sx={{ width: 'fit-content', color: '#2ed480', textTransform: 'capitalize', fontSize: 16,}}>
                Upload
                <input 
                  hidden
                  accept='image/*'
                  type='file'
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color='#808191' sx={{ wordbreak: 'break-all' }}>{propertyImage?.name}</Typography>
          </Stack>

          <CustomButton 
            type='submit'
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor='#3c4aae'
            color='#fcfcfc'
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;