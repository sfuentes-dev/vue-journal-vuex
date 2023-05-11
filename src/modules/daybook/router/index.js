export default {
  name: 'daybook',
  component: () => import('@/modules/daybook/layouts/DaybookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('@/modules/daybook/views/NoEntrySelected.vue')
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import('@/modules/daybook/views/EntryView.vue')
    }
  ]
}
