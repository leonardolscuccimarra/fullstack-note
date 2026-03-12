import { NoteService } from '../services/note.service.js';
import { handleError, handleSuccess } from '../utils/response.util.js';
const noteService = new NoteService();
export class NoteController {
    async create(req, res) {
        try {
            const note = await noteService.createNote(req.body);
            return handleSuccess(res, note, 'Note created Successfully.');
        }
        catch (error) {
            return handleError(res, error, 'Error creating note.');
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedNote = await noteService.updateNote(Number(id), req.body);
            if (!updatedNote) {
                return handleError(res, null, 'Note not Found.', 404);
            }
            return handleSuccess(res, updatedNote, 'Note updated successfully.');
        }
        catch (error) {
            return handleError(res, error, 'Error updating note.');
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await noteService.deleteNote(Number(id));
            if (!deleted) {
                return handleError(res, null, 'Note not Found.', 404);
            }
            return handleSuccess(res, null, 'Note successfully deleted.', 204);
        }
        catch (error) {
            return handleError(res, error, 'Error deleting Note.');
        }
    }
    async getActiveNotes(req, res) {
        try {
            const activeNotes = await noteService.getActiveNotes();
            return handleSuccess(res, activeNotes, 'Active notes successfully obtained.');
        }
        catch (error) {
            return handleError(res, error, 'Error obtaining active notes.');
        }
    }
    async getArchivedNotes(req, res) {
        try {
            const archivedNotes = await noteService.getArchivedNotes();
            return handleSuccess(res, archivedNotes, 'Archived notes successfully obtained.');
        }
        catch (error) {
            return handleError(res, error, 'Error obtaining archived notes.');
        }
    }
    async addCategoryToNote(req, res) {
        try {
            const { id, categoryId } = req.params;
            await noteService.addCategoryToNote(Number(id), Number(categoryId));
            return handleSuccess(res, null, 'Successfully added category to note.');
        }
        catch (error) {
            return handleError(res, error, 'Error adding category to note.');
        }
    }
    async removeCategoryFromNote(req, res) {
        try {
            const { id, categoryId } = req.params;
            await noteService.removeCategoryFromNote(Number(id), Number(categoryId));
            return handleSuccess(res, null, 'Successfully deleted category from note.');
        }
        catch (error) {
            return handleError(res, error, 'Error deleting category from note.');
        }
    }
    async getNotesByCategory(req, res) {
        try {
            const { categoryId } = req.params;
            const notes = await noteService.getNotesByCategory(Number(categoryId));
            return handleSuccess(res, notes, 'Succesfully obtained notes filtered by category.');
        }
        catch (error) {
            return handleError(res, error, 'Error obtaining notes filtered by category.');
        }
    }
}
