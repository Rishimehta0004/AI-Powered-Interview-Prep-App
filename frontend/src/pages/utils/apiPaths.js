export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
  // Auth
  LOGIN: `${BASE_URL}/api/auth/login`,
  SIGNUP: `${BASE_URL}/api/auth/register`,
  UPLOAD_IMAGE: `${BASE_URL}/api/auth/upload-image`,

  // Sessions
  CREATE_SESSION: `${BASE_URL}/api/sessions/create`,
  GET_MY_SESSIONS: `${BASE_URL}/api/sessions/my-sessions`,
  GET_SESSION_BY_ID: (id) => `${BASE_URL}/api/sessions/${id}`,
  DELETE_SESSION: (id) => `${BASE_URL}/api/sessions/${id}`,

  // Questions
  PIN_QUESTION: (id) => `${BASE_URL}/api/questions/${id}/pin`,
  UPDATE_QUESTION_NOTE: (id) => `${BASE_URL}/api/questions/${id}/note`,
  ADD_QUESTIONS: `${BASE_URL}/api/questions/add`,
  GET_QUESTIONS: (sessionId) => `${BASE_URL}/api/questions?sessionId=${sessionId}`,

  // AI
  GENERATE_QUESTIONS: `${BASE_URL}/api/ai/generate-questions`,
  GENERATE_EXPLANATION: `${BASE_URL}/api/ai/generate-explanation`,
};

