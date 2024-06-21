import cn from 'classnames';
import styles from './Template.module.scss';

type TemplateProps = {
  className?: string;
};

export function Template({ className }: TemplateProps) {
  const wrapperClassName = cn(styles.wrapper, className);

  return <div className={wrapperClassName}>Template</div>;
}
