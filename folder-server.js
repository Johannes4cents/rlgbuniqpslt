const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8000;

const rootFolder = __dirname;

app.use('/scrolls', express.static(rootFolder));
app.use(express.json());

// 🌐 Index all scroll paths recursively
function indexAllFiles(dir, base = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(base, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(indexAllFiles(fullPath, relativePath));
    } else {
      results.push({ fullPath, relativePath });
    }
  });
  return results;
}

// 🔎 GET all files
app.get('/index-all', (req, res) => {
  const files = indexAllFiles(rootFolder).map(f => f.relativePath);
  res.json(files);
});

// ✅ Write Route
app.post('/write', (req, res) => {
  const { filePath, content } = req.body;
  const fullPath = path.join(__dirname, filePath);

  try {
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log("🖋️ Wrote to:", fullPath);
    res.send("✅ Success: File written.");
  } catch (err) {
    console.error("❌ Write error:", err);
    res.status(500).send("Write failed.");
  }
});

// 🔍 Browse Route (semantic echo style)
app.get('/browse', (req, res) => {
  try {
    const fullIndex = indexAllFiles(rootFolder);
    const map = fullIndex.map(file => ({
      "This is a scroll in your structure": [file.relativePath],
      "Shall I reflect upon it?": ["yes", "no", "later"]
    }));
    res.json(map);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`🌀 Scroll mirror live at http://localhost:${PORT}`);
});
