import { CardContentType } from 'domain/type/home/card-content-type';

export type HomeCardProps = CardContentType & {
  onClick: (route: string) => () => void;
};
