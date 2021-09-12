import classNames from 'classnames';

import styles from './SampleProjectCard.module.scss';

const tagToIcon = (tag) => {
  const map = {
    react: 'fa-react',
    sass: 'fa-sass',
    node: 'fa-node',
    python: 'fa-python',
    html5: 'fa-html5',
    css3: 'fa-css3',
    javascript: 'fa-js-square',
    git: 'fa-github',
  };

  return tag in map ? map[tag] : null;
};

export const SampleProjectCard = ({
  className,
  demoUrl,
  description,
  dangerousDescription,
  sourceUrl,
  sourceUrls,
  tags,
  title,
}) => (
  <div className={classNames(styles.container, className)}>
    <div>
      <header>
        <div className={styles.title}>
          {demoUrl ? (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        <div className={styles.projectLinks}>
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
          {sourceUrls &&
            sourceUrls.map(({ tag, url }) => (
              <a href={url} target="_blank" rel="noreferrer">
                {tag}
              </a>
            ))}
        </div>
      </header>
      {description ? (
        <div className={styles.description}>{description}</div>
      ) : (
        <div
          className={styles.description}
          dangerouslySetInnerHTML={dangerousDescription}
        ></div>
      )}
    </div>

    <div className={styles.tags}>
      {tags
        .filter((t) => tagToIcon(t) !== null)
        .map((tag) => (
          <i
            className={classNames(styles.tag, 'fab', tagToIcon(tag))}
            key={tag}
          />
        ))}
    </div>
  </div>
);
