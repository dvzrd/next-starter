import { ReactNode } from 'react';

const RootTemplate = ({ children }: { children: ReactNode }) => (
  <>
    <header>Root Template Header</header>
    <main>{children}</main>
    <footer>Root Template Footer</footer>
  </>
);

export default RootTemplate;
