import React, { useState } from "react";
import UserProvider, { UserConsumer } from "../context/userContext";
import Register from "./register/register";
import AllUsers from "./allUsers/allUsers";
import { Anchor, Box, Header, Nav, Menu, ResponsiveContext, Button, Layer, Text } from "grommet";
import Login from "./login/login";
import { CheckoutButton } from "./CheckoutButton";
import { Link } from "react-router-dom";

// interface Props {
//     showCart: boolean
//     showMenu: boolean
// }

const scrollToElement = (name) => {
    let element = document.querySelector(`#${name}`)
    if (element) {
        element.scrollIntoView()
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
                        responsive === "small" ? (
                            <Header background="brand" pad="medium" >
                                <Box direction="row" style={props.showMenu ? { display: 'block' } : { display: 'none' }}>
                                    <Menu
                                        label="Categories"
                                        items={[
                                            { label: "Beds", onClick: () => scrollToElement('beds') },
                                            { label: "Lamps", onClick: () => scrollToElement('lamps') },
                                            { label: "Tables", onClick: () => scrollToElement('tables') },
                                            { label: "My Cart", onClick: () => { } },
                                        ]}
                                    />
                                </Box>
                                <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
                                    <Box direction="row" align="center" gap="small">
                                        The Shop
                         </Box>
                                </Link>
                                <span style={props.showCart ? { display: 'block' } : { display: 'none' }}>
                                    <CheckoutButton showLabel={false} />
                                </span>
                                <Button
                                    label="New Customer"
                                    onClick={() => setShowRegister(true)}
                                />
                                {!user.state.loggedInUser ? (
                                    <Button
                                        label="Log in"
                                        onClick={() => setShowLogin(true)}
                                    />
                                ) : (
                                        <Button
                                            label="Log out"
                                            onClick={() => user.logoutUser()}
                                        />
                                    )}
                                {user.state.userRole === "admin" && (
                                    <Button
                                        onClick={() => {
                                            setShowAllUsers(true);
                                            user.getAllUsers();
                                        }}
                                        primary
                                        label="all users"
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
                                        <Login setShowLogin={setShowLogin} />
                                    </Layer>
                                )}
                                {user.state.loggedInUser && (
                                    <Text justifySelf="right">
                                        Logged in as: {user.state.loggedInUser}
                                    </Text>
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
                        ) : (
                                <Header background="brand" pad="medium" >
                                    <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
                                        <Box color='light-1' direction="row" align="center" gap="small">
                                            The Shop
                            </Box>
                                    </Link>
                                    <Box direction='row' align='center' justify='stretch' style={props.showMenu ? { display: 'block' } : { display: 'none' }}>
                                        <Nav direction="row" align='center'>
                                            <Anchor onClick={() => scrollToElement('beds')} label="Beds" color='light-1' />
                                            <Anchor onClick={() => scrollToElement('lamps')} label="Lamps" color='light-1' />
                                            <Anchor onClick={() => scrollToElement('tables')} label="Tables" color='light-1' />
                                        </Nav>
                                    </Box>

                                    <Button
                                        label="New Customer"
                                        onClick={() => setShowRegister(true)}
                                    />
                                    {!user.state.loggedInUser ? (
                                        <Button
                                            label="Log In"
                                            onClick={() => setShowLogin(true)}
                                        />

                                    ) : (
                                            <Button
                                                label="Log Out"
                                                onClick={() => user.logoutUser()}
                                            />
                                        )}
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
                                            <Login setShowLogin={setShowLogin} />
                                        </Layer>
                                    )}
                                    {user.state.loggedInUser && (
                                        <Text justifySelf="right">
                                            Logged in as: {user.state.loggedInUser}
                                        </Text>
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
                                    <span style={props.showCart ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                        <CheckoutButton showLabel={true} />
                                    </span>
                                </Header>
                            )
                    )}
                </UserConsumer>
            }
        </ResponsiveContext.Consumer>
    );
}

export default CollapsibleNav