import React from 'react';

import { Button } from './styles';

export interface ServerButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ServerButtonProps> = ({ selected, isHome, hasNotifications, mentions }) => {
  return <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? 'active' : ''}

  >{isHome && <img src="https://uploads-ssl.webflow.com/5d5ab0de3f2789196e87264e/5e5ae172512f4e2c03a090b0_discord_icon_200x200.png"/>}</Button>;
}

export default ServerButton;