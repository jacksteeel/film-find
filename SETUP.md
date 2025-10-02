# Setup Instructions

## npm Cache Issue

If you encounter npm cache permission errors, run this command first:

```bash
sudo chown -R $(whoami) ~/.npm
```

Then proceed with installation.

## Installation Steps

1. Navigate to the project directory:
```bash
cd "/Users/jacksteel/Desktop/Film Find/film-find"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Troubleshooting

### If npm install fails with cache errors:

**Option 1** (Recommended):
```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

**Option 2** (Alternative):
```bash
npm cache clean --force
npm install --cache /tmp/npm-cache
```

**Option 3** (Use Yarn instead):
```bash
npm install -g yarn
yarn install
yarn dev
```

## Verifying Installation

After installation, you should see:
- `node_modules/` directory created
- Development server running on port 3000
- Homepage loads with Film Find design

## Next Steps

Once the app is running:
1. Check the homepage at `/`
2. Browse the lab directory at `/labs`
3. View the about page at `/about`

All data is loaded from the CSV file in the parent directory.

