import type { IfProps } from '@dls/components/If/interfaces';

function If({ condition, elseRender, children }: IfProps) {
  return condition ? children : elseRender ?? null;
}

export default If;
