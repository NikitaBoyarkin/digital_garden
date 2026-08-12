import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navbar.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Navbar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <nav class={`navbar ${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => {
            const external = link.startsWith("http")
            return (
              <li>
                <a
                  href={link}
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
