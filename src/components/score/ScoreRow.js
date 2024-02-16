import React from 'react';
import { Box, Text } from 'grommet';
import formatScoreTime from "../../functions/formatScoreTime.js";


function ScoreRow({score, success, index}) {
    return (
        <Box
            flex={'grow'}
            direction={"row"}
            align={'stretch'}
            height="25px"
            wrap={true}>
            <Text color="darkslategrey" style={{ marginRight: "10px" }}>{index + 1}</Text>
            <Text color={success ? "white" : "darkred"}>{formatScoreTime(score)}</Text>
        </Box>
    );
};

export default ScoreRow;