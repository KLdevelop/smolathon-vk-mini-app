import { Icon16Done } from '@vkontakte/icons';
import { Icon24DismissSubstract } from '@vkontakte/icons';
import { Avatar, Snackbar } from '@vkontakte/vkui';
import { ReactNode } from 'react';

const Message = {
  0: 'Ответ неверный! Вы потеряли 1 очко своего здоровья.',
  1: 'Правильный ответ! Вы нанесли 1 урон по боссу.',
};
interface Props {
  status: boolean; // true= верный ответ  false= неверный ответ
  setSnackbar: (val: null | ReactNode) => void;
  snackbar: ReactNode;
}

export const MySnackbar = ({ status, setSnackbar, snackbar }: Props) => {
  if (!snackbar) return <div></div>;
  return (
    <Snackbar
      onClose={() => {
        setSnackbar(null);
      }}
      before={
        <Avatar size={24}>{status ? <Icon16Done fill="#4BB34B" /> : <Icon24DismissSubstract fill="#E64646" />}</Avatar>
      }
    >
      {Message[status ? 1 : 0]}
    </Snackbar>
  );
};

// Интрукция по использованию
// const [snackbar,setSnackbar] = useState<null|ReactNode>(null) //создание состояния
// <button onClick={()=>{setSnackbar(<div></div>)}}>вызвать</button> //  для вызова передаем РеактНод
// <MySnackbar  status={true} setSnackbar={setSnackbar} snackbar={snackbar}/>
