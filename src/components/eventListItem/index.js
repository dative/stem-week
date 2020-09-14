import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import { faBookReader, faTag } from '@fortawesome/pro-regular-svg-icons'
import moment from 'moment'
import './style.scss'

const EventListItem = ({
  title,
  summary,
  hostedBy,
  eventUrl,
  startDate,
  endDate,
  grade,
  study,
  contact,
  picture,
}) => {
  const r = /^(http|https):\/\/[^ "]+$/
  const start = moment(startDate)
  const end = moment(endDate)
  return (
    <div className="event-list-item">
      {picture && picture.length > 0 && (
        <div className="event-list-item--picture">
          <img src={picture} alt={`${title} event picture`} />
        </div>
      )}

      <div className="event-list-item--content">
        {title &&
          (eventUrl && eventUrl.length > 0 ? (
            <a
              href={r.test(eventUrl) ? eventUrl : `http://${eventUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{title}</h3>
            </a>
          ) : (
            <h3>{title}</h3>
          ))}
        {hostedBy && <p className="hostedBy">Hosted By {hostedBy}</p>}
        {summary && <p>{summary}</p>}
        {contact && (
          <div className="contact-info">
            Contact: {contact.name}{' '}
            {contact.phone &&
              contact.phone.length > 0 &&
              ` | ${contact.phone} `}
            {contact.email && contact.email.length > 0 && (
              <>
                | <a href={`mailto:${contact.email}`}>email</a>
              </>
            )}
          </div>
        )}
      </div>
      <aside>
        <ul>
          {start && start !== null && (
            <li>
              <FontAwesomeIcon icon={faCalendarAlt} />
              {start.format('dddd, MMM. Do')}
            </li>
          )}

          {start && start !== null && end && end !== null && (
            <li>
              <FontAwesomeIcon icon={faClock} />
              {`${start.format('h:mma')}–${end.format('h:mma')}`}
            </li>
          )}
          {study && study !== null && (
            <li>
              <FontAwesomeIcon icon={faTag} /> {study}
            </li>
          )}

          {grade && grade !== null && (
            <li>
              <FontAwesomeIcon icon={faBookReader} /> {grade}
            </li>
          )}
        </ul>
        {eventUrl && (
          <a
            href={r.test(eventUrl) ? eventUrl : `http://${eventUrl}`}
            target="_blank"
            className="btn btn-danger btn-sm btn-block"
            rel="noreferrer"
          >
            Sign Up
          </a>
        )}
      </aside>
    </div>
  )
}

export default EventListItem
