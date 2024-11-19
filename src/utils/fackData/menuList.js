export const menuList = [
  {
    id: 0,
    name: "Accueil",
    path: "#",
    icon: "fa-home",
    dropdownMenu: [],
  },
  {
    id: 1,
    name: "Qualité",
    path: "/",
    icon: "feather-alert-circle",
    dropdownMenu: [],
  },
  {
    id: 2,
    name: "Reporting",
    path: "#",
    icon: "feather-cast",
    dropdownMenu: [
      {
        id: 1,
        name: "Pilotage CD92",
        path: "/reports/sales",
        subdropdownMenu: false,
      },
    ],
  },
  {
    id: 3,
    name: "Supervision",
    path: "#",
    icon: "feather-send",
    dropdownMenu: [
      {
        id: 1,
        name: "Host status",
        path: "/applications/chat",
        subdropdownMenu: false,
      },
      {
        id: 2,
        name: "Service Status",
        path: "/applications/email",
        subdropdownMenu: false,
      },
    ],
  },
  {
    id: 4,
    name: "Ticketing",
    path: "#",
    icon: "feather-layout",
    dropdownMenu: [
      {
        id: 1,
        name: "Communication",
        path: "/proposal/list",
        subdropdownMenu: false,
      },
      {
        id: 2,
        name: "Incidents",
        path: "/proposal/view",
        subdropdownMenu: false,
      },
      {
        id: 3,
        name: "Demandes",
        path: "/proposal/edit",
        subdropdownMenu: false,
      },
      {
        id: 4,
        name: "Changements",
        path: "/proposal/create",
        subdropdownMenu: false,
      },
      {
        id: 5,
        name: "Problèmes",
        path: "/proposal/create",
        subdropdownMenu: false,
      },
    ],
  },
  {
    id: 5,
    name: "CMDB",
    path: "#",
    icon: "feather-dollar-sign",
    dropdownMenu: [
      {
        id: 1,
        name: "Liste des CIs",
        path: "/payment/list",
        subdropdownMenu: false,
      },
      {
        id: 2,
        name: "Propriétaire des CIs",
        path: "/payment/view",
        subdropdownMenu: false,
      },
    ],
  },
  {
    id: 6,
    name: "Astreinte",
    path: "#",
    icon: "feather-users",
    dropdownMenu: [
      {
        id: 1,
        name: "Backlog",
        path: "/customers/list",
        subdropdownMenu: false,
      },
      {
        id: 2,
        name: "Rapports",
        path: "/customers/view",
        subdropdownMenu: false,
      },
      {
        id: 3,
        name: "Reporting",
        path: "/customers/create",
        subdropdownMenu: false,
      },
    ],
  },
  {
    id: 7,
    name: "Planning",
    path: "#",
    icon: "fa-calendar",
    dropdownMenu: [],
  },
  {
    id: 8,
    name: "Comptes AD",
    path: "#",
    icon: "feather-briefcase",
    dropdownMenu: [],
  },
];
