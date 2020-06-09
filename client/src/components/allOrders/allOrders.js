import React, { useState, useEffect, useContext } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Text,
} from "grommet";
import { OrderConsumer, OrderContext } from "../../context/orderContext";
import { Checkmark, Close } from "grommet-icons";

const AllOrders = (props) => {
  const orderValue = useContext(OrderContext)
  

  useEffect(() => {
    orderValue.getAllOrders()
}, [])


  return (
    <>
      <Table>
        <TableHeader>
        
          <TableRow>
            <TableCell scope="col" border="bottom">
              Users
            </TableCell>
            <TableCell scope="col" border="bottom">
              ProductRows
            </TableCell>
            <TableCell scope="col" border="bottom">
              Payment
            </TableCell>
            <TableCell scope="col" border="bottom">
              Shipping
            </TableCell>
            <TableCell scope="col" border="bottom">
              Date  
            </TableCell>
            <TableCell scope="col" border="bottom">
              Done
            </TableCell>
            <TableCell scope="col" border="bottom">
            <Close size='small'  onClick={props.close} />
              </TableCell> 
          </TableRow>
        </TableHeader>
        <TableBody>
          <OrderConsumer>
            {(order) => (

              <>
                {order.state.allOrders.map(
                  (theOrder) =>

                    <TableRow key={theOrder._id}>
                      <TableCell scope="row">
                        <strong>{theOrder.user.username}</strong>
                      </TableCell>
                      {theOrder.productRows.map(
                        (row) =>
                          <TableCell scope="row">
                            {row._id}
                          </TableCell>
                      )}

                      <TableCell scope="row">
                        <strong>{theOrder.payment}</strong>

                      </TableCell>
                      <TableCell scope="row">
                        <strong>{theOrder.shipping.company }</strong>

                      </TableCell>
                      <TableCell scope="row">
                        <strong>{theOrder.date }</strong>

                      </TableCell>
                      <TableCell scope="row">
                        {!theOrder.delivered ? 
(                      <Checkmark
                      onClick={() =>
                        order.orderDone(theOrder._id, true)
                      }
                      size="medium"
                      color="grey"
                      ></Checkmark>)
                    : (<Checkmark
                      size="medium"
                      color="green"
                      ></Checkmark>)}
                      </TableCell>
                      
                    </TableRow>
                )
                }
              </>
            )}
          </OrderConsumer>
        </TableBody>
      </Table>
    </>
  );
};

export default AllOrders;
