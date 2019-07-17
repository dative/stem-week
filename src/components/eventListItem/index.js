import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import {
  faBookReader,
  faTag,
  faArrowRight,
} from '@fortawesome/pro-regular-svg-icons'
import moment from 'moment'
import './style.scss'

const EventListItem = ({
  title,
  hostedBy,
  eventUrl,
  startDate,
  endDate,
  grade,
  study,
}) => {
  const r = /^(http|https):\/\/[^ "]+$/
  const start = moment(startDate)
  const end = moment(endDate)
  return (
    <div className="event-list-item">
      <div className="event-list-item--content">
        {title && <h3>{title}</h3>}
        {hostedBy && <p>Hosted By {hostedBy}</p>}
        {eventUrl && (
          <a
            href={r.test(eventUrl) ? eventUrl : `http://${eventUrl}`}
            target="_blank"
            className="learn-more"
          >
            Learn more <FontAwesomeIcon icon={faArrowRight} />
          </a>
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
      </aside>
    </div>
  )
}

export default EventListItem
