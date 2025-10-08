import api from "../api";

export const apiPutNewGlossary = async (data: string) => {
  try {
    await api.put(`/api/new_glossary`, { data });
    return true;
  } catch (error) {
    console.log("error:", error);
    return false;
  }
};
