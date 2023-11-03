declare module 'eruda-dom' {
  import { Eruda, Tool } from 'eruda';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export default function <T extends Tool>(eruda: Eruda): T {}
}

declare module 'eruda-code' {
  import { Eruda, Tool } from 'eruda';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export default function <T extends Tool>(eruda: Eruda): T {}
}
