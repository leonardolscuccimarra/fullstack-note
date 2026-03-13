# Tools used in Front End Implementation:

pnpm v10.30.3
next.js v16.1.6
react 1.2.0
shadcn 4.0.0
typescript 5.9.3
tailwindcss 4.2.1

# Tools used in Back End Implementation

npm 11.11.0
node.js 24.13.1
@sequelize/mysql: 7.0.0-alpha.48
dotenv: 17.3.1
express: 5.2.1
mysql2: 3.19.0
sequelize: 6.37.7

# Tools used for Database

MySQL 8.0.45

# RestAPI Endpoints

/ GET: Returns API docs (Landing)

/api GET: Also Returns API docs


/api/notes POST: Creates Note
/api/notes/:id PUT: Updates Note ID
/api/notes/:id DELETE: Deletes Note ID
/api/notes/active GET: Returns Active Notes
/api/notes/archived GET: Returns Archived Notes
/api/notes/:id/category/:categoryId POST: Add Category to Note ID
/api/notes/:id/category/:categoryId DELETE: Remove Category from Note ID
/api/notes/by-category/:categoryId GET: Returns Notes by Category ID

/api/categories POST: Creates Category
/api/categories GET: Return Categories
/api/categories/:id GET: Return Category by ID
/api/categories/:id PUT: Update a Category by ID
/api/categories/:id DELETE: Delete Category by ID