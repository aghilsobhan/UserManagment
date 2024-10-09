export interface MenuItem {
  id: number;
  icon: string;
  title: string;
  path: string;
  children: MenuItem[] | null;
}
