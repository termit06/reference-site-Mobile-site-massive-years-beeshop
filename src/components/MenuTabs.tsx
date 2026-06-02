import React from "react";

import {
    MenuTabDto
} from "../types/menu/menu.types";

import {
    Tab,
    Tabs,
} from "@mui/material";

interface MenuTabsProps {
    value: number, //номер включенного таба
    tabMenu: MenuTabDto[], //массив табов
    onChangeTabPanel: (value: number) => void; //изменение состояния таба (эмит)
}

const MenuTabs = (props: MenuTabsProps) => {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        props.onChangeTabPanel(newValue); // возврат в родиельский компонент
    };

    return <Tabs
        value={props.value}
        orientation="vertical"
        variant="scrollable"
        textColor="inherit"
        onChange={handleChange}
        sx={{
            borderRight: 1,
            borderColor: 'divider'
        }}
    >
        {props.tabMenu.map((menu, key) => (
            <Tab
                label={menu.label}
                key={'menu-' + key}
            />
        ))}
    </Tabs>
}

export default MenuTabs;