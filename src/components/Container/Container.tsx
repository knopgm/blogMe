import './Container.css';

type ContainerProps = {
  children: React.ReactElement;
};

export function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
