import api from "../api";

export const apiClearGlossary = async () => {
  try {
    await api.delete(`/api/clear_glossary`);
    return true;
  } catch (error) {
    console.log("error:", error);
    return false;
  }
};
