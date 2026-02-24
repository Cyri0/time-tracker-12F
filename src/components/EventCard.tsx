import type { TimeEvent, TimeFramesType } from "../types/Event"

type EventCardProps = {
  data: TimeEvent,
  timeframes: TimeFramesType
}

function EventCard ({data, timeframes}: EventCardProps){
  const small = data.title.toLowerCase().replaceAll(" ", "-")

  return (
    <div>
      <header style={{ background: `var(--color-${small})` }}>
        <img src={`/images/icon-${small}.svg`} alt={data.title} />
      </header>
      <section>
        <h1>{data.title}</h1>

        <h1>
          {timeframes == "daily" && data.timeframes.daily.current}
          {timeframes == "monthly" && data.timeframes.monthly.current}
          {timeframes == "weekly" && data.timeframes.weekly.current}          
          hrs
        </h1>

        {timeframes == "daily" && <div>Yesterday {data.timeframes.daily.previous}hrs</div>}
        {timeframes == "weekly" && <div>Last Week {data.timeframes.weekly.previous}hrs</div>}
        {timeframes == "monthly" && <div>Last Month {data.timeframes.monthly.previous}hrs</div>}
      </section>
    </div>
  )
}

export default EventCard