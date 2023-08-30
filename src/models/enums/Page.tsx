import { PageRoute } from "./../PageRoute";

export const Page = Object.freeze({
  Home: new PageRoute("Home", "/"),
  ComingSoon: new PageRoute("Coming Soon", "/ComingSoon"),
});

export default Page;
