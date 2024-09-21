import React, { useState } from 'react';
import UseStateHook from '../hooks/UseStateHook';
import PaginationFooter from './PaginationFooter';

const Events = () => {
  const { data, dataLoading } = UseStateHook("http://localhost:8080/api/events");
  const [page, setPage] = useState(1);

  // Check if data and data.events are defined
  if (dataLoading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner if you prefer
  }

  if (!data || !data.events || data.events.length === 0) {
    return <p>No events available.</p>; // Handle cases where no events are available
  }

  return (
    <>
      <div>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center">
                <h2 className="mb-4">Our Latest Events</h2>
              </div>
            </div>
            <div className="row">
              {data.events.slice((page - 1) * 6, page * 6).map((event, index) => (
                <div key={index} className="col-md-4 d-flex">
                  <div className="blog-entry align-self-stretch">
                    <a href="event-single.html" className="block-20" style={{ backgroundImage: `url(${event.img})` }}>
                    </a>
                    <div className="text p-4 d-block">
                      <div className="meta mb-3">
                        <div><a href="#">{event.eventDate.month}. {event.eventDate.day}, {event.eventDate.year}</a></div>
                        <div><a href="#">Admin</a></div>
                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                      </div>
                      <h3 className="heading mb-4"><a href="#">{event.title}</a></h3>
                      <p className="time-loc">
                        <span className="mr-2"><i className="icon-clock-o"></i> {event.startTime.timeValHour}:{event.startTime.timeValMinute}{event.startTime.period} - {event.endTime.timeValHour}:{event.endTime.timeValMinute}{event.endTime.period}</span>
                        <span><i className="icon-map-o"></i> Venue Main Campus</span>
                      </p>
                      <p>{event.desc}</p>
                      <p><a href="event.html">Join Event <i className="ion-ios-arrow-forward"></i></a></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PaginationFooter data={data.events} page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Events;
