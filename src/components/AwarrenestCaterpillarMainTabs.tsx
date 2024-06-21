import React, { useState } from 'react';
import EveryonesNests from './EveryonesNests';
import MyNests from './MyNests';

type Tab = {
  name: string;
  href: string;
  component: React.FC;
};

const AwarrenestCaterpillarMainTabs: React.FC = () => {
  const tabs: Tab[] = [
    {
        name: "My Nests",
        href: "MyNests",
        component: MyNests,
      },
    {
      name: "Everyone's Nests",
      href: "EveryonesNests",
      component: EveryonesNests,
    },
   
  ];

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };

  const renderComponent = () => {
    const SelectedComponent = tabs[selectedTabIndex].component;
    return <SelectedComponent />;
  };

  return (
    <>
    <section>
    <div className='flex items-center justify-center '>
    <div className="my-4 py-4 b-4 w-full">
      <div className="lg:mb-0 md:mb-2">
        <nav
          className="-mb-px items-center flex justify-center gap-3  rounded-[8px] rounded-b-none border-b-2 border-white "
          aria-label="Tabs"
        >
          {tabs.map((tab, index) => (
            <a
              key={tab.name}
              href={tab.href}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(index);
              }}
              className={`whitespace-nowrap py-2 px-[40px] font-medium flex lg:gap-2 items-center ${
                index === selectedTabIndex
                  ? 'text-[#646464] text-[17px] bg-white rounded-[8px] rounded-b-none'
                  : 'text-[#888888] text-[17px] hover:text-gray-700 bg-[#e2e5f8]  rounded-[8px] rounded-b-none  '
              }`}
              aria-current={index === selectedTabIndex ? 'page' : undefined}
            >
              <span>{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="tab-content">{renderComponent()}</div>
    </div>
    </div>
    </section>
    
    
    </>
    
  );
};

export default AwarrenestCaterpillarMainTabs;
