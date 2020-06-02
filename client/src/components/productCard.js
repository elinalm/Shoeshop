import React, { useState, useContext } from "react";
import { Button } from "grommet";
import { Box, Image, Heading, Select, Text, Layer } from "grommet";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { ProductContext } from "../context/productContext";
import { CartConsumer } from "../context/cartContext";
import { Cart, Trash, Edit } from 'grommet-icons'
import EditOrAddProduct from './EditOrAddProduct'
import SizeAndQuantity from './SizeAndQuantity'

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
      key={props.product._id}
      background="light-3"
      flex={false}
      justify="between"
      align="center"
      margin="medium"
    >
      <CartConsumer>
        {(cart) => (
          <>
          
            <Box fill='horizontal' direction='row' pad='small' justify='around'>
            
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
                    {props.product.brand}
                  
                  </Heading>
              {userValue.state.userRole === 'admin' &&
                (<Trash size='medium' color='status-error' onClick={() => productValue.deleteProduct(props.product._id)} />)}
            </Box>
            <Link to={"/product/" + props.product._id}>
              <Image
                fit="contain"
                fill
                src={props.product.img}
                alt=""
                style={{ width: "100%", height: "100%", alignSelf: "center" }}
              />
            </Link>                    
              <SizeAndQuantity {...props}/>
          </>
        )}
      </CartConsumer>
    </Box>
  );
}
