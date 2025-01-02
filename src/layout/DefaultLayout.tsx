
import React, { ReactNode, useState } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
  pathname: string;
  hiddenOnRoutes: string[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, pathname, hiddenOnRoutes }) => {

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">


          <main>
<<<<<<< HEAD
            <div className="mx-auto max-w-screen-3xl">
=======
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
>>>>>>> c7c184b2bc4fe9c61a0def55ea0378bb70f47b20
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
