/* import dotenv from "dotenv" ;

dotenv.config(); */
const URL = process.env.APIURL || "http://localhost";
const PORT = process.env.APIPORT || 8080;
const API = `${URL}:${PORT}`;
 
export async function fetchActiveNotes() {
  const APICall = `${API}/active`
    
    try {
        const response = await fetch(APICall);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const values = await response.json();
        return values;

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

export async function fetchArchivedNotes() {
  const APICall = `${API}/archived`
    
    try {
        const response = await fetch(APICall);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const values = await response.json();
        return values;

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

export async function fetchNotesByCategory(categoryId){
    if (categoryId === null) throw new Error('No category selected for API fetch call');
    const APICall = `${API}/api/notes/by-category/${categoryId}`;

    try {
        const response = await fetch(APICall);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const values = await response.json();
        return values;

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}