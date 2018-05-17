// TEMPLATE
// const template = [{
//   label: '',
//   options: [
//     {
//       title: '',
//       description: '',
//       id: ,
//       responses: nextStep
//     },
//     {
//       title: '',
//       description: '',
//       id: ,
//       responses: nextStep
//     }]
// }]

// Eigth Level

// A
// B
// C
// D
// E
// F
// G
// H

// Seventh Level

// A
// B
// C
// D
// E
// F
// G
export const catBrandManResp2 = [{
  label: '',
  options: [
    {
      title: 'MERCHANDISE MANAGER',
      description: 'Manage the image and product from the entire brand',
      id: 68,
      responses: false
    }]
}]
// H

// Sixth Level

// A
// B
// C
// D
// E
// F
// G
export const plannerResp2 = [{
  label: '',
  options: [
    {
      title: 'CATEGORY/ BRAND MANAGER',
      description: 'Manage the image and stock of the brand/category',
      id: 67,
      responses: catBrandManResp2
    }]
}]
export const buyerResp2 = [{
  label: '',
  options: [
    {
      title: 'CATEGORY/ BRAND MANAGER',
      description: 'Manage the image and stock of the brand/category',
      id: 66,
      responses: catBrandManResp2
    }]
}]
export const regionalManResp = [{
  label: '',
  options: [
    {
      title: 'NATIONAL RETAIL OPS',
      description: 'Manage all the stores in the Region',
      id: 65,
      responses: false
    }]
}]
export const multiSiteManResp = [{
  label: '',
  options: [
    {
      title: 'NATIONAL RETAIL OPS',
      description: 'Manage all the stores in the Region',
      id: 64,
      responses: false
    }]
}]
// H

// Fifth Level

// A
// B
// C
// D
export const ceo = [{
  label: '',
  options: [
    {
      title: 'CEO/GENERAL MANAGER',
      description: 'CEO or GM of an entire Brand',
      id: 63,
      responses: false
    }]
}]
// E
// F
// G
export const buyAssistResp2 = [{
  label: '',
  options: [
    {
      title: 'PLANNER',
      description: 'Plan the seasons trends for the buyer',
      id: 62,
      responses: plannerResp2
    },
    {
      title: 'BUYER',
      description: 'Source the product for the Brand',
      id: 61,
      responses: buyerResp2
    }]
}]
export const instoreVmResp = [{
  label: '',
  options: [
    {
      title: 'VISUAL MERCHANDISING MANAGER',
      description: 'Manage Visual Merchandising for the entire brand',
      id: 60,
      responses: false
    }]
}]
export const storeManResp = [{
  label: '',
  options: [
    {
      title: 'REGIONAL MANAGER',
      description: 'Manage all the stores in a Region',
      id: 59,
      responses: regionalManResp
    },
    {
      title: 'MULTI-SITE MANAGER',
      description: 'Manager multiple shops in a region',
      id: 58,
      responses: multiSiteManResp
    }]
}]
// H

// Forth Level

// A H
export const accManResp = [{
  label: '',
  options: [
    {
      title: 'CFO',
      description: 'Financial Controller for the brand',
      id: 57,
      responses: ceo
    }]
}]
// B
export const catBrandManResp = [{
  label: '',
  options: [
    {
      title: 'MERCHANDISE MANAGER',
      description: 'Manage the image and product from the entire brand',
      id: 56,
      responses: false
    }]
}]
// C
export const proManResp = [{
  label: 'work in field - gain 5 yrs experience',
  options: [
    {
      title: 'IT/ DESIGN MANAGER',
      description: 'Manage the Technology used across the brand',
      id: 55,
      responses: false
    }]
}]
// D
export const hrManResp = [{
  label: '',
  options: [
    {
      title: 'GM HUMAN RESOURCES',
      description: 'General Manager of Human Resources',
      id: 54,
      responses: ceo
    }]
}]
// E
// F
export const paResp = [{
  label: '',
  options: [
    {
      title: 'OFFICE MANAGER',
      description: 'Manage an Entire Office',
      id: 53,
      responses: false
    }]
}]
// G
export const assistManResp = [{
  label: '',
  options: [
    {
      title: "BUYER'S ASSISTANT",
      description: 'Assist buyer and learn from them',
      id: 52,
      responses: buyAssistResp2
    },
    {
      title: 'INSTORE VM',
      description: 'Instore Visual Merchandiser',
      id: 51,
      responses: instoreVmResp
    },
    {
      title: 'STORE MANAGER',
      description: 'Manage an entire store',
      id: 50,
      responses: storeManResp
    }]
}]

// Third Level

