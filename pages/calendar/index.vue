<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        themeSystem: 'bootstrap5',
        // businessHours: true,
        weekends: false,
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
          { title: "hello there,\n how are you ", startStr: '2022-09-01',
           endStr: '2022-09-01', start: new Date(), end: new Date(),
            color: '#F1416C', description: 'Lecture' 
          },
          { title: 'test', start: new Date( new Date().setDate( new Date().getDate() + 1 ) ), end: new Date( new Date().setDate( new Date().getDate() + 2 ) ), description: 'Lecture', color: '#00A3FF' }
        ],
      }
    }
  }
}
</script>

<template>
  <h1>Demo App</h1>
  <div class="card">
    <FullCalendar :options='calendarOptions'/>
  </div>
</template>

<style>
.fc-event-title {
  white-space: pre-wrap;
}
</style>