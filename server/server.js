const express = require('express');
const app = express();
const data = require('./data.json'); 
const e = require('express');

app.use(express.json());

//VBS HTTP

app.get('/entitys', function (req, res) {
    res.json(data);

});

app.get('/entitys/:id', function (req, res) {
    const { id } = req.params;
    const entity = data.entitys.find(ent => ent.id == id);

    if (!entity) {
        return res.status(204).json({ message: 'Não foi possível encontrar a Entidade' });
    }

    res.json(entity);
});

app.post('/entitys/', function (req, res) {
    const {empresa, cnpj, email, telefone, endereco} = req.body;
    const newEntity = { empresa, cnpj, email, telefone, endereco };
    data.entitys.push(newEntity);

    res.status(201).json(newEntity);
    
});

app.put('/entitys/:id', function (req, res) {
    const { id } = req.params;
    const entity = data.entitys.find(ent => ent.id == id);

    if (!entity) {
        return res.status(204).json();
    }

    const {empresa, cnpj, email, telefone, endereco} = req.body;
    entity.empresa = empresa;
    entity.cnpj = cnpj;
    entity.email = email;
    entity.telefone = telefone;

    res.json(entity);


});

app.delete('/entitys/:id', function (req, res) {
    const { id } = req.params
    data.entitys = data.entitys.filter(entity => entity.id != id);

    res.json({message: 'Entidade Removida', entitites: data.entitys});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});