import { PageRoute } from "./../PageRoute";

export const Page = Object.freeze({
  Soundbites: new PageRoute("Soundbites", "/"),
  ComingSoon: new PageRoute("Coming Soon", "/ComingSoon"),
  Iceberg: new PageRoute("Iceberg", "/Iceberg"),
  Crew: new PageRoute("Crew", "/Crew"),
  Button: new PageRoute("Button", "/Button"),
});

export default Page;
