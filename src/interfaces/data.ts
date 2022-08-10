export interface ITabData {
  id: number;
  label: string;
}

export interface IFolderData extends ITabData {
  tabs: ITabData[];
}
