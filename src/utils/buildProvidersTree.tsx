import { ReactNode, JSX } from "react";

type ComponentsWithProps = [
  JSX.ElementType,
  { [key: string]: any } | undefined
][];

const buildProvidersTree = (componentsWithProps: ComponentsWithProps) => {
  const initialComponent = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
  };

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      // eslint-disable-next-line react/display-name
      return ({ children }: { children: ReactNode }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};

export default buildProvidersTree;
