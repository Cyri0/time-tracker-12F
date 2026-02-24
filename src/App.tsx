import { useEffect, useState } from "react"
import { getData } from "./services/service"
import type { TimeEvent } from "./types/Event"
import EventCard from "./components/EventCard"

function App() {
  const [events, setEvents] = useState<TimeEvent[]>([])

  useEffect(()=>{    
    getData().then(res => setEvents(res))
  },[])

  return (
    <>
    <h1>Hello</h1>
    {events.map(e => <EventCard data={e} />)}
    </>
  )
}

export default App
