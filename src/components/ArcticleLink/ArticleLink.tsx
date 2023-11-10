import { Icon20ArticleOutline, Icon24ChevronRightSmallOutline } from '@vkontakte/icons';
import { Card, Cell, Subhead } from '@vkontakte/vkui';

export const ArticleLink = () => {
  return (
    <Card mode="outline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Cell>
        <Icon20ArticleOutline />
      </Cell>
      <Subhead>Смоленск в смуту</Subhead>
      <Cell>
        <Icon24ChevronRightSmallOutline />
      </Cell>
    </Card>
  );
};
