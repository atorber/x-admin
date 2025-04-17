import { $t } from "@/plugins/i18n";
import { appstore } from "@/router/enums";

export default {
  path: "/appstore",
  redirect: "/appstore/index",
  meta: {
    icon: "ep/set-up",
    title: $t("menus.pureAppStore"),
    rank: appstore
  },
  children: [
    {
      path: "/appstore/index",
      name: "AppStore",
      component: () => import("@/views/appstore/card/index.vue"),
      meta: {
        title: $t("menus.pureAppStore")
      }
    }
  ]
} satisfies RouteConfigsTable;
