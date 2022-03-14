import {Box, Stack, Container, AppBar, Typography, Button, IconButton} from '@mui/material';
import {ShoppingCart, Favorite} from '@mui/icons-material';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import CategoryList from "./CategoryList";
import SearchBox from "./SearchBox";
import React, {useEffect, useState} from 'react';
import authService from '../../api/AuthService';

const UserButtons = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user'))
            setUserLoggedIn(true);
        else
            setUserLoggedIn(false);
    })


    // Componnent for user auth part
    if (userLoggedIn)
        return (
            <Stack spacing={2} direction={"row"}>
                <Link to={"order"}>
                    <Button
                        variant={"contained"}
                        size="large"
                        sx={{p: 1, minwidth: 150}}>
                        Track Order
                    </Button>
                </Link>
                {/*<Link to={"profile"}>*/}
                <Button
                    variant={"contained"}
                    size="large"
                    onClick={() => {
                        authService.logout();
                        window.location.reload(false);
                    }}
                    sx={{p: 1, minwidth: 150}}>
                    Logout
                </Button>
                {/*</Link>*/}
            </Stack>
        )
            ;
    else
        return (
            <Link to={"login"}>
                <Button
                    variant={"contained"}
                    size="large"
                    sx={{p: 1, minwidth: 150}}>
                    Login/SignUp
                </Button>
            </Link>
        );
}

const Header = () => {
    return (
        <>
            <Box component="header" sx={{flexGrow: 1,}}>
                <AppBar position={"sticky"} sx={{p: 2, backgroundColor: "primary.light"}}>
                    <Stack spacing={1}>
                        <Stack direction='row' spacing={1} sx={{justifyContent: "space-between"}}>
                            <Link to={"/"}>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="div"
                                    sx={{display: {xs: 'none', sm: 'block'}}}>
                                    E-STORE
                                </Typography>
                            </Link>
                            {/*User Login Logout & Order Tracking Button*/}
                            <UserButtons/>
                        </Stack>
                        <Stack direction='row' spacing={1}>
                            {/*Category Dropdown */}
                            <CategoryList/>
                            {/* Search Box*/}
                            <SearchBox/>
                            {/*Right Side Buttons*/}
                            <Link to={"whishlist"}>
                                <IconButton
                                    size="large"
                                    sx={{p: 1, minwidth: 150}}>
                                    <Favorite/>
                                </IconButton>
                            </Link>
                            <Link to={"cart"}>
                                <IconButton
                                    size="large"
                                    sx={{p: 1, minwidth: 150}}>
                                    <ShoppingCart/>
                                </IconButton>
                            </Link>
                        </Stack>
                    </Stack>
                </AppBar>
            </Box>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
}

export default Header;
