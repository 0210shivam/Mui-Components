export const rootPaths = {
   root: '/',
   pagesRoot: 'pages',
   subPagesRoot: 'sub-pages',
   authRoot: 'auth',
   onBoardRoot: 'onboard'
};

export const authPaths = {
   signin: `/${rootPaths.authRoot}/sign-in`,
   signup: `/${rootPaths.authRoot}/sign-up`,
};

export const mainPaths = {
   dashboard: `/${rootPaths.pagesRoot}/dashboard`,
   magicQR: `/${rootPaths.pagesRoot}/magic-qr`,
   magicLink: `/${rootPaths.pagesRoot}/magic-link`,
   reviews: `/${rootPaths.pagesRoot}/reviews`,
   leadAutomation: `/${rootPaths.pagesRoot}/lead-automation`,
   customize: `/${rootPaths.pagesRoot}/customize`,
   business: `/${rootPaths.pagesRoot}/business`,
   plans: `/${rootPaths.pagesRoot}/plans`,
   test: `/${rootPaths.pagesRoot}/test`,
};

export const subPaths = {
   feedbackForm: `/${rootPaths.subPagesRoot}/feedback-form`,
   enquiries: `/${rootPaths.subPagesRoot}/enquiries`,
}

export const onBoardPaths = {
   onBoard: `/${rootPaths.onBoardRoot}/onboard`,
   onBoard1: `/${rootPaths.onBoardRoot}/onboard-1`,
   onBoard2: `/${rootPaths.onBoardRoot}/onboard-2`
};
