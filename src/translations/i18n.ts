import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "sk",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    sk: {
      translation: {
        menu: {
          orders: "Objednávky",
        },
        switcher: {
          pending: "Čakajúce",
          completed: "Dokončené",
        },
        orderItem: {
          total: "Spolu",
          cancel: "Zrušiť",
          state: {
            completed: "Dokončené",
            canceled: "Zrušené zákazníkom",
            rejected: "Zamietnuté",
            expired: "Expirované",
            failed: "Neúspešné",
            new: "Nové",
            waiting: "Čakajúce na potvrdenie",
            confirmed: "Potvrdené",
          },
        },
      },
    },
    en: {
      translation: {
        menu: {
          orders: "Orders",
        },
        switcher: {
          pending: "Pending",
          completed: "Completed",
        },
        orderItem: {
          total: "Total",
          cancel: "Cancel",
          state: {
            completed: "Completed",
            canceled: "Canceled by customer",
            rejected: "Rejected",
            expired: "Expired",
            failed: "Failed",
            new: "New",
            waiting: "Waiting for confirmation",
            confirmed: "Confirmed",
          },
        },
      },
    },
  },
});

export default i18n;
