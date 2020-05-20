import React, { useState } from "react";
import { UserConsumer } from "../context/userContext";
import Register from "./register/register";
import AllUsers from "./allUsers/allUsers";
import { Anchor, Box, Header, Nav, ResponsiveContext, Button, Layer, Text, DropButton } from "grommet";
import Login from "./login/login";
import { CheckoutButton } from "./CheckoutButton";
import { Link } from "react-router-dom";

const scrollToElement = (name) => {
    let element = document.querySelector(`#${name}`)
    if (element) {
        element.scrollIntoView()
        console.log('here')
    }
}

const CollapsibleNav = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showAllUsers, setShowAllUsers] = useState(false);

    return (
        <ResponsiveContext.Consumer>
            {responsive =>
                <UserConsumer>
                    {(user) => (
                        <Header background="brand" pad="medium" >
                            <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
                                <Box direction="row" align="center" gap="small">
                                    ShoeByte
                                </Box>
                            </Link>
                            {responsive === "small" ? (
                                <DropButton
                                    style={props.showMenu ? { display: 'block' } : { display: 'none' }}
                                    dropAlign={{ top: 'bottom', right: 'right' }}
                                    dropContent={
                                        <Nav direction="column" align='center' pad='medium'>
                                            <Anchor onClick={() => scrollToElement('beds')} label="Beds" />
                                            <Anchor onClick={() => scrollToElement('lamps')} label="Lamps" />
                                            <Anchor onClick={() => scrollToElement('tables')} label="Tables" />
                                        </Nav>
                                    }
                                >
                                    <Text>Racks</Text>
                                </DropButton>
                            ) :
                                (
                                    <Box direction='row' align='center' justify='stretch' style={props.showMenu ? { display: 'block' } : { display: 'none' }}>
                                        <Nav direction="row" align='center'>
                                            <Anchor onClick={() => scrollToElement('beds')} label="Beds" color='light-1' />
                                            <Anchor onClick={() => scrollToElement('lamps')} label="Lamps" color='light-1' />
                                            <Anchor onClick={() => scrollToElement('tables')} label="Tables" color='light-1' />
                                        </Nav>
                                    </Box>
                                )
                            }
                            <DropButton
                                dropAlign={{ top: 'bottom', right: 'right' }}
                                dropContent={
                                    <Box gap='small' pad="small" background="none">
                                        <Box onClick={() => setShowRegister(true)}>Sign Up</Box>
                                        {!user.state.loggedInUser ? (
                                            <Box onClick={() => setShowLogin(true)}>Sign In</Box>
                                        ) : (
                                                <Box pad="small" background="light-2" onClick={() => user.logoutUser()}>Sign Out</Box>
                                            )}
                                    </Box>}
                            >
                                <Text>{user.state.loggedInUser ? `${user.state.loggedInUser}` :'LogIn / Register'}</Text>
                            </DropButton>
                            <span style={props.showCart ? { display: 'block' } : { display: 'none' }}>
                                <CheckoutButton showLabel={responsive === "small" ? false : true} />
                            </span>
                            {user.state.userRole === "admin" && (
                                <Button
                                    onClick={() => {
                                        setShowAllUsers(true);
                                        user.getAllUsers();
                                    }}
                                    primary
                                    label="All customers"
                                ></Button>
                            )}
                            {showRegister && (
                                <Layer
                                    elevation="medium"
                                    onEsc={() => setShowRegister(false)}
                                    onClickOutside={() => setShowRegister(false)}
                                >
                                    <Register setShowRegister={setShowRegister} />
                                </Layer>
                            )}
                            {showLogin && (
                                <Layer
                                    elevation="medium"
                                    onEsc={() => setShowLogin(false)}
                                    onClickOutside={() => setShowLogin(false)}
                                >
                                    <Login setShowLogin={setShowLogin} onSubmit={() => setShowLogin(false)}/>
                                </Layer>
                            )}
                            {showAllUsers && (
                                <Layer
                                    elevation="medium"
                                    onEsc={() => setShowAllUsers(false)}
                                    onClickOutside={() => setShowAllUsers(false)}
                                >
                                    <AllUsers />
                                </Layer>
                            )}
                        </Header>
                    )}
                </UserConsumer>
            }
        </ResponsiveContext.Consumer>
    );
}

export default CollapsibleNav