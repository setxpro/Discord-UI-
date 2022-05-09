import React from 'react';
import { Channelbtn } from '../../db/Channelbtn';
import ChannelButton from '../ChannelButton';

import { 
    Container,
    Category,
    AddCategoryIcon
} from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
          <Category>
              <span>Canais de Texto</span>
              <AddCategoryIcon/>
          </Category>
            {Channelbtn.map((channel, index) => (
                <ChannelButton
                    key={index}
                    id={channel.id}
                    channel={channel.name}
                />
            ))}
      </Container>
  );
}

export default ChannelList;