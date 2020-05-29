import React, { useState, useContext } from "react";
import { Button } from "grommet";
import { Box, Image, Heading, Select, Text, Layer } from "grommet";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { ProductContext } from "../context/productContext";
import { CartConsumer } from "../context/cartContext";
import { Cart, Trash, Edit } from 'grommet-icons'
import EditOrAddProduct from './EditOrAddProduct'

export default function ProductCard(props) {
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  const userValue = useContext(UserContext)
  const productValue = useContext(ProductContext)

  return (
    <Box
      round="small"
      pad="small"
      elevation="large"
      key={props.id}
      background="light-3"
      flex={false}
      justify="center"
      align="center"
      margin="medium"
    >
      <CartConsumer>
        {(cart) => (
          <>
            <Box fill direction='row' pad='small' justify='around'>
            
              {userValue.state.userRole === 'admin' &&
                (<Edit size='medium' color='neutral-3' onClick={onOpen} />)}
                 {open && (
                    <Layer
                    
                      elevation="medium"
                      onClickOutside={onClose}
                      onEsc={onClose}
                    >
                      <EditOrAddProduct {...props} close={onClose} action={'edit'} setOpen={setOpen}/>
                    </Layer>
                  )}
              <Heading margin={{ vertical: 'none', horizontal: 'small' }} level="3" pad='small' >
                    {props.name}
                  </Heading>
              {userValue.state.userRole === 'admin' &&
                (<Trash size='medium' color='status-error' onClick={() => productValue.deleteProduct(props.id)} />)}
            </Box>
            <Link to={"/product/" + props.id}>
              <Image
                fit="contain"
                fill
                src={props.img}
                alt=""
                style={{ width: "100%", height: "100%", alignSelf: "center" }}
              />
            </Link>
            <Text>{props.price} SEK</Text>

            <Select
              style={{ minWidth: "2rem", maxWidth: "5rem" }}
              plain={true}
              name="size"
              placeholder="Size"
              options={props.inventory.map(element => element.size)}
              value={size}
              onChange={({ option }) => setSize(option)}
            />
            {userValue.state.loggedInUser &&
              <Button
                size='small'
                margin={{ 'bottom': 'xsmall' }}
                hoverIndicator
                icon={<Cart />}
                label={'Add To Cart'}
                onClick={() => cart.addToCart(props.id)}
              />}
          </>
        )}
      </CartConsumer>
    </Box>
  );
}
