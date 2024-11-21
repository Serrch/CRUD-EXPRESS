const { Router } = require('express');
const router = Router();
const fs = require('fs');

// Leer y parsear el archivo JSON de usuarios al inicio
let usuarios = [];
try {
    const json_usuarios = fs.readFileSync('src/usuarios.json', 'utf-8');
    usuarios = JSON.parse(json_usuarios);
} catch (error) {
    console.error('Error al leer usuarios.json:', error);
    usuarios = []; // Si hay un error, iniciar un arreglo vacío
}

// Ruta para mostrar todos los usuarios
router.get('/', (req, res) => {
    const usuariosPorPagina = 12; 
    const pagina = parseInt(req.query.page) || 1; 

    const inicio = (pagina - 1) * usuariosPorPagina;
    const fin = inicio + usuariosPorPagina;
    
    const usuariosPaginados = usuarios.slice(inicio, fin);

    const totalPaginas = Math.ceil(usuarios.length / usuariosPorPagina);

    res.render('index.ejs', {
        usuarios: usuariosPaginados,
        paginaActual: pagina,
        totalPaginas,
    });
});


router.get('/new-entry', (req, res) => {
    res.render('new-entry.ejs');
});


router.post('/new-entry', (req, res) => {
    const { nombre, email, telefono } = req.body;

    if (!nombre || !email || !telefono) {
        console.log('Faltan campos');
        res.redirect('/');
        return;
    }

    let maxId = usuarios.reduce((max, usuario) => Math.max(max, usuario.id), 0);
    let nuevoUsuario = { id: maxId + 1, nombre, email, telefono };

    usuarios.push(nuevoUsuario);

    try {
        fs.writeFileSync('src/usuarios.json', JSON.stringify(usuarios, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error al guardar usuarios.json:', error);
    }
    res.redirect('/');
});


router.get('/delete/:id', (req, res) => {
    usuarios = usuarios.filter(usuario => usuario.id != req.params.id);

    try {
        fs.writeFileSync('src/usuarios.json', JSON.stringify(usuarios, null, 2), 'utf-8');
        console.log('Eliminado correctamente');
    } catch (error) {
        console.error('Error al guardar usuarios.json:', error);
        console.log('Error al eliminar');
    }
    res.redirect('/');
});


router.get('/update/:id', (req, res) => {
    const usuario = usuarios.find(usuario => usuario.id == req.params.id); // Buscar el usuario por ID
    if (!usuario) {
        res.status(404).send('Usuario no encontrado');
        return;
    }
    res.render('update-entry.ejs', { usuario });
});

router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;

    const usuarioIndex = usuarios.findIndex(usuario => usuario.id == id);
    if (usuarioIndex === -1) {
        console.log('Usuario no encontrado');
        res.redirect('/');
        return;
    }

    usuarios[usuarioIndex] = { id: parseInt(id), nombre, email, telefono };

    try {
        fs.writeFileSync('src/usuarios.json', JSON.stringify(usuarios, null, 2), 'utf-8');
        console.log('Actualizado correctamente');
    } catch (error) {
        console.error('Error al guardar usuarios.json:', error);
        console.log('Error al actualizar');
    }
    res.redirect('/');
});


router.get('/api-key', (req, res) => {
    const apiKey = '3788a8440f77fa6322c25c894dadfc09'; // Tu API key
    res.json({ apiKey }); // Enviar la clave como JSON
});


module.exports = router;
