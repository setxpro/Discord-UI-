import React, { useState } from 'react';
import { 
    Container,
    HashtagChannelIcon,
    ContentHashAndName,
    ContentActions,
    AddUserIcon,
    SettingsIcon
} from './styles';

// import { Container } from './styles';

interface ChannelButtonProps {
    channel: string;
    id: number; // react-router-dom
}

const ChannelButton: React.FC<ChannelButtonProps> = ({channel}) => {

    const [isActiveChannel, setIsActiveChannel] = useState(false);

    const toggleActiveChannel = () => setIsActiveChannel(!isActiveChannel);

  return (
    <Container onClick={toggleActiveChannel}>
        <ContentHashAndName>
            <HashtagChannelIcon/>
            <p>{channel}</p>
        </ContentHashAndName>
        <ContentActions>
            <AddUserIcon toggle={isActiveChannel}/>
            <SettingsIcon toggle={isActiveChannel}/>
        </ContentActions>
    </Container>
  );
}

export default ChannelButton;