// A H
export const assistAccResp = [{
  label: '',
  options: [
    {
      title: 'ACCOUNTS MANAGER',
      description: 'Manage the business accounts',
      id: 49,
      responses: accManResp
    }]
}]
// B
export const plannerResp = [{
  label: '',
  options: [
    {
      title: 'CATEGORY/ BRAND MANAGER',
      description: 'Manage the image and stock of the brand/category',
      id: 48,
      responses: catBrandManResp
    }]
}]
export const buyerResp = [{
  label: '',
  options: [
    {
      title: 'CATEGORY/ BRAND MANAGER',
      description: 'Manage the image and stock of the brand/category',
      id: 47,
      responses: catBrandManResp
    }]
}]
export const commResp = [{
  label: '',
  options: [
    {
      title: 'Marketing Manager',
      description: 'Manage the Marketing of the entire Brand',
      id: 46,
      responses: ceo
    }]
}]
// C
export const techSuppResp = [{
  label: 'work in field - gain 5 yrs experience',
  options: [
    {
      title: 'Project Management',
      description: 'Run the operations of the brand',
      id: 45,
      responses: proManResp
    }]
}]
// D
export const trainDevResp = [{
  label: '',
  options: [
    {
      title: 'HR MANAGER',
      description: 'Manage HR across the company',
      id: 44,
      responses: hrManResp
    }]
}]
// E
export const logisticResp = [{
  label: '',
  options: [
    {
      title: 'WAREHOUSE MANAGER',
      description: 'Manage stock for the entire brand',
      id: 43,
      responses: false
    }]
}]
// F
export const custServiceResp = [{
  label: '',
  options: [
    {
      title: 'PERSONAL ASSISTANT',
      description: 'Manage the day to day life of a high level Employee',
      id: 42,
      responses: paResp
    }]
}]
// G
export const traineeManResp = [{
  label: '',
  options: [
    {
      title: 'ASSISTANT MANAGER',
      description: 'Assist the store manager in the running of the business',
      id: 41,
      responses: assistManResp
    }]
}]

// Second Level

// A H
export const credControlResp = [{
  label: '',
  options: [
    {
      title: 'ASSISTANT ACCOUNTANT',
      description: 'Help a team manage the Accounts',
      id: 40,
      responses: assistAccResp
    }]
}]
export const accRecievResp = [{
  label: '',
  options: [
    {
      title: 'ASSISTANT ACCOUNTANT',
      description: 'Help a team manage the Accounts',
      id: 39,
      responses: assistAccResp
    }]
}]
export const accPayableResp = [{
  label: '',
  options: [
    {
      title: 'ASSISTANT ACCOUNTANT',
      description: 'Help a team manage the Accounts',
      id: 38,
      responses: assistAccResp
    }]
}]
// B
export const buyAssistResp = [{
  label: '',
  options: [
    {
      title: 'PLANNER',
      description: 'Plan the seasons trends for the buyer',
      id: 37,
      responses: plannerResp
    },
    {
      title: 'BUYER',
      description: 'Source the product for the Brand',
      id: 36,
      responses: buyerResp
    }]
}]
export const promoResp = [{
  label: '',
  options: [
    {
      title: 'Marketing Manager',
      description: 'Manage the Marketing of the entire Brand',
      id: 35,
      responses: ceo
    }]
}]
export const advertResp = [{
  label: '',
  options: [
    {
      title: 'COMMUNICATIONS',
      description: 'Communicate with brand partners',
      id: 34,
      responses: commResp
    }]
}]
export const marketAssistResp = [{
  label: '',
  options: [
    {
      title: 'Marketing Manager',
      description: 'Manage the Marketing of the entire Brand',
      id: 33,
      responses: ceo
    }]
}]
// C
export const posAdminResp = [{
  label: 'work in field - gain 5 yrs experience',
  options: [
    {
      title: 'TECHNICAL SUPPORT',
      description: 'Manage the Tech used in retail stores',
      id: 32,
      responses: techSuppResp
    }]
}]
export const webAppResp = [{
  label: 'work in field - gain 5 yrs experience',
  options: [
    {
      title: 'SENIOR DEVELOPER',
      description: 'I lead web app and online tool projects for the company to use',
      id: 31,
      responses: false
    },
    {
      title: 'DIGITAL MARKETING LEAD',
      description: 'I create digital marketing campaigns and manage influencers',
      id: 30,
      responses: false
    },
    {
      title: 'STRATEGY DESIGNER',
      description: 'I use analytics and data to design systems to sell more for the company',
      id: 29,
      responses: false
    }]
}]
// D
export const hrAssistResp = [{
  label: '',
  options: [
    {
      title: 'TRAINING AND DEVELOPMENT',
      description: 'Train and Develop Staff',
      id: 28,
      responses: trainDevResp
    }]
}]
// E
export const wareSuperResp = [{
  label: '',
  options: [
    {
      title: 'LOGISTICS/INVENTORY CONTROL',
      description: 'Manage Logistics and Stock',
      id: 27,
      responses: logisticResp
    }]
}]
// F
export const adminResp = [{
  label: '',
  options: [
    {
      title: 'CUSTOMER SERVICE',
      description: 'Customer service representative',
      id: 26,
      responses: custServiceResp
    }]
}]
// G
export const trainManagerResp = [{
  label: '',
  options: [
    {
      title: 'TRAINEE MANAGER',
      description: 'Creating and managing online stores and marketing',
      id: 25,
      responses: traineeManResp
    }]
}]

