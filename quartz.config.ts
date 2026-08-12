import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "EQ in IT",
    pageTitleSuffix: " · цифровой сад",
    enableSPA: true,
    enablePopovers: true,
    locale: "ru-RU",
    baseUrl: "nikitaboyarkin.github.io/digital_garden",
    ignorePatterns: ["private", "templates", ".obsidian", ".DS_Store", ".trash", "*.excalidraw.md"],
    defaultDateType: "modified",
    analytics: null,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf7f2",
          lightgray: "#e8e2d9",
          gray: "#b8b0a4",
          darkgray: "#4d4640",
          dark: "#2b2724",
          secondary: "#a85a3c",
          tertiary: "#7c8f6f",
          highlight: "rgba(168, 90, 60, 0.10)",
          textHighlight: "rgba(246, 193, 119, 0.45)",
        },
        darkMode: {
          light: "#1c1a17",
          lightgray: "#2e2b27",
          gray: "#5c5750",
          darkgray: "#d6cfc4",
          dark: "#ece5da",
          secondary: "#d08a64",
          tertiary: "#9bb195",
          highlight: "rgba(208, 138, 100, 0.15)",
          textHighlight: "rgba(217, 164, 65, 0.40)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
