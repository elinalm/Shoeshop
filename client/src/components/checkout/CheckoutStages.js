import React, { useState, useContext, useEffect } from 'react'
import { Grommet, Box, Image } from 'grommet'
import { UserInfo } from './UserInfo'
import StepsDiagram from './StepsDiagram'
import { theme } from '../../index'
import Shipping from './Shipping'
import { CartContext } from '../../context/cartContext'
import CartSummary from './CartSummary'
import { totalPrice } from './CheckoutCart'
import { Payment } from './Payment/Payment'
import { numItems } from '../CheckoutButton'
import Done from './Payment/Done'
import loader from '../../assets/payment.gif'
import '../../index.css'
import CollapsibleNav from '../CollapsibleNav'

export default function CheckoutStages() {
    const Stages= {
        info: 1,
        ship: 2,
        pay: 3,
        done: 4
    }

    Object.freeze(Stages)

    const getUserInfo = () => {
        const userDetails = (localStorage.getItem('userInfo'))
        const userDetailsParsed = JSON.parse(userDetails)
        if (userDetails === null) {
            return {
                name: '',
                email: '',
                mobNum: 0o0,
                adr: '',
                adr1: 0o0,
                adr2: '',
            }
        }
        else {
            return {
                name: userDetailsParsed.name,
                email: userDetailsParsed.email,
                mobNum: userDetailsParsed.mobNum,
                adr: userDetailsParsed.adr,
                adr1: userDetailsParsed.adr1,
                adr2: userDetailsParsed.adr2,
            }
        }
    }

    
    const [cartItems, setCart] = useContext(CartContext)
    const [currentStage, setCurrentStage] = useState(Stages.info)
    const [orderTotal, setOrderTotal] = useState(totalPrice(cartItems))
    const [arrivalDate, setArrivalDate] = useState('')
    const [processingDisplay, setprocessingDisplay] = useState(true)
    const [userInfo, setUserInfo] = useState(getUserInfo)
    const [totalItems,setTotalItems]= useState(numItems(cartItems))
    const [cartHistory, setCartHistory] = useState({ totalItems, orderTotal, arrivalDate })

    localStorage.setItem('userInfo', JSON.stringify(userInfo))

    useEffect(() => {
        return () => {
            getUserInfo();
        }
    },
        [userInfo],
    )

    const onSubmit = (e) => {
        e.preventDefault()
        let snapInfo =
        {
            name: e.target[0].value,
            email: e.target[1].value,
            mobNum: e.target[2].value,
            adr: e.target[3].value,
            adr1: e.target[4].value,
            adr2: e.target[5].value,
        }
        setUserInfo(snapInfo)
        setCurrentStage(Stages.ship)
    }

    const ship = (value) => {
        setCurrentStage(Stages.pay)
        setOrderTotal(orderTotal + value[0])
        setArrivalDate(value[1])
    }

    useEffect(() => {
        return () => {
            displayPage();
        }
    },
        [currentStage],
    );

    const displayPage = () => {
        let displayPage = <UserInfo userInfo={userInfo} SubmitForm={onSubmit} />
        switch (currentStage) {
            case Stages.info:
                displayPage = <UserInfo userInfo={userInfo} SubmitForm={onSubmit} />
                break;
            case Stages.ship:
                displayPage = <Shipping ship={ship} />
                break;
            case Stages.pay:
                displayPage = <Payment userSnap={userInfo}
                    SubmitForm={pay} />
                break;
        }
        return displayPage
    }

    const pay = () => {
        setCurrentStage(Stages.done)
        const promisePay = new Promise((accept, reject) => {
            console.log('check')
            setTimeout(() => {
                accept('')
            }, 5000); // accept after 5 second
        })

        const processPayment = () => {
            promisePay
                .then((accept) => {
                    console.log('accept:', accept);
                    setCartHistory({ totalItems, orderTotal, arrivalDate })
                })
                .catch((error) => {
                    console.log('error:', error);
                })
                .finally(() => {
                    setCart([])
                    setprocessingDisplay(false)
                })
        }
        processPayment()
    }

    if (currentStage === Stages.done) {
        while (processingDisplay) {
            return (
                <Box style={{ pointerEvents: 'none' }}>
                    <CollapsibleNav showCart={false} showMenu={false} />
                    <Box pad='none' margin='none' height='medium' align='center' >
                        <Image fit='contain' src={loader} />
                    </Box>
                </Box>
            )
        }
        return <Grommet theme={theme} >
            <CollapsibleNav showCart={true} showMenu={false} />
            <Done arrivalDate={arrivalDate} cartHistory={cartHistory} />
        </Grommet>
    }
    return (
        <Grommet theme={theme} >
            <CollapsibleNav showCart={true} showMenu={false} />
            <StepsDiagram stageNum={currentStage} ></StepsDiagram>
            <Box animation='fadeIn' direction='row' wrap={true} justify='center' align='start' >
                <Box width='medium' flex={{ grow: 0 }} align='center'>
                    <CartSummary
                        stageNum={currentStage}
                        userSnap={userInfo}
                        arrivalDate={arrivalDate}
                        orderCost={orderTotal}
                        totalItems={numItems(cartItems)}
                    />
                </Box>
                <Box width='medium' animation='fadeIn' flex={{ grow: 3 }} >
                    {displayPage()}
                </Box>
            </Box>
        </Grommet>)
}
