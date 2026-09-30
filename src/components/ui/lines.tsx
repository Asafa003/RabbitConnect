import { Fragment } from "react";

/**
 * Renders copy as one flowing paragraph, but restores the design's hard line
 * breaks at the `wide` breakpoint (1440px+), where column widths match the
 * Figma frame. Below that the text simply wraps to the available width.
 */
export function Lines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, index) => (
    <Fragment key={line}>
      {line}
      {index < lines.length - 1 && (
        <>
          {" "}
          <br className="max-wide:hidden" />
        </>
      )}
    </Fragment>
  ));
}
