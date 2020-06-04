import React, { useContext } from "react";
import { Box } from "grommet/components/Box";
import { Grommet } from "grommet/components/Grommet";
import { List, Text, Button, Paragraph, Image } from "grommet";
import { AddCircle, SubtractCircle, LinkNext } from "grommet-icons";
import { Link } from "react-router-dom";
import { theme } from "../../index";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";

export default function CheckoutCart() {
  const cartValue = useContext(CartContext);
  const userValue = useContext(UserContext)
 
  return (
    <Grommet theme={theme}>
      <Box pad="large" wrap={true} direction="row-responsive" justify="between">
        <List
          data={cartValue.state.cart}
          primaryKey={(item) => (
            <Box
              direction="row-responsive"
              wrap={true}
              gap="small"
              justify="center"
              align="center"
            >
              <Text size="large" weight="bold">
                {item.brand}
              </Text>
              <Box height="xsmall" width="small">
                <Image fit="contain" src={item.img}></Image>
              </Box>
              <Box
                direction="row"
                wrap={true}
                gap="small"
                justify="center"
                align="center"
              >
                <Box direction="column">
                  <Text>Size & quantity</Text>

                  <List
                    primaryKey="size"
                    secondaryKey="quantity"
                    data={item.items}
                  >
                    {(datum, index) => (
                      <Box
                        key={index}
                        direction="row-responsive"
                        gap="large"
                        size="xsmall"
                        align="center"
                      >
                        <Text>{datum.size}</Text>
                        <Text>{datum.quantity}</Text>
                        <Box direction="row">
                            <Button
                              hoverIndicator
                              style={{ borderRadius: "50%" }}
                              size="small"
                              icon={<AddCircle size="medium" color="dark-1" />}
                              onClick={() => {
                                cartValue.increaseQuantity(
                                  datum,
                                  item._id)
                              }}
                            />
                          

                          <Button
                            hoverIndicator
                            size="small"
                            style={{ borderRadius: "50%" }}
                            icon={
                              <SubtractCircle size="medium" color="dark-1" />
                            }
                            onClick={() => {
                              cartValue.decreaseQuantity(datum, item._id);
                            }}
                          />
                        </Box>
                      </Box>
                    )}
                  </List>
                </Box>
              </Box>
            </Box>
          )}
          secondaryKey={(item) => (
            <Box>
              <Paragraph size="large">
                {item.price}
                <Text size="small" color="dark-4">
                  {" "}
                  SEK/piece
                </Text>
              </Paragraph>
            </Box>
          )}
        />
        <Box align="end" gap="small">
          <Paragraph size="large">
            Total = {cartValue.getTotal()}
            <Text size="small" color="dark-4">
              {" "}
              SEK
            </Text>
          </Paragraph>
          <Box animation="pulse">

            {userValue.state.loggedInUser ? (<Link to="/Checkout">
              <Button
                size="small"
                primary
                label="to checkout"
                icon={<LinkNext />}
              />
            </Link>):
            (<Text color='status-error'>Login to Checkout</Text>)
            }
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}
