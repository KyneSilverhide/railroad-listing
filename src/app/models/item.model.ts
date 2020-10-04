export interface Section {
  name: string;
  code: string;
}

export type WarningType = 'WARNING' | 'CRITICAL';

export interface Item {
  imagePath: string;
  reference: string;
  quantity: string;
  comment: string;
  fullSize?: boolean;
  warning?: WarningType;
}
