import React from 'react';
import { Menu } from 'antd';

export const MenuComp = (props) => {
    const [current, setcurrent] = useState('All');
    const isMobile = navigator.userAgentData.mobile;
    const handleClick = e => {
        setcurrent(e.key)
      };
    return (
        <Menu onClick={this.handleClick} onClick={handleClick} selectedKeys={[current]} mode={isMobile ? "vertical" : "horizontal"}>
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