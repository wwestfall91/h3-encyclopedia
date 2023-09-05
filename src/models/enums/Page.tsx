import { PageRoute } from "./../PageRoute";

export const Page = Object.freeze({
  Home: new PageRoute("Home", "/"),
  ComingSoon: new PageRoute("Coming Soon", "/ComingSoon"),
  AnotherOne: new PageRoute("Another One", "/AnotherOne"),
});

export default Page;
