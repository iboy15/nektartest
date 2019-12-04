interface Carousel {
  title: String;
  progress: String;
}

interface Todo {
  title: String;
  avatar: String;
  companyBadge: String;
}

interface DealsLead {
  titnamele: String;
  avatar: String;
  progress: String;
}

export interface Props {
  carousels: Array<Carousel>;
  getCarousel(): any;
  isFetchingCarousel: boolean;
  isFetchingErrorCarousel: boolean;

  todo: Array<Todo>;
  getTodo(): any;
  isFetchingTodo: boolean;
  isFetchingErrorTodo: boolean;

  dealsLead: Array<DealsLead>;
  getDealLeads(): any;
  isFetchingDealsLead: boolean;
  isFetchingErrorDealsLead: boolean;

  navigation(): any;
}
