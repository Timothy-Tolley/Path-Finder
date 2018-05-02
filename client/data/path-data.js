import finalMessage from ''

// Second Level
const posAdminResp = []
const webAppResp = [
  {
    label: 'work in field - gain 5 yrs experience',
    options: [
      {
        title: 'SENIOR DEVELOPER',
        description: 'I lead web app and online tool projects for the company to use',
        responses: finalMessage
      },
      {
        title: 'DIGITAL MARKETING LEAD',
        description: 'I create digital marketing campaigns and manage influencers',
        responses: finalMessage
      },
      {
        title: 'STRATEGY DESIGNER',
        description: 'I use analytics and data to design systems to sell more for the company',
        responses: finalMessage
      }
    ]
  }
]

// First Level
const accDegResp = []
const busDegResp = []
const itDegResp = [{
  label: '',
  options: [
    {
      title: 'POS ADMINISTRATOR',
      description: 'Manage in-store and online point of sale system',
      responses: posAdminResp
    },
    {
      title: 'WEB APPLICATIONS',
      description: 'Creating and managing online stores and marketing',
      responses: webAppResp
    }]
}]
const hrDegResp = []
const warehousingResp = []
const receptionResp = []
const shopFloorResp = []

// baseLevel
const baseLevel = [
  {
    label: 'higher education',
    options: [
      {
        title: 'ACCOUNTING DEGREE',
        description: 'I like working with numbers and problem solving',
        responses: accDegResp
      },
      {
        title: 'BUSINESS DEGREE',
        description: 'I like challenges and growing a project',
        responses: busDegResp
      },
      {
        title: 'IT DEGREE',
        description: 'I like working with computers and the internet',
        responses: itDegResp
      },
      {
        title: 'HUMAN RESOURCES DEGREE',
        description: 'I like working with people and managing projects',
        responses: hrDegResp
      }
    ]
  },
  {
    label: 'Work in the Field',
    options: [
      {
        title: 'WAREHOUSING',
        description: 'I like making efficient systems and like fitness',
        responses: warehousingResp
      },
      {
        title: 'RECEPTION',
        description: 'I like helping people and being efficient',
        responses: receptionResp
      },
      {
        title: 'SHOP FLOOR',
        description: 'I like being in a retail environment and making sales',
        responses: shopFloorResp
      }
    ]
  }
]

export default baseLevel
