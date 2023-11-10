
interface Props{
    status:string
}
export const StatusBlock = ({status}:Props) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        padding: '3px 5px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        borderRadius: '8px',
        marginBottom: '4px',
        background: colors[status],
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '14px',
        letterSpacing: '0.2px',
      }}
    >
      {status}
    </div>
  );
};

const colors:{ [key: string]: string }  = {
  'Пройдено': '#4BB34B',
  'Доступно': '#3F8AE0',
  'Закрыто': '#C4C8CC',
};
