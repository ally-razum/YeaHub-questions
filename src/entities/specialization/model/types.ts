export interface SpecializationCreator {
  id: string;
  username: string;
}

export interface SpecializationItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: SpecializationCreator;
}

export interface SpecializationsResponse {
  total: number;
  page: number;
  limit: number;
  data: SpecializationItem[];
}
