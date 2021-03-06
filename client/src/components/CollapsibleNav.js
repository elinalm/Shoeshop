import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { OrderContext } from "../context/orderContext";
import Register from "./register/register";
import AllUsers from "./allUsers/allUsers";
import AllOrders from "./allOrders/allOrders";
import UserOrders from "./allOrders/userOrders";
import { Box, Header, ResponsiveContext, Layer, Text, Menu } from "grommet";
import Login from "./login/login";
import { CheckoutButton } from "./CheckoutButton";
import { Link } from "react-router-dom";

const CollapsibleNav = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showAllUsers, setShowAllUsers] = useState(false);
    const [showAllOrders, setShowAllOrders] = useState(false);
    const [showUserOrder, setShowUserOrder] = useState(false);
    const userValue = useContext(UserContext)
    const orderValue = useContext(OrderContext)

    return (
        <ResponsiveContext.Consumer>
            {responsive =>
                <Header align='center' background="brand" pad="small" wrap={true}>
                    <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
                        <Text size='large' weight='bold' margin='small'>
                            Shoe<Text color='accent-1' size='large' weight='bold'>Byte</Text>
                        </Text>
                    </Link>
                    <Box direction="row" align='center' justify='center'>
                        {userValue.state.userRole === "admin" && (
                            <Menu
                                dropProps={{
                                    align: { top: "bottom", left: "left" },
                                    elevation: "xlarge"
                                }}
                                label="Manage"
                                items={[
                                    { label: "Users", onClick: () => { setShowAllUsers(true); userValue.getAllUsers() } },

                                    { label: "Orders", onClick: () => { setShowAllOrders(true); orderValue.getAllOrders() } }
                                ]}
                            />
                        )}
                        <Menu
                            dropProps={{
                                align: { top: "bottom", left: "left" },
                                elevation: "xlarge"
                            }}
                            label={userValue.state.loggedInUser ? `${userValue.state.loggedInUser}` : 'LogIn / Register'}
                            items={
                                !userValue.state.loggedInUser ? ([

                                    { label: "Sign Up", onClick: () => { setShowRegister(true) } },
                                    { label: "Sign In", onClick: () => { setShowLogin(true) } }
                                ]) :
                                    ([
                                        { label: "Sign Out", onClick: () => { userValue.logoutUser() } },
                                        { label: "Your Orders", onClick: () => { setShowUserOrder(true); orderValue.getUserOrders(userValue.state.loggedInUserId) } }
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

                            <Login setShowLogin={setShowLogin}
                            />
                        </Layer>
                    )}
                    {showAllUsers && (
                        <Layer
                            elevation="medium"
                            onEsc={() => setShowAllUsers(false)}
                            onClickOutside={() => setShowAllUsers(false)}
                        >
                            <AllUsers close={() => setShowAllUsers(false)}/>
                        </Layer>
                    )}
                    {showAllOrders && (
                        <Layer
                            elevation="medium"
                            onEsc={() => setShowAllOrders(false)}
                            onClickOutside={() => setShowAllOrders(false)}
                        >
                            <AllOrders close={() => setShowAllOrders(false)} /> 
                        </Layer>
                    )}
                    {showUserOrder && (
                        <Layer
                            elevation="medium"
                            margin="medium"
                            onEsc={() => setShowUserOrder(false)}
                            onClickOutside={() => setShowUserOrder(false)}
                        >
                            <UserOrders close={() => setShowUserOrder(false)} />
                        </Layer>
                    )}
                </Header>

            }
        </ResponsiveContext.Consumer>
    );
}

export default CollapsibleNav