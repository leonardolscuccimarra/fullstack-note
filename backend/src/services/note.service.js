import { NoteRepository } from '../repositories/note.repository.js';
const noteRepository = new NoteRepository();
export class NoteService {
    async createNote(data) {
        return await noteRepository.create(data);
    }
    async updateNote(id, data) {
        return await noteRepository.updateNote(id, data);
    }
    async deleteNote(id) {
        return await noteRepository.deleteNote(id);
    }
    async getActiveNotes() {
        return await noteRepository.findAllByArchived(false);
    }
    async getArchivedNotes() {
        return await noteRepository.findAllByArchived(true);
    }
    async addCategoryToNote(noteId, categoryId) {
        await noteRepository.addCategory(noteId, categoryId);
    }
    async removeCategoryFromNote(noteId, categoryId) {
        await noteRepository.removeCategory(noteId, categoryId);
    }
    async getNotesByCategory(categoryId) {
        return await noteRepository.findByCategory(categoryId);
    }
}
