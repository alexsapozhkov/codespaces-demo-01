declare interface IHelloWorldWebpartWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'HelloWorldWebpartWebPartStrings' {
  const strings: IHelloWorldWebpartWebPartStrings;
  export = strings;
}
