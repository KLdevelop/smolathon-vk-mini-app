import { ReactNode } from 'react';
import './PanelTabSelector.scss';

interface PanelTabSelectorProps {
  activeTab: string | null;
  tabComponents: Record<string, () => ReactNode>;
}

export const PanelTabSelector = ({ activeTab, tabComponents }: PanelTabSelectorProps) => {
  if (activeTab === null) return null;
  return tabComponents[activeTab]();
};
