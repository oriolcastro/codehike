import { HeavyCode, CodeProps } from "./heavy-code"
import {
  CodeTween,
  CodeStep,
  CodeConfig,
} from "./code-tween"
import { CodeAnnotation } from "./step-parser"
import {
  highlightTween,
  highlightCode,
} from "./highlighter"
import { Code } from "./oldcode"
import { CodeSpring } from "./code-spring"
import { mapFocusToLineNumbers } from "./focus-parser"

export {
  CodeTween,
  CodeSpring,
  CodeAnnotation,
  CodeStep,
  CodeConfig,
  mapFocusToLineNumbers,
  // Deprecated:
  HeavyCode,
  Code,
  CodeProps,
  highlightCode,
  highlightTween,
}
