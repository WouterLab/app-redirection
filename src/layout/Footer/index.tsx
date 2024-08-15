import cn from 'classnames';
import styles from './Footer.module.scss';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const wrapperClassName = cn(styles.wrapper, className);

  return <div className={wrapperClassName}>Footer</div>;
}
