import { styled } from '@mui/material/styles';
import {default as MuiButton} from "@mui/material/Button";
import {default as MuiBox} from "@mui/material/Box";
import { grey } from '@mui/material/colors';

const drawerBleeding = 80;
const primaryColor = "#ffede9";
const secondaryColor = "#ffdad4";
const textColor = "#706460";

export const Root = styled('div')(({ theme }) => ({
    height: '100vh',
    backgroundColor: "#f9f9f9",
    padding: "2rem 1rem 2rem 1rem",
  }));
  
export const SwipeableTag = styled(MuiBox)(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: "0 -3px 2px 0px #aaa",
    position: "absolute",
    top: -drawerBleeding,
    visibility: "visible",
    right: 0,
    left: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
}));
  
export const RoundedBox = styled(MuiBox)(() => ({
    borderRadius: "8px",
    padding: "1rem 2rem",
    color: textColor,
    marginBottom: "1rem",
    backgroundColor: primaryColor
}))
  
export const Button = styled((props) => (
    <MuiButton {...props} 
    sx={{ color: textColor, backgroundColor: secondaryColor }}
    />))``;
    
export const Box = styled(MuiBox)(() => ({
}))

export const Puller = styled(MuiBox)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: grey[300],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));