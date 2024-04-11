import Navbar from '@/components/Navbar';
import Setting from '@/components/Settings';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';
import { ReactNode } from 'react';



export const metadata: Metadata = {
  title: 'vidWave',
  description: 'Build by Jutech Dev',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">
            <Setting />
            {children}
            </div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
