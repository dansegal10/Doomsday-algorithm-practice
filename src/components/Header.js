import React, { useEffect, useState } from 'react';
import { Box, Heading, Menu, Button } from 'grommet';

function Header(props) {
    let chooseGame = props.chooseGame;
    let games = props.games;

    return (
        <Box
            align="center"
            as="header"
            direction="row"
            flex={false}
            gap="small"
            justify="between"
        >
            <Heading level={3}>Segalos</Heading>
            {Object.entries(games).map(([name, value], i) =>
                typeof (value) === "object" ?
                    <Menu key={i} label={name} items={value.map(v => {
                        return {
                            label: v,
                            onClick: () => { chooseGame(name, v) }
                        }
                    })} /> :
                    <Button key={i} hoverIndicator onClick={() => chooseGame(name, "")}> {name} </Button>
            )}
        </Box>
    );
}

export default Header;
