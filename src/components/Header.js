import { Box, Button, Heading, Menu } from 'grommet';
import { List } from "grommet-icons";
import React, { useState } from 'react';

function Header(props) {
    const [open, setOpen] = useState(false);
    let onClick = props.onClick;
    let items = props.items;

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
                style={{ position: "fixed", zIndex: 10 }}
            >
                <Button
                    height="50px"
                    width="50px"
                    padding="10px"
                    margin="5px 20px"
                    onClick={() => { setOpen(!open) }}
                >
                    <List style={{ borderRadius: "200px", border: "1px solid white", padding: "5px" }} />
                </Button>
                <Heading level={4}>Segal's Mind Games</Heading>
            </Box>
            <Box style={{ width: "100%", height: "100%", position: "fixed", display: open ? "block" : "none", zIndex: 11 }}
                onClick={() => { setOpen(false) }}
            />
            <Box
                background="white"
                round="small"
                pad="small"
                gap="small"
                style={{ position: "absolute", display: open ? "block" : "none", marginTop: "50px", zIndex: 12 }}>
                {Object.entries(items).map(([name, value], i) =>
                    typeof (value) === "object" ?
                        <Menu key={i} label={name} items={value.map(v => {
                            return {
                                label: v,
                                onClick: () => { onClick(name, v); setOpen(false) }
                            }
                        })} /> :
                        <Button key={i} hoverIndicator onClick={() => { onClick(value, ""); setOpen(false) }}> {name} </Button>
                )}
            </Box>
        </Box>
    );
}

export default Header;
