//ACCORDIAN DATA
const accordian = [
  {
    id  : '1',
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id  : '2',
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id  : '3',
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id  : '4',
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

//CAROUSEL DATA
const carousel = [
  { title: 'Slide 1', description: 'This is the first slide.', imgUrl: 'https://picsum.photos/id/564/600/300' },
  { title: 'Slide 2', description: 'This is the second slide.', imgUrl: 'https://picsum.photos/id/362/600/300' },
  { title: 'Slide 3', description: 'This is the third slide.', imgUrl: 'https://picsum.photos/id/353/600/300' },
];

//TREE VIEW MENU
const treemenu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children : [
                {
                    label : 'Random data',
                    to : ''
                }
            ]
          },
        ],
      },
    ],
  },
];

const tabs = [
  {
    label: "Tab 1",
    content: "<div>This is content for Tab 1</div>",
  },
  {
    label: "Tab 2",
    content: "<div>This is content for Tab 2</div>",
  },
  {
    label: "Tab 3",
    content: "<div>This is content for Tab 3</div>",
  },
];

const data = {
  accordian,
  carousel,
  treemenu,
  tabs,
}
export default data;