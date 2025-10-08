import api from "../api";

export const apiViewGlossary = async () => {
  try {
    const result = await api.get(`/api/view_glossary`);
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(String(error));
    }
  }
};
