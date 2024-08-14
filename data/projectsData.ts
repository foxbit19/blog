interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'SoloImpact',
    description: `SoloImpact is a task management app designed specifically for solopreneurs. It helps you prioritize your daily tasks by assigning them an impact score, allowing you to focus on what truly matters for your business.`,
    imgSrc: '/static/images/soloimpact.png',
    href: 'https://soloimpact.vercel.app',
  },
  /*{
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  }, */
]

export default projectsData
