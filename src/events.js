const now = new Date()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    selected: false,
    visable: true
  },
  {
    id: 1,
    title: 'PPL Class - @28/202',
    start: new Date('September 14, 2020 02:00:00'),
    end: new Date('September 14, 2020 04:00:00'),
    type: 'Class',
    selected: false,
    visable: true
  },
  {
    id: 2,
    title: 'PPL Class - @92/001',
    start: new Date('September 15, 2020 02:00:00'),
    end: new Date('September 15, 2020 04:00:00'),
    type: 'Class',
    selected: true,
    visable: false
  },

  {
    id: 3,
    title: 'Speed Dating @Bengi',
    start: new Date('September 15, 2020 05:00:00'),
    end: new Date('September 15, 2020 08:00:00'),
    type: 'Aguda'
  },
  {
    id: 3,
    title: 'Computer Science Meal',
    start: new Date('September 14, 2020 04:00:00'),
    end: new Date('September 14, 2020 08:00:00'),
    type: 'Social',
    selected: true,
    visable: false
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    selected: true,
    visable: false
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
    selected: true,
    visable: false
  },
]