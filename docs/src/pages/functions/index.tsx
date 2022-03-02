import type { NextPage } from 'next';
import { INextPage } from 'types/INextPage';

const FunctionsPage: NextPage<INextPage> = ({ t }) => {
  return (
    <div>
      <p>{t('Functions.title')}</p>
    </div>
  );
};

export default FunctionsPage;
