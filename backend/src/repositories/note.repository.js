import { Note } from '../models/note.model.js';
import { Category } from '../models/category.model.js';
export class NoteRepository {
    async create(data) {
        const { title, content, archived = false } = data;
        if (!title) {
            throw new Error('There is no title in the Note.');
        }
        if (!content) {
            throw new Error('There is no content in the Note.');
        }
        
        return await Note.create({
            title,
            content,
            archived,
        });
    }
    async findAllByArchived(archived) {
        return await Note.findAll({
            where: { archived },
        });
    }
    async findById(id) {
        return await Note.findOne({ where: { id } });
    }
    async updateNote(id, data) {
        const note = await this.findById(id);
        if (!note)
            return null;
        return await note.update(data);
    }
    async deleteNote(id) {
        const note = await this.findById(id);
        if (!note)
            return false;
        await note.destroy();
        return true;
    }
    async addCategory(noteId, categoryId) {
        const note = await this.findById(noteId);
        if (note) {
            const category = await Category.findByPk(categoryId);
            if (category) {
                await note.addCategory(category);
            }
        }
    }
    async removeCategory(noteId, categoryId) {
        const note = await this.findById(noteId);
        if (note) {
            const category = await Category.findByPk(categoryId);
            if (category) {
                await note.removeCategory(category);
            }
        }
    }
    async findByCategory(categoryId) {
        return await Note.findAll({
            include: {
                model: Category,
                where: { id: categoryId },
            },
        });
    }
}
