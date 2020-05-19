import React from 'react';
import { Box, Diagram, Stack, Text } from 'grommet';
interface Props {
    stageNum: number
}

export default function StepsDiagram(props: Props) {

    return (
        <Stack guidingChild={1} >
            <Diagram 
                connections={[
                    {
                        fromTarget: '1',
                        toTarget: '2',
                        thickness: 'xsmall',
                        color: props.stageNum >= 2 ? 'accent-2' : 'light-4',
                    },
                    {
                        fromTarget: '2',
                        toTarget: '3',
                        thickness: 'xsmall',
                        color: props.stageNum >= 3 ? 'accent-2' : 'light-4',
                        type: 'rectilinear',
                    },
                    {
                        fromTarget: '3',
                        toTarget: '4',
                        thickness: 'xsmall',
                        color: props.stageNum >= 4 ? 'accent-2' : 'light-4',
                        type: 'rectilinear',
                    },
                ]}
            />
            <Box  >
                <Box direction="row" justify='around'>
                    <Box align='center' animation='fadeIn'>
                        <Box round id="1" margin="small" pad="small" background="brand" />
                        <Text>{props.stageNum === 1 ? 'Info' : ''}</Text>
                    </Box>
                    <Box align='center' animation='fadeIn'>
                        <Box round id="2" margin="small" pad="small"
                            background={props.stageNum >= 2 ? 'brand' : 'light-4'} />
                        <Text>{props.stageNum === 2 ? 'Ship' : ''}</Text>
                    </Box>
                    <Box align='center' animation='fadeIn'>
                        <Box round id="3" margin="small" pad="small"
                            background={props.stageNum >= 3 ? 'brand' : 'light-4'} />
                        <Text>{props.stageNum === 3 ? 'Pay' : ''}</Text>
                    </Box>
                    <Box align='center' animation='fadeIn'>
                        <Box round id="4" margin="small" pad="small"
                            background={props.stageNum >= 4 ? 'brand' : 'light-4'} />
                        <Text>{props.stageNum === 4 ? 'Done' : ''}</Text>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );

}
