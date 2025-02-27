import { PageRoute } from "./../PageRoute";

export const Page = Object.freeze({
  Homepage: new PageRoute("Home", "/"),
  Soundbites: new PageRoute("Soundbites", "/soundbites"),
  ComingSoon: new PageRoute("Coming Soon", "/ComingSoon"),
  Iceberg: new PageRoute("Iceberg", "/Iceberg"),
  Crew: new PageRoute("Crew", "/Crew"),
  Button: new PageRoute("Button", "/Button"),
  People: new PageRoute("People", "/People")
});

export default Page;
