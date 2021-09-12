import styles from './EducationCard.module.scss';

export const EducationCard = ({
  description,
  location,
  responsibilities = [],
  specialty,
  timeRange,
  title,
}) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <div>
        {title && <div className={styles.title}>{title}</div>}

        <div className={styles.specialty}>{specialty}</div>
      </div>

      <div className={styles.metaInfo}>
        <div className={styles.infoPoint}>
          {timeRange}
          <i className={`${styles.metaIcon} fas fa-calendar`} />
        </div>

        {location && (
          <div className={styles.infoPoint}>
            {location}
            <i className={`${styles.metaIcon} fas fa-map-marker-alt`} />
          </div>
        )}
      </div>
    </header>

    <div className={styles.description}>{description}</div>
    <ul className={styles.responsibilities}>
      {responsibilities.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  </div>
);
