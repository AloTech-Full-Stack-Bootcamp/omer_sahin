const http = require('http')

const server = http.createServer((req, res) => {
    console.log("Bir istek gönderildi")
    const url = req.url;
  // İndex page
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<head><meta charset="UTF-8"></head>')
        res.write('<h2>Merhaba index sayfasına hoşgeldiniz</h2>')
        res.end()
    }
  // About page
    else if (url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write('<head><meta charset="UTF-8"></head>')
        res.write('<h2>Merhaba hakkımızda sayfasına hoşgeldiniz</h2>')
        res.end()
    }
  // Contact page
    else if (url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write('<head><meta charset="UTF-8"></head>')
        res.write('<h2>Merhaba contact sayfasına hoşgeldiniz</h2>')
        res.end()
    }
  // If the page does not exist
    else {
        res.write('<h2>404 Not Found</h2>')
        res.end()
    }
})
// Server listen
const port = 5000
server.listen(port, () => {
    console.log(`Sunucu ${port} ile başlatıldı`)
})
