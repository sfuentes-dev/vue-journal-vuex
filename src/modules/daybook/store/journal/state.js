export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae deserunt impedit praesentium iste eius commodi in soluta corporis quidem aut necessitatibus repellendus voluptates, eaque, obcaecati pariatur optio, veniam quo?',
      picture: null
    },

    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae deserunt impedit praesentium iste eius commodi in soluta corporis quidem aut necessitatibus repellendus voluptates, eaque, obcaecati pariatur optio, veniam quo?',
      picture: null
    },

    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae deserunt impedit praesentium iste eius commodi in soluta corporis quidem aut necessitatibus repellendus voluptates, eaque, obcaecati pariatur optio, veniam quo?',
      picture: null
    }
  ]
})
