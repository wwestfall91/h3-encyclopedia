import { PageRoute } from "./../PageRoute";

export const Page = Object.freeze({
  Soundbites: new PageRoute("Soundbites", "/Soundbites"),
  ComingSoon: new PageRoute("Coming Soon", "/ComingSoon"),
  Iceberg: new PageRoute("Iceberg", "/Iceberg"),
});

export default Page;
