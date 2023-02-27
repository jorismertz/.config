// These don't exactly match react's types
// But they're close enough to help with autocomplete

interface React {
  useEffect: (callback: () => void, deps?: any[]) => void;
  useRef: (initialState: any) => { current: any };
  useState: <T>(initialState: T) => [T, (v: T) => void];
  useMemo: (callback: () => any, deps: any[]) => any;
  useCallback: (callback: () => any, deps: any[]) => any;
  useContext: (context: any) => any;
  useReducer: (reducer: any, initialState: any) => [any, (state: any) => void];
  useLayoutEffect: (callback: () => void, deps: any[]) => void;
  createElement: (type: string, props: any, ...children: any[]) => JSX.Element;
}

type Methods = "GET" | "POST" | "PUT" | "DELETE";

declare module "uebersicht" {
  function css(css: TemplateStringsArray, ...any: any[]): void;
  function styled(css: TemplateStringsArray, ...any: any[]): void;
  // This function could be typed better but i prefer just using the native fetch api anyway.
  function request(method: Methods, url: string): unknown;
  function run(command: string): Promise<string>;
  const React: React;

  export { css, React, run, styled, request };
}
