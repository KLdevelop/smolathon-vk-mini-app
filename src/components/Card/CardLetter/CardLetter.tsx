import { DisabledInput } from "@/components/InpGroup";
import { Div } from "@vkontakte/vkui";
import { CardTitle } from "../CardTitle";

export const CardLetter = () => {
  return (
    <CardTitle title="БУКВЫ КОДОВОГО СЛОВА">
      <Div style={{ display: 'flex', justifyContent: 'space-between', padding: 0, flexWrap: 'wrap' }}>
        <DisabledInput value="M" />
        <DisabledInput value="Ч" />
        <DisabledInput value="?" />
        <DisabledInput value="?" />
        <DisabledInput value="?" />
      </Div>
    </CardTitle>
  );
};
