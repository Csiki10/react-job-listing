export interface Job {
  id: string; // todo itt az id nem jó mert _id mongoban
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}
