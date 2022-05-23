import * as React from 'react';
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import{ Root, RoundedBox, SwipeableTag, Box, Puller, Button } from "./views/ui-components";
import Grid from "@mui/material/Grid";
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const drawerBleeding = 56;

export default function SwipeableEdgeDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Typography variant='h3'>Hello there,</Typography>
      <Typography variant='h5'>What can we get you today?</Typography>
      <Box sx={{ mt: 3 }}/>
      <RoundedBox>1. Nail Toolkits</RoundedBox>
      <RoundedBox>2. List 2</RoundedBox>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SwipeableTag
          sx={{
            
          }}
        >
          <Puller />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ p: 3}}
          >
            <div>
              <Typography variant="body1">Cart</Typography>
              <Typography sx={{ color: 'text.secondary' }}>0 item</Typography> 
            </div>
            <Button onClick={toggleDrawer(true)} >Open</Button>
          </Grid>
        </SwipeableTag>
        <Box
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </Box>
      </SwipeableDrawer>
    </Root>
  );
}
