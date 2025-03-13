import { dndApiEndpoint } from "@/config/env";
import { BaseEntity } from "@/domain/models/BaseEntity";
import { Race } from "@/domain/models/Race";
import axios from "axios";

export async function getAllRaces(): Promise<BaseEntity[]> {
  try {
    const res = await axios.get(`${dndApiEndpoint}/api/2014/races`);
    if (res.data && res.data.results) {
      return res.data.results;
    } else {
      console.error("Erro: API invalid answer.", res.data);
      return [];
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "getAllRaces error:",
        error.response?.data || error.message
      );
    } else {
      console.error("getAllRaces unkown error:", error);
    }
    return [];
  }
}

export async function getRaceByIndex(index: string): Promise<Race | null> {
  try {
    const res = await axios.get(`${dndApiEndpoint}/api/2014/races/${index}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "getRaceByIndex error:",
        error.response?.data || error.message
      );
    } else {
      console.error("getRaceByIndex unkown error:", error);
    }
    return null;
  }
}
