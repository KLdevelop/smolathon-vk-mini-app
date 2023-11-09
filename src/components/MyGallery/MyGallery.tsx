import { Div, Group } from '@vkontakte/vkui';
import Smolensk from '../../data/Smolensk.png';

export const MyGallery = () => {
  return (
    <Group>
      <Div style={{ padding: 0 }}>
        <img src={Smolensk} alt="" style={{ width: '100%', height: '100%' }} />
      </Div>
      <Div style={{ padding: 0,display:'flex',justifyContent:"space-around" }}>
        <img  src={Smolensk} style={{width:'32%',height:"102px"}}/>
        <img  src={Smolensk} style={{width:'32%',height:"102px"}}/>
        <img  src={Smolensk} style={{width:'32%',height:"102px"}}/>
      </Div>
    </Group>
  );
};
