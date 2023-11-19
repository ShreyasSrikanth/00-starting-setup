const path = require('path');
const fs = require('fs');
let product = []

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save(){
        const p = path.join(path.dirname(require.main.filename),
        'data',
        'products.json'
        );
        fs.readFile(p, (err, fileContent)=>{
            let products = []
            if(!err){
                products = JSON.parse(fileContent)
            }
            products.push(this); //pushes new data
            fs.writeFile(p,JSON.stringify(products), (err) =>{
               console.log(err);
            });
        })
    }

    static fetchAll(){
        const p = path.join(path.dirname(require.main.filename),
        'data',
        'products.json'
        );

        fs.readFile(p, (err,fileContent) =>{
            let products = [];
            if(err){
                return [];         
            }
            product = JSON.parse(fileContent);
            return products;
        })

        return product;
    }
}