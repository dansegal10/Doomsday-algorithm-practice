import React, { useEffect, useState } from 'react';
import { Box, Heading, Menu, Button, Sidebar } from 'grommet';
import { List } from "grommet-icons";

function Header(props) {
    const [open, setOpen] = useState(false);
    let chooseGame = props.chooseGame;
    let games = props.games;

    return (
        <Box>
            <Box height="50px"></Box>
            <Box
                align="center"
                as="header"
                direction="row"
                flex={false}
                justify="start"
                height="50px"
                style={{position: "fixed", zIndex: 10}}
            >
                <Button
                    height="50px"
                    width="50px"
                    padding="10px"
                    margin="5px 20px"
                    onClick={() => {setOpen(!open)}}
                >
                    <List style={{ borderRadius: "200px", border: "1px solid white", padding: "5px" }}/>
                </Button>
                <Heading level={4}>Segal's Mind Games</Heading>
            </Box>
            <Box
                background="white"
                round="small"
                pad="small"
                gap="large"
                style={{ position: "absolute", display: open ? "block" : "none", marginTop: "50px", zIndex: 10 }}>
                {Object.entries(games).map(([name, value], i) =>
                    typeof (value) === "object" ?
                        <Menu key={i} label={name} items={value.map(v => {
                            return {
                                label: v,
                                onClick: () => { chooseGame(name, v); setOpen(false) }
                            }
                        })} /> :
                        <Button key={i} hoverIndicator onClick={() => chooseGame(name, "")}> {name} </Button>
                )}
            </Box>
        </Box>
    );
}

export default Header;
