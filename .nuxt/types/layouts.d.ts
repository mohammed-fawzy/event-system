import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "components-app-menu" | "components-app-menu-item" | "components-app-sidebar" | "components-app-topbar" | "composables-layout" | "default"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}