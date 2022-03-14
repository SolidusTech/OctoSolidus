import { AnyStyledComponent } from 'styled-components';

export interface ILoadComponentProps {
  errorMessage?: string;
  isLoading?: boolean;
  className?: AnyStyledComponent;
  children: React.ReactNode;
}
