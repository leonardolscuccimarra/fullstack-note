import { DocsService } from '../services/docs.service.js';
import { handleError, handleSuccess } from '../utils/response.util.js';
const docsService = new DocsService();
export class DocsController {
    async getDocs(req, res) {
        try {
            const docs = await docsService.getDocs();
            return handleSuccess(res, docs, 'Docs Successfully Returned.');
        }
        catch (error) {
            return handleError(res, error, 'Error reading Docs.');
        }
    }
}