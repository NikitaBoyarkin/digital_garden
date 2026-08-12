import Graph from "./Graph"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { concatenateResources } from "../util/resources"
import style from "./styles/graph-full.scss"

// Full-bleed graph for the dedicated /graph page. Wraps the regular Graph
// component so the local graph renders large in the main content column.
const GraphComp = Graph()

const GraphFull: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <div class="graph-full">
      <GraphComp {...props} />
    </div>
  )
}

GraphFull.afterDOMLoaded = GraphComp.afterDOMLoaded
GraphFull.beforeDOMLoaded = GraphComp.beforeDOMLoaded
GraphFull.css = concatenateResources(GraphComp.css, style)

export default (() => GraphFull) satisfies QuartzComponentConstructor
