import classNames from 'classnames';

import styles from './ContactLink.module.scss';

export const ContactLink = ({
  children,
  className,
  icon,
  iconPrefix,
  link,
}) => (
  <div className={classNames(styles.container, className)}>
    <a className={styles.link} href={link} target="_blank" rel="noreferrer">
      {children}

      <i className={classNames(styles.icon, iconPrefix, icon)} />
    </a>
  </div>
);

ContactLink.defaultProps = {
  iconPrefix: 'far',
};
