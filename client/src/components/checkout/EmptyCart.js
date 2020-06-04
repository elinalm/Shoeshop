import React from "react";
import { Grid, ResponsiveContext, Grommet, Box, Button, Image } from "grommet";
import { LinkNext } from "grommet-icons";
import EmptyCartImage from '../../assets/shopping_cart.svg'
import { Link } from 'react-router-dom'
import { theme } from '../../index'

export const EmptyCart = () => (
        <Grommet >
            <ResponsiveContext.Consumer>
                {size => {
                    return (
                        <Grommet theme={theme}>
                            <Grid
                                columns={{
                                    count: 1,
                                    size: 'auto',
                                }}
                                align='center'
                                justify='center'
                                gap="medium"
                                margin={{ top: `${size}` }}
                            >
                                <Box height={{ min: 'medium', max: `${size}` }} width={size} justify='evenly' align='center' >
                                    <Image src={EmptyCartImage} />
                                    <Link to='/HomePage'>
                                        <Button
                                            primary
                                            reverse={true}
                                            icon={<LinkNext />}
                                            label='Let`s fill it up! '
                                            margin='small'
                                        />
                                    </Link>
                                </Box>
                            </Grid>
                        </Grommet>
                    );
                }}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
