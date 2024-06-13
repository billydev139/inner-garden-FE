"use client";

import React, { useState } from "react";
import Journals from "./journals";
import Paths from "./paths";
import Wellgorithm from "./wellgorithm";

type Tab = {
    name: string;
    href: string;
    component: React.FC;
};

const Tabs: React.FC = () => {
    const tabs: Tab[] = [
        {
            name: "Journals",
            href: "#journals",
            component: Journals,
        },
        { name: "Wellgorithm", href: "#wellgorithm", component: Wellgorithm },
        { name: "Paths", href: "#paths", component: Paths },
    ];

    function classNames(...classes: (string | boolean)[]) {
        return classes.filter(Boolean).join(" ");
    }

    const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);

    const handleTabClick = (tab: Tab) => {
        setSelectedTab(tab.name);
    };

    const renderComponent = () => {
        const selectedTabComponent = tabs.find((tab) => tab.name === selectedTab);
        if (selectedTabComponent) {
            const Component = selectedTabComponent.component;
            return <Component />;
        }
        return null;
    };

    return (
        <div className="flex justify-center items-center">
            <div className="my-4 rounded-lg py-4 b-4 w-full">
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
                                        ? "text-white font-semibold font-montserrat-alternates text-[18px] bg-secondary rounded-[20px]"
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
        </div>
    );
};

export default Tabs;
