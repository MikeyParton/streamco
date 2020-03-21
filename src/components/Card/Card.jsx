import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css';

const DEFAULT_THUMBNAIL = './placeholder.png';

function Card({
  to,
  thumbnail = DEFAULT_THUMBNAIL,
  title,
  description
}) {
  const imgClasses = [
    'card__thumbnail',
    thumbnail === DEFAULT_THUMBNAIL && 'card__thumbnail--default'
  ].filter(Boolean)
  .join(' ');

  return (
    <Link className="card" to={to}>
      <div className="card__main">
        <img className={imgClasses} alt={title} src={thumbnail} />
        {title && <p className="card__title">{title}</p>}
      </div>
      <p className="card__description">{description}</p>
    </Link>
  );
}

export default React.memo(Card);
