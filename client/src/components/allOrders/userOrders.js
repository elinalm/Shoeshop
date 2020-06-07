import React, { useContext } from "react";
import {
  Accordion,
  AccordionPanel,

  Text,
  List, Box, Image
} from "grommet";
import { OrderConsumer } from "../../context/orderContext";
import { CartConsumer } from "../../context/cartContext";

const userOrders = () => {

  const arrivalDate = (days, orderedDate) => {
    const orderDate = new Date(Date.parse(orderedDate))
    const deliveryDate = new Date(orderDate)
    deliveryDate.setDate(deliveryDate.getDate() + days)
    return formatDate(deliveryDate)
  }

  const formatDate = (orderedDate) => {
    const year = new Date(Date.parse(orderedDate)).getFullYear()
    const month = new Date(Date.parse(orderedDate)).getMonth()
    const day = new Date(Date.parse(orderedDate)).getDate()
    const formatDate = `${year}-${month + 1}-${day}`
    console.log(formatDate)
    return formatDate
  }


  return (
    <OrderConsumer>

      {(order) => (
        <Accordion overflow="auto">
         
            {
              order.state.userOrders.sort(
                (a, b) => new Date(Date.parse(b.date)) - new Date(Date.parse(a.date))
              ).map((element) =>
              <AccordionPanel key={element._id} label={element._id}>
                <Box pad="small" background="light-2" width='medium'>
                  <Text weight='bold'>Order Status: {element.delivered ? "Delivered" : "On its way"}</Text>
                  {(element.productRows.map(datum =>
                    <Box
                      key={datum._id}
                      direction="row-responsive"
                      wrap={true}
                      align="center"
                      margin='small'
                      justify='between'
                    >
                      <Text size="medium" weight="bold">
                        {datum.product.brand}
                        {datum.items.map((items, index) =>
                          <Box key={index}>{items.quantity} pair(s) of size{items.size} </Box>
                        )}

                      </Text>
                      <Box height="xsmall" width="xsmall" margin='small'>
                        <Image fit="contain" src={datum.product.imageUrl}></Image>
                      </Box>
                    </Box>
                  ))}

                  <CartConsumer>
                    {(cart) =>
                      (<Text>Total Price: {cart.getTotal(element.productRows) + element.shipping.price}</Text>)}
                  </CartConsumer>
                  <Text>Payment Mode: {element.payment}</Text>
                  <Text>ETA: {arrivalDate(element.shipping.deliveryDays, element.date)},
                OrderedOn: {formatDate(element.date)}

                  </Text>
                  <Text>Deliver To: {element.address.streetAddress},{element.address.postalCode},
                  {element.address.city}
                  </Text>
                </Box>
              </AccordionPanel>

            )}
     
        </Accordion>
      )
      }
    </OrderConsumer>
  )
}

export default userOrders;
