import { ContentCard } from '@vkontakte/vkui';
import './CardContent.scss';

interface CardContentProps {
	onClick: () => void,
	img: string,
	estimationTime: string,
	title: string, description: string, type: string, reward: string
}

export const CardContent = ({ onClick, img, estimationTime, title, description, type, reward }: CardContentProps) => {
	return <ContentCard
		onClick={onClick}
		src={img}
		alt="Picture of person's left hand with pink paint"
		subtitle={estimationTime}
		header={title}
		text={description}
		caption={`${type} ${reward}`}
		maxHeight={500}
	/>
};