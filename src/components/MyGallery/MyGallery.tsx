import { Div, Group } from '@vkontakte/vkui';
import './MyGallery.scss';

interface MyGalleryProps {
  images: (Preview | undefined)[];
}

export const MyGallery = ({ images }: MyGalleryProps) => {
  return (
    <Group className="MyGallery">
      <Div className="MyGallery__topImage">
        {images[0] && <img src={images[0].sizes.x.url} alt="" style={{ width: '100%', height: '100%' }} />}
      </Div>
      {/* style={{ padding: 0, display: 'flex', justifyContent: 'space-between', gap: '3px' }} */}
      <Div className="MyGallery__images">
        {images[1] && <img src={images[1].sizes.x.url} />}
        {images[2] && <img src={images[2].sizes.x.url} />}
        {images[3] && <img src={images[3].sizes.x.url} />}
      </Div>
    </Group>
  );
};
