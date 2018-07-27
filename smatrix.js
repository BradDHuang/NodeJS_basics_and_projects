
const fs = require("fs");

const http = require("http");

const port = 8080;

var getData;
fs.readFile('./spiralmatrixui.html', (err, data) => {
    if (err) throw err;
    getData = data;
    return data;
});

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    // console.log(typeof(`${req.url}`)); // string
    // let num = `${req.url}`.split('/')[1];
    let num;
    if (`${req.url}` === '/' || `${req.url}` === "/spiralMatrix.js") {
        res.writeHead(200, {'Content-Type': 'text/html'});
            
        res.write(getData);
        res.end();
    } else {
        num = `${req.url}`.split('=')[1].split('&')[0];

        // console.log(num);
        if (num <= 0) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h2>Invalid input:</h2> Please enter an integer that is no less than 1.<br> You entered: ${num}.`);
        } else {
            let matrix = spiralMatrix(num);
        
            res.writeHead(200, {'Content-Type': 'text/html'});
            
            res.write(getData);
            
            res.write("<br>");
            res.write("<div style='color: orange' class='result'>");
            for (let i = 0; i < num; i++) {
                res.write(` [ ${matrix[i]} ] <br>`);
            }
            res.write("</div>");
            
            res.write("<br>");
            res.end(`This is a ${num}-D Spiral Matrix.`);
        }
    }

    
    
});

server.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});

function spiralMatrix(y) {
    if (y <= 0) {
        return "Invalid input integer.";
    }
    let res = [];
    for (let i = 0; i < y; i++) {
        res[i] = [];
    }
    let row = 0;
    let rowEnd = y - 1;
    let col = 0;
    let colEnd = y - 1;
    let c = 0;
    while (row <= rowEnd && col <= colEnd) {
        for (let i = col; i <= colEnd; i++) {
            res[row][i]= ++c;
        }
        row++;
        for (let i = row; i <= rowEnd; i++) {
            res[i][colEnd] = ++c;
        }
        colEnd--;
        if (row <= rowEnd) {
            for (let i = colEnd; i >= col; i--) {
                res[rowEnd][i] = ++c;
            }
            rowEnd--;
        }
        if (colEnd >= col) {
            for (let i = rowEnd; i >= row; i--) {
                res[i][col] = ++c;
            }
            col++;
        }
    }
    return res;
}