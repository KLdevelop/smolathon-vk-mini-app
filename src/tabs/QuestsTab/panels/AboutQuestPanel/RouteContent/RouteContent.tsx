import { Group, CardGrid } from '@vkontakte/vkui';
import './RouteContent.scss';
import { YanMap, CardAttraction, ModalIDs } from '@/components';
import { useAppDispatch, useOpenModal } from '@/hooks';
import { setAttractionData } from '@/redux/slices';

interface RouteContentProps {
  questData: QuestData;
}

export const RouteContent = ({ questData }: RouteContentProps) => {
  const { steps } = questData;
  const dispatch = useAppDispatch();
  const openAttractionModal = useOpenModal(ModalIDs.AttractionModal);
  const onAttractionClick = (step: Step) => {
    dispatch(setAttractionData(step));
    openAttractionModal();
  };

  return (
    <Group className="routeContent">
      <div style={{ height: '300px', padding: 0 }}>
        <YanMap steps={steps} />
      </div>
      <CardGrid size="l" className="routeContent__attractions">
        {steps.map((step) => (
          <CardAttraction
            onClick={() => onAttractionClick(step)}
            key={step.id}
            num={step.order}
            title={step.name}
            type={step.place_type}
            address={step.address}
            img={step.images.length > 0 && step.images[0] ? step.images[0].sizes.m.url : undefined}
          />
        ))}
      </CardGrid>
    </Group>
  );
};
