import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navbar.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Navbar: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    // pathToRoot gives a relative path to the site root from the current page.
    // This keeps links correct both on GitHub Pages (served under /digital_garden/)
    // and in local dev (served at /). Absolute root paths like "/С-чего-начать"
    // would escape the project subpath and 404 on project Pages.
    const baseDir = pathToRoot(fileData.slug!)
    return (
      <nav class={`navbar ${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => {
            const external = link.startsWith("http")
            const href = external
              ? link
              : link === "/"
                ? baseDir
                : joinSegments(baseDir, link.replace(/^\//, ""))
            return (
              <li>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  Navbar.css = style
  return Navbar
}) satisfies QuartzComponentConstructor
