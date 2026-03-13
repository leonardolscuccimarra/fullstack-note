
export class DocsService {
    async getDocs() {
        const docs = {
            title: "API Documentation for backend-note",
            endPoints: [
                {
                    docs:[{
                        route: "/",
                        method: "GET",
                        result: "Returns API docs (Landing)"
                    },
                    {
                        route: "/api",
                        method: "GET",
                        result: "Returns API docs (Landing)"
                    }
                    ],
                    notes: [{
                        route: "/api/notes",
                        method: "POST",
                        result: "Creates Note"
                    },
                    {
                        route: "/api/notes/:id",
                        method: "PUT",
                        result: "Updates Note ID"
                    },
                    {
                        route: "/api/notes/:id",
                        method: "DELETE",
                        result: "Deletes Note ID"
                    },
                    {
                        route: "/api/notes/active",
                        method: "GET",
                        result: "Returns Active Notes"
                    },
                    {
                        route: "/api/notes/archived",
                        method: "GET",
                        result: "Returns Archived Notes"
                    },
                    {
                        route: "/api/notes/:id/category/:categoryId",
                        method: "POST",
                        result: "Add Category to Note ID"
                    },
                    {
                        route: "/api/notes/:id/category/:categoryId",
                        method: "DELETE",
                        result: "Removes Category from Note ID"
                    },
                    {
                        route: "/api/notes/by-category/:categoryId",
                        method: "GET",
                        result: "Get Notes for Category ID"
                    },
                    ],
                    categories: [{
                        route: "/api/categories",
                        method: "POST",
                        result: "Creates Category"
                    },
                    {
                        route: "/api/categories",
                        method: "GET",
                        result: "Return Categories"
                    },
                    {
                        route: "/api/categories/:id",
                        method: "GET",
                        result: "Return Category by ID"
                    },
                    {
                        route: "/api/categories/:id",
                        method: "PUT",
                        result: "Update a Category by ID"
                    },
                    {
                        route: "/api/categories/:id",
                        method: "DELETE",
                        result: "Delete Category by ID"
                    }
                    ]
                }
            ]

        }; //alternatively: await docsRepository.getDocs()

        return docs;
    }
}
