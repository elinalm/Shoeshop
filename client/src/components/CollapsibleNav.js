import React, { useState } from "react";
import { UserConsumer } from "../context/userContext";
import Register from "./register/register";
import AllUsers from "./allUsers/allUsers";
import { Anchor, Box, Header, Nav, ResponsiveContext, Button, Layer, Text, DropButton, Menu, Heading } from "grommet";
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
                        <Header justify='around' align='center' background="brand" pad="small" wrap='true'>
                        
                            <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
                                <Text size='large' weight='bold' margin='large'>
                                    Shoe<Text color='accent-1' size='large' weight='bold'>Byte</Text>
                                </Text>
                            </Link>
                            {responsive === "small" ? (
                               
                                <DropButton
                               
                                    style={props.showMenu ? { display: 'block' } : { display: 'none' }}
                                    dropProps={{
                                        align: { top: "bottom", left: "left" },
                                        elevation: "xlarge"
                                    }}
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
                                        <Box direction='row' align='center' style={props.showMenu ? { display: 'block' } : { display: 'none' }}>
                                            <Nav direction="row" align='center'>
                                                <Anchor onClick={() => scrollToElement('beds')} label="Beds" color='light-1' />
                                                <Anchor onClick={() => scrollToElement('lamps')} label="Lamps" color='light-1' />
                                                <Anchor onClick={() => scrollToElement('tables')} label="Tables" color='light-1' />
                                            </Nav>
                                        </Box>
                                )
                            }
                            <Box direction="row" align='center' justify='center'>
                            {user.state.userRole === "admin" && (
                                <Menu
                                    dropProps={{
                                        align: { top: "bottom", left: "left" },
                                        elevation: "xlarge"
                                    }}
                                    label="Manage"
                                    items={[
                                        { label: "Users", onClick: () => { setShowAllUsers(true); user.getAllUsers() } },
                                        { label: "Products", onClick: () => { } },
                                        { label: "Orders", onClick: () => { } }
                                    ]}
                                />
                            )}

                            <Menu
                                    dropProps={{
                                        align: { top: "bottom", left: "left" },
                                        elevation: "xlarge"
                                    }}
                                    label={user.state.loggedInUser ? `${user.state.loggedInUser}` : 'LogIn / Register'}
                                    items={
                                        !user.state.loggedInUser ? ([

                                        { label: "Sign Up", onClick: () => { setShowRegister(true)} },
                                        { label: "Sign In", onClick: () => { setShowLogin(true) } }
                                        ]):
                                        ([
                                            { label: "Sign Out", onClick: () => {  user.logoutUser()} }
                                        ])
                                    }
                                />
                               
                            <span style={props.showCart ? { visibility: 'show' } : { visibility: 'hidden' }}>
                                <CheckoutButton showLabel={responsive === "small" ? false : true} />
                            </span>
                            </Box>
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
                                    <Login setShowLogin={setShowLogin} onSubmit={() => setShowLogin(false)} />
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