import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Text,
} from "grommet";
import { OrderConsumer } from "../../context/orderContext";
import { Checkmark } from "grommet-icons";
// import DisplayUpdate from "./displayUpdate";

const allOrders = () => {
  //   const [displayUpdate, setDisplayUpdate] = useState(false);
  //   const [displayUpdateId, setDisplayUpdateId] = useState(0);
  //   const [displayInfo, setDisplayInfo] = useState(false);



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
          </TableRow>
        </TableHeader>
        <TableBody>
          <OrderConsumer>
            {(order) => (

              <>
                {console.log(order.state.allOrders)}
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
                            {/* {row.size}
                            {row.quantity} */}
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
                      <Checkmark
                              onClick={() =>
                                order.orderDone(theOrder._id, true)
                              }
                              size="medium"
                              color="grey"
                            ></Checkmark>
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

export default allOrders;
