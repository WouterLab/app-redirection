import cn from 'classnames';
import styles from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const wrapperClassName = cn(styles.wrapper, className);

  return <div className={wrapperClassName}>Sidebar</div>;
}
