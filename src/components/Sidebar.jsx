import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../data/categories';


export default function SwipeableTemporaryDrawer({setCategory }) {
    const [state, setState] = React.useState({
        left: false,
    });


    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (

        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , paddingLeft:5, paddingRight:5 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                    <ListItem    >
                        Categoreis
                    </ListItem>
                
            </List>
            <Divider />
            <List>
                {categories.map((text) => (
                    <ListItem button onClick={()=>setCategory(text)} key={text} style={{height:40, borderRadius:3}} >
                        
                            <ListItemText primary={text} />
                      
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (

        <div>

            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)} style={{padding:"20px", color:"black",fontWeight:"bolder"}} ><MenuIcon style={{color:'black', }} />Menu</Button>
                <ThemeProvider theme={darkTheme}>
                    <SwipeableDrawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                    >


                        {list("left")}
                    </SwipeableDrawer>
                </ThemeProvider>
            </React.Fragment>

        </div>
    );
}
