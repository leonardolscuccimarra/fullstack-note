import { CategoryService } from '../services/category.service.js';
import { handleError, handleSuccess } from '../utils/response.util.js';
const categoryService = new CategoryService();
export class CategoryController {
    async create(req, res) {
        try {
            const category = await categoryService.createCategory(req.body);
            return handleSuccess(res, category, 'Successfully created category.');
        }
        catch (error) {
            return handleError(res, error, 'Error creating category.');
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            const category = await categoryService.getCategoryById(Number(id));
            if (!category) {
                return handleError(res, null, 'Category not found.', 404);
            }
            return handleSuccess(res, category, 'Category obtained successfully.');
        }
        catch (error) {
            return handleError(res, error, 'Error obtaining category.');
        }
    }
    async getAll(req, res) {
        try {
            const categories = await categoryService.getAllCategories();
            return handleSuccess(res, categories, 'All categories obtained successfully.');
        }
        catch (error) {
            return handleError(res, error, 'Error obtaining all categories.');
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedCategory = await categoryService.updateCategory(Number(id), req.body);
            if (!updatedCategory) {
                return handleError(res, null, 'Category not Found.', 404);
            }
            return handleSuccess(res, updatedCategory, 'Category successfully updated.');
        }
        catch (error) {
            return handleError(res, error, 'Error updating category.');
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await categoryService.deleteCategory(Number(id));
            if (!deleted) {
                return handleError(res, null, 'Category not found.', 404);
            }
            return handleSuccess(res, null, 'Category successfully deleted.', 204);
        }
        catch (error) {
            return handleError(res, error, 'Error deleting category.');
        }
    }
}
