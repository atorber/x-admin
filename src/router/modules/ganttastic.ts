import { $t } from "@/plugins/i18n";
import { ganttastic } from "@/router/enums";

export default {
  path: "/ganttastic",
  redirect: "/ganttastic/index",
  meta: {
    icon: "ri/bar-chart-horizontal-line",
    title: $t("menus.pureGanttastic"),
    showLink: false,
    rank: ganttastic
  },
  children: [
    {
      path: "/ganttastic/index",
      name: "Ganttastic",
      component: () => import("@/views/ganttastic/index.vue"),
      meta: {
        title: $t("menus.pureGanttastic")
      }
    }
  ]
} satisfies RouteConfigsTable;
