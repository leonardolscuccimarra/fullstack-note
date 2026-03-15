/* import dotenv from "dotenv" ;

dotenv.config(); */
const URL = process.env.API_URL ?? "http://localhost";
const PORT = process.env.API_PORT ?? 8080;

function normalizeBaseUrl(baseUrl) {
  if (!baseUrl) return "";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

export function getApiBaseUrl() {
  const URL = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL ?? "http://localhost");
  const PORT = process.env.NEXT_PUBLIC_API_PORT ?? process.env.API_PORT ?? 8080;
  return `${URL}:${PORT}`;
}
 
export async function fetchActiveNotes() {
  const APICall = `${getApiBaseUrl()}/api/notes/active`
    
    try {
        const response = await fetch(APICall);
        if (!response.ok) {
            const err = await response.text();
            throw new Error(err || `Error HTTP: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

export async function fetchArchivedNotes() {
  const APICall = `${getApiBaseUrl()}/api/notes//archived`
    
    try {
        const response = await fetch(APICall);
        if (!response.ok) {
            const err = await response.text();
            throw new Error(err || `Error HTTP: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

export async function fetchNotesByCategory(categoryId){
    if (categoryId === null) throw new Error('No category selected for API fetch call');
    const APICall = `${getApiBaseUrl()}/api/notes/by-category/${categoryId}`;

    try {
        const response = await fetch(APICall);
        if (!response.ok) {
            const err = await response.text();
            throw new Error(err || `Error HTTP: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}