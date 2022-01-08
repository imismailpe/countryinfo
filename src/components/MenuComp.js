import React, { useState } from 'react';
import { Menu } from 'antd';

const MenuComp = (props) => {
    const [current, setcurrent] = useState('All');
    const handleClick = e => {
        setcurrent(e.key)
      };
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode={props.mode}>
            <Menu.Item key="All">
                All
            </Menu.Item>
            <Menu.Item key="Asia">
                Asia
            </Menu.Item>
            <Menu.Item key="Europe">
                Europe
            </Menu.Item>
        </Menu>
    )
}
export default MenuComp;