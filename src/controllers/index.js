'use strict';

var routes = {
    aviso: require('../models/aviso'),
    avisos: require('../models/aviso'),

    cliente: require('../models/cliente'),
    clientes: require('../models/cliente'),

    contato: require('../models/contato'),
    contatos: require('../models/contato'),

    curriculos: require('../models/curriculo'),
    curriculo: require('../models/curriculo'),

    empregos: require('../models/emprego'),
    emprego: require('../models/emprego'),

    equipe: require('../models/equipe'),
    equipes: require('../models/equipe'),

    orcamentos: require('../models/orcamento'),
    orcamento: require('../models/orcamento'),

    parceiros: require('../models/parceiro'),
    parceiro: require('../models/parceiro'),

    sites: require('../models/site'),
    site: require('../models/site'),

    slides: require('../models/slide'),
    slide: require('../models/slide'),

    produtos: require('../models/produto'),
    produto: require('../models/produto'),

    carrinhos: require('../models/carrinho'),
    carrinho: require('../models/carrinho'),
};

exports.list = function(req, res) {
    var modulo = req.params.modulo;
    var route = eval('routes.' + modulo);

    if (route == undefined) {
        return res.status(404).send('Módulo não encontrado');
    }

    (route).list(req, res, function(err, rows) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json(rows);
    });
};

exports.get = function(req, res) {
    var modulo = req.params.modulo;
    var route = eval('routes.' + modulo);

    if (route == undefined) {
        return res.status(404).send('Módulo não encontrado: ');
    }

    (route).get(req, res, function(err, rows) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json(rows);
    });
};

exports.create = function(req, res) {
    var modulo = req.params.modulo;
    var route = eval('routes.' + modulo);

    if (route == undefined) {
        return res.status(404).send('Módulo não encontrado');
    }

    (route).create(req, res, function(err, rows) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json(rows);
    });
};

exports.update = function(req, res) {
    var modulo = req.params.modulo;
    var route = eval('routes.' + modulo);

    if (route == undefined) {
        return res.status(404).send('Módulo não encontrado');
    }

    (route).update(req, res, function(err, rows) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json(rows);
    });
};

exports.remove = function(req, res) {
    var modulo = req.params.modulo;
    var route = eval('routes.' + modulo);

    if (route == undefined) {
        return res.status(404).send('Módulo não encontrado');
    }

    (route).delete(req, res, function(err, rows) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json(rows);
    });
};

exports.login = function (req, res) {
    var route = require('../models/usuario');

    (route).auth(req, res, function (err, rows) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json(rows);
    });
};