// First Level

// A
export const accDegResp = [{
  label: '',
  options: [
    {
      title: 'CREDIT CONTROL',
      description: 'Creating and managing online stores and marketing',
      id: 24,
      responses: credControlResp
    },
    {
      title: 'ACCOUNTS RECEIVABLE',
      description: 'Creating and managing online stores and marketing',
      id: 23,
      responses: accRecievResp
    },
    {
      title: 'ACCOUNTS PAYABLE',
      description: 'Creating and managing online stores and marketing',
      id: 22,
      responses: accPayableResp
    }]
}]
// B
export const busDegResp = [{
  label: '',
  options: [
    {
      title: "BUYER'S ASSISTANT",
      description: 'Assist buyer and learn from them',
      id: 21,
      responses: buyAssistResp
    },
    {
      title: 'PROMOTIONS',
      description: 'Promote brands and their values to the consumer',
      id: 20,
      responses: promoResp
    },
    {
      title: 'ADVERTISING',
      description: 'Help the Advertising Team and generate sales',
      id: 19,
      responses: advertResp
    },
    {
      title: 'MARKETING ASSISTANT',
      description: 'Help the Marketing Team',
      id: 18,
      responses: marketAssistResp
    }]
}]

// C
export const itDegResp = [{
  label: '',
  options: [
    {
      title: 'POS ADMINISTRATOR',
      description: 'Manage in-store and online point of sale system',
      id: 17,
      responses: posAdminResp
    },
    {
      title: 'WEB APPLICATIONS',
      description: 'Creating and managing online stores and marketing',
      id: 16,
      responses: webAppResp
    }]
}]
// D
export const hrDegResp = [{
  label: '',
  options: [
    {
      title: 'HR ASSISTANT',
      description: 'Assistant in HR',
      id: 15,
      responses: hrAssistResp
    }]
}]
// E
export const warehousingResp = [{
  label: '',
  options: [
    {
      title: 'WAREHOUSE SUPERVISOR',
      description: 'Creating and managing online stores and marketing',
      id: 14,
      responses: wareSuperResp
    }
  ]
}]
// F
export const receptionResp = [{
  label: '',
  options: [
    {
      title: 'SUPPORT/ OFFICE ADMIN',
      description: 'Office administration and Support',
      id: 13,
      responses: adminResp
    }]
}]
// G
export const shopFloorResp = [{
  label: '',
  options: [
    {
      title: 'TRAINEE MANAGER',
      description: 'Creating and managing online stores and marketing',
      id: 12,
      responses: trainManagerResp
    }]
}]
// H
export const dataEntryResp = [{
  label: '',
  options: [
    {
      title: 'CREDIT CONTROL',
      description: 'Creating and managing online stores and marketing',
      id: 11,
      responses: credControlResp
    },
    {
      title: 'ACCOUNTS RECEIVABLE',
      description: 'Creating and managing online stores and marketing',
      id: 10,
      responses: accRecievResp
    },
    {
      title: 'ACCOUNTS PAYABLE',
      description: 'Creating and managing online stores and marketing',
      id: 9,
      responses: accPayableResp
    }]
}]

// baseLevel

export const baseLevel = [
  {
    label: 'HIGHER EDUCATION',
    options: [
      // A
      {
        title: 'ACCOUNTING DEGREE',
        description: 'I like working with numbers and problem solving',
        id: 8,
        responses: accDegResp
      },
      // B
      {
        title: 'BUSINESS DEGREE',
        description: 'I like challenges and growing a project being efficient being efficient',
        id: 7,
        responses: busDegResp
      },
      // C
      {
        title: 'IT DEGREE',
        description: 'I like working with computers and the internet',
        id: 6,
        responses: itDegResp
      },
      // D
      {
        title: 'HUMAN RESOURCES DEGREE',
        description: 'I like working with people and managing projects',
        id: 5,
        responses: hrDegResp
      }
    ]
  },
  {
    label: 'WORK IN THE FIELD',
    options: [
      // E
      {
        title: 'WAREHOUSING',
        description: 'I like making efficient systems and like fitness',
        id: 4,
        responses: warehousingResp
      },
      // F
      {
        title: 'RECEPTION',
        description: 'I like helping people and being efficient being efficient being efficient',
        id: 3,
        responses: receptionResp
      },
      // G
      {
        title: 'SHOP FLOOR',
        description: 'I like being in a retail environment and making sales',
        id: 2,
        responses: shopFloorResp
      },
      // H
      {
        title: 'DATA ENTRY',
        description: 'I like working with numbers and being given tasks',
        id: 1,
        responses: dataEntryResp
      }
    ]
  }
]
