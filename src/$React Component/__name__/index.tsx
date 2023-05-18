import cn from 'classnames';

import styles from './index.module.less';

export interface {{name}}Props {
  className?: string;
}

export function {{name}}({ className }: {{name}}Props) {
  return <div className={cn(styles.container, className)}>{{name}}</div>;
}
