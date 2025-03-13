import { dndApiEndpoint } from "@/config/env";
import { BaseEntity } from "@/domain/models/BaseEntity";
import { JobClass } from "@/domain/models/Class";
import axios from "axios";

export async function getAllClasses(): Promise<BaseEntity[]> {
  try {
    const res = await axios.get(`${dndApiEndpoint}/api/2014/classes`);
    if (res.data && res.data.results) {
      return res.data.results;
    } else {
      console.error("Erro: API invalid answer.", res.data);
      return [];
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "getAllClasses error:",
        error.response?.data || error.message
      );
    } else {
      console.error("getAllClasses unkown error:", error);
    }
    return [];
  }
}

export async function getClassByIndex(index: string): Promise<JobClass | null> {
  try {
    const res = await axios.get(`${dndApiEndpoint}/api/2014/classes/${index}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "getClassByIndex error:",
        error.response?.data || error.message
      );
    } else {
      console.error("getClassByIndex unknown error:", error);
    }
    return null;
  }
}
