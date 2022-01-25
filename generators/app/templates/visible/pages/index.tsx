import type { NextPage } from '@frontendlive/nextjs-utils';

import Home from '@/features/core/Home/Home';

const Page: NextPage = () => <Home />;

Page.route = {
  path: '/',
};

export default Page;
