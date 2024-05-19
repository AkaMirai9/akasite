import cardContentIconStyle from 'domain/const/home/card-content-icon-style';
import { CardContentType } from 'domain/type/home/card-content-type';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';

const cardsContent: CardContentType[] = [
  {
    title: 'home.cards.education.title',
    description: 'home.cards.education.description',
    className: 'education',
    icon: <AutoStoriesOutlinedIcon sx={cardContentIconStyle} />,
    route: '/education'
  },
  {
    title: 'home.cards.experience.title',
    description: 'home.cards.experience.description',
    className: 'experiences',
    icon: <WorkOutlineOutlinedIcon sx={cardContentIconStyle} />,
    route: '/experiences'
  },
  {
    title: 'home.cards.myself.title',
    description: 'home.cards.myself.description',
    className: 'myself',
    icon: <PersonOutlineOutlinedIcon sx={cardContentIconStyle} />,
    route: '/myself'
  },
  {
    title: 'home.cards.projects.title',
    description: 'home.cards.projects.description',
    className: 'projects',
    icon: <KeyboardAltOutlinedIcon sx={cardContentIconStyle} />,
    route: '/projects'
  }
];

export default cardsContent;
