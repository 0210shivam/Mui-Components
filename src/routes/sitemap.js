import { mainPaths } from "./path";

const sitemap = [
   {
      id: 1,
      title: "Dashboard",
      pageTitle: "Dashboard",
      icon: "material-symbols:home-outline-rounded",
      path: mainPaths.dashboard,
      subtitle: "Welcome to your Dashboard",
   },
   {
      id: 2,
      title: "Magic QR",
      icon: "ic:round-qr-code",
      path: mainPaths.magicQR,
      subtitle: "Collect constructive feedback and positive reviews to help us elevate your experience!",
   },
   {
      id: 3,
      title: "Magic Link",
      icon: "ic:round-link",
      path: mainPaths.magicLink,
      subtitle: "All Your Links on One Page: Simplify Your Online Presence.",
   },
   {
      id: 4,
      title: "Reviews",
      icon: "proicons:star",
      path: mainPaths.reviews,
      subtitle: "Manage your feedbacks from here",
   },
   {
      id: 5,
      title: "Lead Automation",
      icon: "ic:baseline-whatsapp",
      path: mainPaths.leadAutomation,
      subtitle: "Automate Your Leads from here",
   },
   {
      id: 6,
      title: "Settings",
      icon: "bx:customize",
      path: mainPaths.customize,
      subtitle: "Change Your Project Settings from here",
   },
   // {
   //    id: 7,
   //    title: "Business",
   //    icon: "material-symbols-light:business-center-outline",
   //    path: mainPaths.business,
   //    subtitle: "Dashboard",
   // },
   {
      id: 8,
      title: "Plans",
      icon: "mynaui:rupee-solid",
      path: mainPaths.plans,
      subtitle: "Manage Your Plans from here.",
   },
]

export default sitemap;
