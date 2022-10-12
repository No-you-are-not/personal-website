import { ReactNode } from 'react';

export interface ITabData {
  id: number;
  label: string;
  post?: ReactNode;
}

export interface IFolderData extends ITabData {
  tabs: ITabData[];
}
