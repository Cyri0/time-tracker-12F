import type { TimeEvent } from "../types/Event"

type EventCardProps = {
    data: TimeEvent
}

const EventCard = ({data} : EventCardProps) => {

  const lower = (data.title).toLowerCase()

  return (
    <div>
        <header style={{background: `var(--color-${lower})`}}>
            <img src={`/images/icon-${lower}.svg`} alt="" />
        </header>
        
    </div>
  )
}

export default EventCard