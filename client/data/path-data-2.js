// TEMPLATE
// const template = [{
//   label: '',
//   options: [
//     {
//       title: '',
//       description: '',
//       id: ,
// selected: 'unassigned',
// responses: nextStep
//     },
//     {
//       title: '',
//       description: '',
//       id: ,
// selected: 'unassigned',
// responses: nextStep
//     }]
// }]

// Variable have to be defined before they are used - Since the order isnt always linear, you will have to move some declarations to the top.
export const catBrandManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the image and product from the entire brand',
      id: 68,
      selected: 'unassigned',
      responses: false
    }]
}]
// H

// Eigth Level

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
      title: 'Option 2 Selections',
      description: 'Manage the image and stock of the brand/category',
      id: 67,
      selected: 'unassigned',
      responses: catBrandManResp2
    }]
}]
export const buyerResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the image and stock of the brand/category',
      id: 66,
      selected: 'unassigned',
      responses: catBrandManResp2
    }]
}]
export const regionalManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage all the stores in the Region',
      id: 65,
      selected: 'unassigned',
      responses: false
    }]
}]
export const multiSiteManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage all the stores in the Region',
      id: 64,
      selected: 'selected',
      responses: false
    }]
}]
// H

// Seventh Level

// A
// B
// C
// D
export const ceo2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'CEO or GM of an entire Brand',
      id: 63,
      selected: 'selected',
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
      title: 'Option 2 Selections',
      description: 'Plan the seasons trends for the buyer',
      id: 62,
      selected: 'unassigned',
      responses: plannerResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Source the product for the Brand',
      id: 61,
      selected: 'unassigned',
      responses: buyerResp2
    }]
}]
export const instoreVmResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage Visual Merchandising for the entire brand',
      id: 60,
      selected: 'selected',
      responses: false
    }]
}]
export const storeManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage all the stores in a Region',
      id: 59,
      selected: 'unassigned',
      responses: regionalManResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Manager multiple shops in a region',
      id: 58,
      selected: 'unassigned',
      responses: multiSiteManResp2
    }]
}]
// H

// Sixth Level

// A H
export const accManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Financial Controller for the brand',
      id: 57,
      selected: 'unassigned',
      responses: ceo2
    }]
}]
// B
// C
export const proManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the Technology used across the brand',
      id: 55,
      selected: 'selected',
      responses: false
    }]
}]
// D
export const hrManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'General Manager of Human Resources',
      id: 54,
      selected: 'unassigned',
      responses: ceo2
    }]
}]
// E
// F
export const paResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage an Entire Office',
      id: 53,
      selected: 'selected',
      responses: false
    }]
}]
// G
export const assistManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Assist buyer and learn from them',
      id: 52,
      selected: 'unassigned',
      responses: buyAssistResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Instore Visual Merchandiser',
      id: 51,
      selected: 'unassigned',
      responses: instoreVmResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Manage an entire store',
      id: 50,
      selected: 'unassigned',
      responses: storeManResp2
    }]
}]

// Fifth Level

// A H
export const assistAccResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the business accounts',
      id: 49,
      selected: 'unassigned',
      responses: accManResp2
    }]
}]
export const commResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the Marketing of the entire Brand',
      id: 46,
      selected: 'unassigned',
      responses: ceo2
    }]
}]
// C
export const techSuppResp2 = [{
  label: 'work in field - gain 5 yrs experience',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Run the operations of the brand',
      id: 45,
      selected: 'unassigned',
      responses: proManResp2
    }]
}]
// D
export const trainDevResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage HR across the company',
      id: 44,
      selected: 'unassigned',
      responses: hrManResp2
    }]
}]
// E
export const logisticResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage stock for the entire brand',
      id: 43,
      selected: 'selected',
      responses: false
    }]
}]
// F
export const custServiceResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the day to day life of a high level Employee',
      id: 42,
      selected: 'unassigned',
      responses: paResp2
    }]
}]
// G
export const traineeManResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Assist the store manager in the running of the business',
      id: 41,
      selected: 'unassigned',
      responses: assistManResp2
    }]
}]

// Forth Level

