import type { SpecializationItem } from "../../specialization/model/types";

export interface SkillCreator {
  id: string;
  username: string;
}

export interface SkillItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: SpecializationItem[];
  createdBy: SkillCreator;
}

export interface SkillsResponse {
  total: number;
  page: number;
  limit: number;
  data: SkillItem[];
}