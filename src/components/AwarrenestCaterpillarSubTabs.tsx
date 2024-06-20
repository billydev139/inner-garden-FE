import React, { useState } from "react";
import Gardens from "./Gardens";
import Adversities from "./Adversities";
import Activities from "./Activities";
type Tab = {
  name: string;
  href: string;
  component: React.FC;
};
const AwarrenestCaterpillarSubTabs: React.FC = () => {
  const tabs: Tab[] = [
    {
      name: "gardens",
      href: "gardens",
      component: Gardens,
    },
    {
      name: "Adversitites",
      href: "adversities",
      component: Adversities,
    },
    {
      name: "activities",
      href: "activities",
      component: Activities,
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
      <div className="flex items-center justify-center ">
        <div className="my-4 py-4 b-4 w-full">
          <div className="lg:mb-0 md:mb-2 flex items-center gap-2 justify-center">
            <nav
              className="-mb-px items-center flex justify-center rounded-[20px] border-[1px] border-purple-light bg-white"
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
                  className={`whitespace-nowrap py-2 px-[40px]  font-medium flex lg:gap-2 items-center ${
                    index === selectedTabIndex
                      ? "text-white font-semibold font-montserrat-alternates text-[18px] bg-secondary rounded-[20px]"
                      : "text-purple-dark font-montserrat-alternates font-semibold text-[18px] hover:text-gray-700 "
                  }`}
                  aria-current={index === selectedTabIndex ? "page" : undefined}
                >
                  <span>{tab.name}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="tab-content">{renderComponent()}</div>
        </div>
      </div>
    </>
  );
};

export default AwarrenestCaterpillarSubTabs;
