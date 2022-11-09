import { useStyleTag } from "/Users/laiyuejia/projects/library/node_modules/vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "/Users/laiyuejia/projects/library/node_modules/vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "/Users/laiyuejia/projects/library/node_modules/vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "/Users/laiyuejia/projects/library/node_modules/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("./iconfont.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});