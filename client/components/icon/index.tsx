import star from './Star_light.svg';
import glowingStar from './Star_light_0.svg';
import trash from './Trash_light.svg';
import addButton from './Add_square_light.svg';

const icons: any = {
  starUrl: star,
};

type Props = {};

const Icon = (props: any) => {
  return <img src={icons[props.name]} />;
};

export default Icon;
