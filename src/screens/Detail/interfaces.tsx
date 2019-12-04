interface Detail {
  title: String;
  avatar: String;
  companyBadge: String;
}

export interface Props {
  details: Array<Detail>;
  getDetails(): any;
  isFetchingDetails: boolean;
  isFetchingErrorDetails: boolean;

  navigation(): any;
}
