import React from 'react';
import { Box, Carousel, Heading, Image } from "grommet";
import CarouselImage1 from '../assets/productImages/woodenforge.jpg'
import CarouselImage2 from '../assets/productImages/woodenforge2.jpg'
export default function FirstSection() {
    return (
        <Box direction='row-responsive'
            round='medium'
            justify='center'
            align='center'
            height='medium'
            border='all'
            margin='medium'
            pad='small'
        >
            <Box
                justify='center'
                alignSelf='center'
                style={{ maxWidth: '50%' }}
            >
                <Carousel fill play={5000}>
                    <Image fit="contain" style={{ width: '100%', height: '100%' }} src={CarouselImage1} />
                    <Image fit="contain" style={{ width: '100%', height: '100%' }} src={CarouselImage2} />
                </Carousel>

            </Box>

            <Box fill='horizontal' justify='center' align='center'>
                <Heading textAlign='center' level='3' color='brand'>Best Seller</Heading>
                <Heading style={{ textAlign: 'justify' }} level='5'>The Woodenforge series is inspired by a time when new land was created and rail systems were built. It has a rustic design.The price is 2495kr.</Heading>
            </Box>
        </Box>

    );
}

