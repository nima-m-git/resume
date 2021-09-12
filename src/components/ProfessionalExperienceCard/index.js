import styles from './ProfessionalExperienceCard.module.scss';

export const ProfessionalExperienceCard = ({
  companyName,
  jobTitle,
  location,
  responsibilities,
  timeRange,
}) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <div>
        {jobTitle && <div className={styles.jobTitle}>{jobTitle}</div>}

        <div className={styles.companyName}>{companyName}</div>
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

    <ul className={styles.responsibilities}>
      {responsibilities.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  </div>
);
