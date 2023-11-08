import { Card, Cell, Div, Text, Title } from '@vkontakte/vkui';
import { Icon20PlaceOutline } from '@vkontakte/icons';
import { Icon20PhoneOutline } from '@vkontakte/icons';
import { Icon20MailOutline } from '@vkontakte/icons';
import { Icon20GlobeOutline } from '@vkontakte/icons';

interface CardAddressProps {
  street: string | null;
  phone: string | null;
  email: string | null;
  web: string | null;
}
export const CardAddress = ({ street, phone, email, web }: CardAddressProps) => {
  return (
    <Card mode="outline">
      <Div>
        <Title level="3" style={{ color: 'var(--vkui--color_text_secondary)' }}>
          АДРЕС И КОНТАКТЫ
        </Title>
      </Div>
      {street && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Cell>
            <Icon20PlaceOutline color="var(--vkui--color_text_secondary)" />
          </Cell>
          <Text>{street}</Text>
        </div>
      )}
      {phone && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Cell>
            <Icon20PhoneOutline color="var(--vkui--color_text_secondary)" />
          </Cell>
          <Text>{phone}</Text>
        </div>
      )}
      {email && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Cell>
            <Icon20MailOutline color="var(--vkui--color_text_secondary)" />
          </Cell>
          <Text>{email}</Text>
        </div>
      )}
      {web && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Cell>
            <Icon20GlobeOutline color="var(--vkui--color_text_secondary)" />
          </Cell>
          <Text>{web}</Text>
        </div>
      )}
    </Card>
  );
  <Div></Div>;
};
