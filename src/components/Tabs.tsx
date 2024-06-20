"use client";

import React, { useState, useEffect } from "react";
import Journals from "./Journal";
import Paths from "./Paths";
import Wellgorithm from "./Wellgorithm";
import { useParams, usePathname, useRouter } from "next/navigation";

type Tab = {
  name: string;
  href: string;
  component: React.FC;
};

const Tabs: React.FC = () => {
  const params = useParams();
  const { details } = params;

  const pathname = usePathname() ?? '';
  const router = useRouter();

  const tabs: Tab[] = [
    {
      name: "Journals",
      href: "journals",
      component: Journals,
    },
    { name: "Wellgorithm", href: "wellgorithm", component: Wellgorithm },
    { name: "Paths", href: "paths", component: Paths },
  ];

  function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleTabClick = (tab: Tab) => {
    const newUrl = `${pathname.split('/').slice(0, -1).join('/')}/${tab.href}`;
    router.push(newUrl);
  };

  const renderComponent = () => {
    const selectedTabComponent = tabs.find((tab) => tab.href === details) || tabs[0];
    const Component = selectedTabComponent.component;
    return <Component />;
  };

  useEffect(() => {
    if (!details) {
      const defaultUrl = `${pathname}/journals`;
      router.replace(defaultUrl);
      setSelectedTab(tabs[0].name);
    } else {
      const selectedTab = tabs.find((tab) => tab.href === details);
      if (selectedTab) {
        setSelectedTab(selectedTab.name);
      }
    }
  }, [details]);

  const [selectedTab, setSelectedTab] = useState<string>(details ? tabs.find(tab => tab.href === details)?.name ?? tabs[0].name : tabs[0].name);

  return (
    <section className="flex justify-center items-center">
      <div className="my-4 rounded-lg pt-2 pb-4 b-4 w-full">
        <div className="lg:mb-0 md:mb-2 flex items-center gap-2 justify-center">
          <nav
            className="-mb-px items-center flex justify-center rounded-[20px] border-[1px] border-purple-light bg-white"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab);
                }}
                className={classNames(
                  tab.name === selectedTab
                    ? "text-white font-semibold font-montserrat-alternates text-[18px] bg-secondary rounded-[20px] "
                    : "text-purple-dark font-montserrat-alternates font-semibold text-[18px] hover:text-gray-700",
                  "whitespace-nowrap py-2 px-[24px] font-medium flex lg:gap-2 items-center"
                )}
                aria-current={tab.name === selectedTab ? "page" : undefined}
              >
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="tab-content">{renderComponent()}</div>
      </div>
    </section>
  );
};

export default Tabs;
