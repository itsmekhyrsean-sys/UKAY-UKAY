# UkayPro Project Structure

UkayPro is now organized as a small full-stack project.

## Folders

- `frontend/` contains the current HTML, CSS, and browser JavaScript app.
- `backend/` contains a dependency-free Node API scaffold.
- `shared/` contains code or schema definitions that both sides can reuse later.
- `docs/` contains project notes and setup documentation.

## Run

Open the frontend directly:

```txt
frontend/index.html
```

Start the backend API:

```bash
npm start
```

The API starts on:

```txt
http://localhost:4000
```

Useful endpoints:

```txt
GET /api/health
GET /api/inventory
GET /api/orders
POST /api/inventory
PATCH /api/inventory/:id
DELETE /api/inventory/:id
```