// A H
export const credControlResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Help a team manage the Accounts',
      id: 40,
      selected: 'unassigned',
      responses: assistAccResp2
    }]
}]
export const accRecievResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Help a team manage the Accounts',
      id: 39,
      selected: 'unassigned',
      responses: assistAccResp2
    }]
}]
export const accPayableResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Help a team manage the Accounts',
      id: 38,
      selected: 'unassigned',
      responses: assistAccResp2
    }]
}]
// B
export const promoResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the Marketing of the entire Brand',
      id: 35,
      selected: 'unassigned',
      responses: ceo2
    }]
}]
export const advertResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Communicate with brand partners',
      id: 34,
      selected: 'unassigned',
      responses: commResp2
    }]
}]
export const marketAssistResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the Marketing of the entire Brand',
      id: 33,
      selected: 'unassigned',
      responses: ceo2
    }]
}]
// C
export const posAdminResp2 = [{
  label: 'work in field - gain 5 yrs experience',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage the Tech used in retail stores',
      id: 32,
      selected: 'unassigned',
      responses: techSuppResp2
    }]
}]
export const webAppResp2 = [{
  label: 'work in field - gain 5 yrs experience',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'I lead web app and online tool projects for the company to use',
      id: 31,
      selected: 'unassigned',
      responses: ceo2
    },
    {
      title: 'Option 2 Selections',
      description: 'I create digital marketing campaigns and manage influencers',
      id: 30,
      selected: 'unassigned',
      responses: ceo2
    },
    {
      title: 'Option 2 Selections',
      description: 'I use analytics and data to design systems to sell more for the company',
      id: 29,
      selected: 'unassigned',
      responses: ceo2
    }]
}]
// D
export const hrAssistResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Train and Develop Staff',
      id: 28,
      selected: 'unassigned',
      responses: trainDevResp2
    }]
}]
// E
export const wareSuperResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage Logistics and Stock',
      id: 27,
      selected: 'unassigned',
      responses: logisticResp2
    }]
}]
// F
export const adminResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Customer service representative',
      id: 26,
      selected: 'unassigned',
      responses: custServiceResp2
    }]
}]
// G
export const trainManagerResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 25,
      selected: 'unassigned',
      responses: traineeManResp2
    }]
}]

// Third Level

// A
export const accDegResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 24,
      selected: 'unassigned',
      responses: credControlResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 23,
      selected: 'unassigned',
      responses: accRecievResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 22,
      selected: 'unassigned',
      responses: accPayableResp2
    }]
}]
// B
export const busDegResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Assist buyer and learn from them',
      id: 21,
      selected: 'unassigned',
      responses: buyAssistResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Promote brands and their values to the consumer',
      id: 20,
      selected: 'unassigned',
      responses: promoResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Help the Advertising Team and generate sales',
      id: 19,
      selected: 'unassigned',
      responses: advertResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Help the Marketing Team',
      id: 18,
      selected: 'unassigned',
      responses: marketAssistResp2
    }]
}]

// C
export const itDegResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Manage in-store and online point of sale system',
      id: 17,
      selected: 'unassigned',
      responses: posAdminResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 16,
      selected: 'unassigned',
      responses: webAppResp2
    }]
}]
// D
export const hrDegResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Assistant in HR',
      id: 15,
      selected: 'unassigned',
      responses: hrAssistResp2
    }]
}]
// E
export const warehousingResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 14,
      selected: 'unassigned',
      responses: wareSuperResp2
    }
  ]
}]
// F
export const receptionResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Office administration and Support',
      id: 13,
      selected: 'unassigned',
      responses: adminResp2
    }]
}]
// G
export const shopFloorResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 12,
      selected: 'unassigned',
      responses: trainManagerResp2
    }]
}]
// H
export const dataEntryResp2 = [{
  label: '',
  options: [
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 11,
      selected: 'unassigned',
      responses: credControlResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 10,
      selected: 'unassigned',
      responses: accRecievResp2
    },
    {
      title: 'Option 2 Selections',
      description: 'Creating and managing online stores and marketing',
      id: 9,
      selected: 'unassigned',
      responses: accPayableResp2
    }]
}]

// Second Level

export const baseLevel2 = [
  {
    label: 'HIGHER EDUCATION',
    options: [
      // A
      {
        title: 'Option 2 Selections',
        description: 'I like working with numbers and problem solving',
        id: 8,
        selected: 'unassigned',
        responses: accDegResp2
      },
      // B
      {
        title: 'Option 2 Selections',
        description: 'I like challenges and growing a project being efficient being efficient',
        id: 7,
        selected: 'unassigned',
        responses: busDegResp2
      },
      // C
      {
        title: 'Option 2 Selections',
        description: 'I like working with computers and the internet',
        id: 6,
        selected: 'unassigned',
        responses: itDegResp2
      },
      // D
      {
        title: 'Option 2 Selections',
        description: 'I like working with people and managing projects',
        id: 5,
        selected: 'unassigned',
        responses: hrDegResp2
      }
    ]
  },
  {
    label: 'WORK IN THE FIELD',
    options: [
      // E
      {
        title: 'Option 2 Selections',
        description: 'I like making efficient systems and like fitness',
        id: 4,
        selected: 'unassigned',
        responses: warehousingResp2
      },
      // F
      {
        title: 'Option 2 Selections',
        description: 'I like helping people and being efficient being efficient being efficient',
        id: 3,
        selected: 'unassigned',
        responses: receptionResp2
      },
      // G
      {
        title: 'Option 2 Selections',
        description: 'I like being in a retail environment and making sales',
        id: 2,
        selected: 'unassigned',
        responses: shopFloorResp2
      },
      // H
      {
        title: 'Option 2 Selections',
        description: 'I like working with numbers and being given tasks',
        id: 1,
        selected: 'unassigned',
        responses: dataEntryResp2
      }
    ]
  }
]
