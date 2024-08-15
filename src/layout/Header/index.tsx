import cn from 'classnames';
import styles from './Header.module.scss';

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const wrapperClassName = cn(styles.wrapper, className);

  return <div className={wrapperClassName}>Header</div>;
}
