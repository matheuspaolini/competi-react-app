import * as S from './styles';

import * as T from './types';

import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }: T.LayoutProps) {
  return (
    <>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </>
  );
}
